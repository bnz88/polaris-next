"use client";
import React, { useMemo, useState } from "react";

import dynamic from "next/dynamic";
import { Controller } from "react-hook-form";
import { useFormContext } from "react-hook-form";
import { inputConfig, selectDefaultValue } from "@/constants/common";
import InputLayout from "./InputLayout";
const Select = dynamic(() => import("react-select"), { ssr: false });

const InputSelect = ({ formId, name, value, placeholder }) => {
  const { control, getValues, watch, setValue } = useFormContext();
  const [defVal, setDefVal] = useState("");
  let defOption = "";
  if (name === "callingCode") {
    defOption = selectDefaultValue.countryPhone();
  } else if (name === "day-birthDate") {
    defOption = selectDefaultValue["day-birthDate"](
      watch("month-birthDate")?.value,
      watch("year-birthDate")?.value
    );
  } else if (name === "month-birthDate") {
    defOption = selectDefaultValue["month-birthDate"]();
  } else if (name === "year-birthDate") {
    defOption = selectDefaultValue["year-birthDate"]();
  } else {
    defOption = selectDefaultValue[name];
  }

  if (value) {
    const getAndSetDefValue = useMemo(() => {
      defOption.forEach((element) => {
        if (element.value == value) {
          setDefVal(element);
        }
      });
    }, [value]);
  }

  const cssSelect = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#2f3c50",
      border: "1px solid #3d4f68",
      padding: "0px",
      margin: "0px",
      borderRadius: "8px",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        color: isSelected ? "#fff" : "#000",
      };
    },
    input: (styles) => ({ ...styles, padding: "0px", margin: "0px" }),
    placeholder: (styles) => ({
      ...styles,
      color: "#fff",
      margin: "0px",
      padding: "0px 0px 0px 10px",
    }),
    singleValue: (styles, { data }) => ({
      ...styles,
      color: "#fff",
      padding: "0px 0px 0px 10px",
      margin: "0px",
    }),
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={inputConfig[name]}
      defaultValue={defVal}
      render={({ field }) => {
        if (
          name === "callingCode" ||
          name === "day-birthDate" ||
          name === "month-birthDate" ||
          name === "year-birthDate"
        ) {
          if (name === "month-birthDate" || name === "year-birthDate") {
            field.onBlur = (e) => {
              let currentDay = getValues("day-birthDate")?.value;
              var currentDayLength = selectDefaultValue["day-birthDate"](
                watch("month-birthDate")?.value,
                watch("year-birthDate")?.value
              );
              if (currentDay > currentDayLength.length) {
                setValue("day-birthDate", "");
              }
            };
          }

          return (
            <Select
              {...field}
              placeholder={placeholder}
              className="react-select-container"
              blurInputOnSelect
              options={defOption || {}}
              styles={cssSelect}
              defaultValue={defVal}
            />
          );
        } else {
          return (
            <InputLayout formId={formId} name={name}>
              <div className="generalSelectWrapper">
                <Select
                  {...field}
                  id={`${formId}${name}`}
                  placeholder={placeholder}
                  className="react-select-container"
                  options={defOption || {}}
                  styles={cssSelect}
                  defaultValue={defVal}
                />
              </div>
            </InputLayout>
          );
        }
      }}
    />
  );
};

export default InputSelect;

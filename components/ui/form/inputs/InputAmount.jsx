import React from "react";

import { Controller } from "react-hook-form";
import { useFormContext } from "react-hook-form";
import { useTranslations } from "next-intl";
import { inputConfig, selectDefaultValue } from "@/constants/common";
import { generalFunction } from "@/lib/generalFunction";

import InputLayout from "./InputLayout";
import CurrencyInput from "react-currency-input-field";

const InputAmount = ({ formId, name, value, min, max }) => {
  const { control, setValue } = useFormContext();
  const t = useTranslations();

  let validation = inputConfig[name] || {};
  let label = t(`${formId?.toUpperCase()}.INPUT.${name?.toUpperCase()}.LABEL`);
  let placeholder = t(
    `${formId?.toUpperCase()}.INPUT.${name?.toUpperCase()}.PLACEHOLDER`
  );
  if (min) {
    validation.validate.minAmount = (v) => {
      console.log(v);
      if (v) {
        v = generalFunction.convertAmountToRealValue(v);
        v = parseFloat(v);

        if (v < min) {
          return t("ERR.FORM.INPUT.COMMON.MIN", { 0: label, 1: min });
        }
      }
    };
  }
  if (max) {
    validation.validate.maxAmount = (v) => {
      if (v) {
        v = generalFunction.convertAmountToRealValue(v);
        v = parseFloat(v);

        if (v > max) {
          return t("ERR.FORM.INPUT.COMMON.MAX", { 0: label, 1: max });
        }
      }
    };
  }

  return (
    <Controller
      name={name}
      control={control}
      rules={validation}
      defaultValue={value}
      render={({ field }) => {
        return (
          <InputLayout formId={formId} name={name}>
            <CurrencyInput
              id={`${formId}${name}`}
              className={`bg-white text-black px-2 py-1 rounded-sm`}
              name={name}
              placeholder={placeholder}
              decimalsLimit={2}
              defaultValue={field.value}
              onValueChange={(value, name, values) => {
                console.log(value, name, values);
                field.onChange(value);
              }}
              onBlur={field.onBlur} // Propagate onBlur event
              ref={field.ref} // Propagate the ref
            />
          </InputLayout>
        );
      }}
    />
  );
};

export default InputAmount;

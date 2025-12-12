"use client";
import { useTranslations } from "next-intl";
import {
  commonInput,
  inputConfig,
  selectDefaultValue,
} from "@/constants/common";
import { useFormContext } from "react-hook-form";
import InputLayout from "./InputLayout";
import InputSelect from "./InputSelect";

const InputBirthDate = ({ formId, name, value, readonly, disabled }) => {
  const {
    watch,
    register,
    setError,
    getFieldState,
    clearErrors,
    trigger,
    formState: { errors },
  } = useFormContext();

  const t = useTranslations();

  let label = t(`${formId?.toUpperCase()}.INPUT.${name?.toUpperCase()}.LABEL`);
  let placeholder = t(
    `${formId.toUpperCase()}.INPUT.${name.toUpperCase()}.PLACEHOLDER`
  );

  let configs = inputConfig[name];

  return (
    <InputLayout formId={formId} name={name}>
      <div className="birthdateWrapper">
        <InputSelect
          formId={formId}
          name="day-birthDate"
          placeholder={t("APP.COMPONENTS.FORM.COMMON.DATE.DAY")}
        />
        <InputSelect
          formId={formId}
          name="month-birthDate"
          placeholder={t("APP.COMPONENTS.FORM.COMMON.DATE.MONTH")}
        />
        <InputSelect
          formId={formId}
          name="year-birthDate"
          placeholder={t("APP.COMPONENTS.FORM.COMMON.DATE.YEAR")}
        />
      </div>
    </InputLayout>
  );
};

export default InputBirthDate;

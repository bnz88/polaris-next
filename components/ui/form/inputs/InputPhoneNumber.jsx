"use client";
import { useTranslations } from "next-intl";
import { commonInput, inputConfig } from "@/constants/common";

import { useFormContext } from "react-hook-form";
import InputLayout from "./InputLayout";
import { checkDuplication } from "@/api/CheckDuplicationAPI";
import InputSelect from "./InputSelect";

const InputPhoneNumber = ({
  formId,
  name,
  code,
  value,
  readonly,
  disabled,
  prefield,
}) => {
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
  if (prefield) {
    configs.disabled = commonInput.config("disabled", prefield["disabled"]);
    configs.required = commonInput.config("required", prefield["required"]);
    configs.minLength = commonInput.config("minLength", prefield["minLength"]);
    configs.maxLength = commonInput.config("maxLength", prefield["maxLength"]);
    configs.min = commonInput.config("min", prefield["min"]);
    configs.max = commonInput.config("max", prefield["max"]);
  }

  if (value) {
    configs.value = value;
  }

  if (!code) {
    code = "+62";
  }

  if (name === "phones") {
    configs.onBlur = async (e) => {
      console.log(e);
      if (e.target.value && !getFieldState(name).invalid) {
        let value = e.target.value;
        const data = await checkDuplication(name.toLowerCase(), e.target.value);

        if (!data.success) {
          setError(name, {
            type: "duplicated",
            message: t(`ERR.FORM.INPUT.COMMON.DUPLICATED`, { 0: label }),
          });

          return false;
        }

        clearErrors(name);
        trigger(name);
      }
    };
  }

  console.log(configs);

  return (
    <InputLayout formId={formId} name={name}>
      <div className="phoneNumberWrapper">
        <InputSelect formId={formId} name="callingCode" value={code} />
        <input
          type="text"
          name={`${formId}${name}`}
          id={`${formId}${name}`}
          placeholder={placeholder}
          minLength={inputConfig[name].minLength?.value}
          maxLength={inputConfig[name].maxLength?.value}
          readOnly={readonly}
          className="bg-white text-black px-2 py-1 rounded-sm"
          {...register(name, configs)}
        />
      </div>
    </InputLayout>
  );
};

export default InputPhoneNumber;

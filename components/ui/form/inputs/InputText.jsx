"use client";
import { useTranslations } from "next-intl";
import { commonInput, inputConfig } from "@/constants/common";
import { useFormContext } from "react-hook-form";
import InputLayout from "./InputLayout";
import {
  checkDuplication,
  checkEmailDuplication,
} from "@/api/CheckDuplicationAPI";

const InputText = ({
  type,
  formId,
  name,
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

  if (prefield && prefield.length) {
    configs.disabled = prefield["disabled"];
    configs.required = commonInput.config("required", prefield["required"]);
    configs.minLength = commonInput.config("minLength", prefield["minLength"]);
    configs.maxLength = commonInput.config("maxLength", prefield["maxLength"]);
    configs.min = commonInput.config("min", prefield["min"]);
    configs.max = commonInput.config("max", prefield["max"]);
  }

  if (value) {
    configs.value = value;
  }

  if (disabled === "true") {
    configs.disabled = true;
  }

  if (name === "lastName") {
    configs.disabled = watch("nolastName");
    configs.required = !watch("nolastName")
      ? commonInput.config("required", true)
      : false;
  }

  var checkDuplication2 = false;
  if (
    name === "username" ||
    name === "bankAccount" ||
    name === "phone" ||
    name === "email"
  ) {
    configs.onBlur = async (e) => {
      if (e.target.value && !getFieldState(name).invalid) {
        let value = e.target.value;
        const data = await checkDuplication(name.toLowerCase(), e.target.value);

        setError(name, {
          type: "validatingEmail",
          message: "",
        });

        if (!data.success) {
          setError(name, {
            type: "duplicated",
            message: t(`ERR.FORM.INPUT.COMMON.DUPLICATED`, { 0: label }),
          });

          return false;
        }

        if (data.success && name === "email") {
          const checkEmail = await checkEmailDuplication(e.target.value);
          if (
            checkEmail.errorCode === 0 &&
            checkEmail.data.success &&
            checkEmail.data.result
          ) {
            setError(name, {
              type: "emailNotValid",
              message: t(`ERR.FORM.INPUT.COMMON.EMAILNOTVALID`),
            });
            return false;
          }
        }

        clearErrors(name);
        trigger(name);
      }
    };
  }
  return (
    <InputLayout formId={formId} name={name}>
      <input
        type={type}
        name={`${formId}${name}`}
        id={`${formId}${name}`}
        placeholder={placeholder}
        readOnly={readonly}
        minLength={inputConfig[name].minLength?.value}
        maxLength={inputConfig[name].maxLength?.value}
        className="bg-white text-black px-2 py-1 rounded-sm"
        {...register(name, configs)}
      />
    </InputLayout>
  );
};

export default InputText;

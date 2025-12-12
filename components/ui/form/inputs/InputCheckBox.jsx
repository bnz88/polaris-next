import { useTranslations } from "next-intl";
import { inputConfig } from "@/constants/common";
import { useFormContext } from "react-hook-form";
import InputLayout from "./InputLayout";
import parseHtml from "../../../utils/parseHtml";

const InputCheckBox = ({ type, formId, name, value, readonly, disabled }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { t } = useTranslations();

  let label = t(`${formId?.toUpperCase()}.INPUT.${name?.toUpperCase()}.LABEL`);

  label = `${label} ${
    inputConfig[name]?.required?.value && '<span class="text-red-700">*</span>'
  }`;

  let configs = inputConfig[name];
  if (value) {
    configs.value = value;
  }

  if (disabled === "true") {
    configs.disabled = true;
  }

  return (
    <InputLayout formId={formId} name={name} isCheckbox={true}>
      <input
        type="checkbox"
        name={`${formId}${name}`}
        id={`${formId}${name}`}
        readOnly={readonly}
        {...register(name, configs)}
      />
      <label htmlFor={`${formId}${name}`}>{parseHtml(label)}</label>
    </InputLayout>
  );
};

export default InputCheckBox;

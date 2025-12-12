import { useTranslations } from "next-intl";
import { commonInput, inputConfig } from "@/constants/common";
import { useFormContext } from "react-hook-form";
import InputLayout from "./InputLayout";
import { BiRefresh } from "react-icons/bi";
import { useEffect, useState } from "react";
import { ApiCall } from "../../../api/ApiCalls";

const InputCaptcha = ({
  instanceId,
  formId,
  name,
  value,
  readonly,
  disabled,
}) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const [captchaImg, setCaptchaImg] = useState("");

  const getCaptcha = async (argInstanceId, argCaptchaId) => {
    var dataTosend = {
      instanceId: argInstanceId,
      captchaId: argCaptchaId,
    };
    const response = await ApiCall({}, true).get(`/fe-api/captcha/imageUrl`, {
      params: dataTosend,
    });

    if (response.data.success) {
      let captchaUrl = response.data.imageUrl.replace(/&amp;/g, "&");
      setValue("captchaId", argCaptchaId);
      setValue("instanceId", captchaUrl.split("&").pop().replace("t=", ""));
      console.log(response.data);
      setCaptchaImg("http://www.goldenlele.net" + captchaUrl);
    }
  };

  const { t } = useTranslations();

  let label = t(`${formId?.toUpperCase()}.INPUT.${name?.toUpperCase()}.LABEL`);
  let placeholder = t(
    `${formId.toUpperCase()}.INPUT.${name.toUpperCase()}.PLACEHOLDER`
  );

  let configs = inputConfig[name];
  if (value) {
    configs.value = value;
  }

  if (disabled === "true") {
    configs.disabled = true;
  }

  // register required captcha field
  register("captchaId", name);
  register("instanceId");

  useEffect(() => {
    getCaptcha(instanceId, name);
  }, []);

  return (
    <InputLayout formId={formId} name={name}>
      <input
        type="text"
        name={`${formId}${name}`}
        id={`${formId}${name}`}
        placeholder={placeholder}
        minLength={inputConfig[name].minLength.value}
        maxLength={inputConfig[name].maxLength.value}
        readOnly={readonly}
        className="uppercase"
        {...register(name, configs)}
      />
      <img src={captchaImg} />
      <BiRefresh
        onClick={() => {
          getCaptcha(instanceId, name);
        }}
      />
    </InputLayout>
  );
};

export default InputCaptcha;

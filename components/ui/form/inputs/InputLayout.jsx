"use client";
import { lazy, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslations } from "next-intl";
import { inputConfig } from "@/constants/common";
import { generalFunction } from "@/lib/generalFunction";
import { ErrorMessage } from "@hookform/error-message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

//const InputAmount = lazy(() => import("./InputAmount"));
//const InputSelect = lazy(() => import("./InputSelect"));
//const InputText = lazy(() => import("./InputText"));
//const InputPhoneNumber = lazy(() => import("./InputPhoneNumber"));
//const InputBirthDate = lazy(() => import("./InputBirthDate"));
//const InputCaptcha = lazy(() => import("./InputCaptcha"));
//const InputCheckBox = lazy(() => import("./InputCheckBox"));

// export const InputTemplate = (formId, data, val, code) => {
//   switch (data.formType) {
//     case "phone":
//       return (
//         <InputPhoneNumber
//           type="text"
//           formId={formId}
//           name={data.name}
//           prefield={data}
//           code={!val ? "" : "+" + code}
//           key={data.name}
//           value={val}
//         />
//       );
//       break;
//     case "password":
//       return (
//         <InputText
//           type="password"
//           formId={formId}
//           name={data.name}
//           prefield={data}
//           key={data.name}
//           value={val}
//         />
//       );

//       break;
//     case "text":
//       return (
//         <InputText
//           type="text"
//           formId={formId}
//           name={data.name}
//           prefield={data}
//           key={data.name}
//           value={val}
//         />
//       );

//       break;
//     default:
//       return (
//         <InputText
//           type="text"
//           formId={formId}
//           name={data.name}
//           prefield={data}
//           key={data.name}
//           value={val}
//         />
//       );
//   }
// };

const InputLayout = ({ children, formId, name, isCheckbox = false }) => {
  const {
    register,
    trigger,
    clearErrors,
    setError,
    formState: { errors },
  } = useFormContext();

  const t = useTranslations();

  let label = t(`${formId?.toUpperCase()}.INPUT.${name?.toUpperCase()}.LABEL`);

  if (isCheckbox) {
    label = t("ERR.FORM.INPUT.COMMON.CHECKBOXISREQUIRED");
  }

  let info = `${formId?.toUpperCase()}.INPUT.${name?.toUpperCase()}.INFO`;
  if (t(info) === info) {
    info = "";
  } else {
    info = t(info);
  }

  console.log(name);
  let err = generalFunction.handleCommonFormError(
    label,
    name,
    errors[name] || {},
    isCheckbox
  );
  console.log(err);

  let config;

  if (name === "lastName") {
    config = inputConfig[`no${name}`];
    config.onChange = (e) => {
      // to remove required error for lastName n noLastName
      if (e.target.checked) {
        clearErrors(`${name}`);
      }
    };
  }
  return (
    <div
      className={`mb-5 py-3 ${name}Class inputWrapper`}
      style={{ paddingBottom: "0px" }}
    >
      {!isCheckbox && (
        <label htmlFor={`${formId}${name}`} className="">
          {label}{" "}
          {inputConfig[name]?.required?.value && (
            <span className="text-red-700">*</span>
          )}
        </label>
      )}

      {children}

      {name === "email" && errors?.email?.type === "validatingEmail" && (
        <div>
          <FontAwesomeIcon icon={faSpinner} />
        </div>
      )}

      {name == "lastName" && (
        <div>
          <input
            type="checkbox"
            name={`no${name}`}
            id={`no${formId}${name}`}
            {...register(`no${name}`, config)}
          />
          <label htmlFor={`no${formId}${name}`}>
            {t("REGISTERFORM.INPUT.NOLASTNAME.LABEL")}
          </label>
        </div>
      )}

      <div className="err_msg" style={{ color: "#F62E2E" }}>
        {err
          ? err
          : errors && errors[name]?.type === "custom"
          ? errors[name].message
          : ""}
      </div>
      {!isCheckbox && info && <div className="info_msg">{info}</div>}
    </div>
  );
};

export default InputLayout;

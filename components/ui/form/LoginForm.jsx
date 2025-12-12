import React, { useMemo } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { generalFunction, setWithExpiry } from "@/lib/generalFunction";
import FormWrapper from "./wrapper/FormWrapper";
import { buttons } from "../../style";
import { ApiCall } from "../../api/ApiCalls";
import { config } from "../../constants";
import { useAuth } from "../../context/Auth";

import InputText from "./inputs/InputText";
import { useTranslations } from "next-intl";

//const InputText = lazy(() => import("./inputs/InputText"));
const LoginForm = () => {
  const { t } = useTranslations();
  const auth = useAuth();
  const formId = "loginForm";
  const methods = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    // prepare props for sending
    let dataToSend = generalFunction.handleSubmitProps(data);
    console.log(dataToSend);
    ApiCall({
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    })
      .post(`${config.FE_API}/auth/login/username`, dataToSend)
      .then((res) => {
        var validate = generalFunction.handleFormFeedBack(
          t,
          methods,
          res.data.errorCode
        );
        if (validate) return;
        setWithExpiry("T_SESSION", res.headers["x-session"], 0);
        setWithExpiry("REG_TOKEN", "", 0);
        auth.login(res.data.data);
        window.location.reload(true);
      });
    // do this if got error coming back from server then have to clear it with clearErrors('errMsg')

    // generalFunction.handleFormFeedBack(methods, t("FORM.ERROR.NIH"), "error");

    // ready to send data to API
  };

  console.log("isvalid: " + methods.formState.isValid);

  useMemo(() => {
    methods.register("playerIp", { value: "" });
  });

  return (
    <FormProvider {...methods}>
      <FormWrapper id={formId} onSubmit={onSubmit}>
        <InputText type="text" formId={formId} name="username" />

        <InputText type="password" formId={formId} name="password" />

        <input
          type="submit"
          value="MASUK"
          style={{ marginTop: "50px" }}
          disabled={!methods.formState.isValid}
          className={`${buttons.primary}`}
        />
        <div className="text-center">
          <a
            href="/register"
            className={`${buttons.link}`}
            style={{ color: "#A805D1" }}
          >
            Buat Akun Baru
          </a>
        </div>
      </FormWrapper>
    </FormProvider>
  );
};

export default LoginForm;

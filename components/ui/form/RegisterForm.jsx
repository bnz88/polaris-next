import React, { useMemo, useState } from "react";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import { useTranslations } from "next-intl";
import { useAuth } from "../../context/Auth";
import {
  generalFunction,
  setWithExpiry,
  getWithExpiry,
} from "@/lib/generalFunction";
import FormWrapper from "./wrapper/FormWrapper";
import { buttons } from "../../style";
import {
  registerPreField,
  registerSubmit,
  registerVerify,
} from "../../api/RegisterAPI";
import { InputTemplate } from "./inputs/InputLayout";

const formId = "registerForm";

const getPrefieldData = async (token) => {
  token = getWithExpiry("REG_TOKEN");
  const data = await registerPreField(token);

  if (
    data.hasOwnProperty("playerData") ||
    (!data.hasOwnProperty("playerData") &&
      !data.registrationSettings.registerFieldsVerificationForm.length)
  ) {
    // if username only or already submitted and get ready to verify
    data.registrationSettings.printThisField =
      data.registrationSettings.registerFieldsSubmitForm;
  } else {
    data.registrationSettings.printThisField =
      data.registrationSettings.registerFieldsVerificationForm;
  }

  if (
    !data.hasOwnProperty("playerData") &&
    !data.registrationSettings.registerFieldsVerificationForm.length
  ) {
    data.registrationSettings.skipVerification = true;
  } else {
    data.registrationSettings.skipVerification = false;
  }

  data.registrationSettings.printThisField.forEach((val) => {
    if (val.isRequired) {
      val.required = true;
    } else {
      val.required = false;
    }
    if (val.isEditable) {
      val.disabled = false;
    } else {
      val.disabled = true;
    }
    val.name = val.name.toLowerCase();
    val.formType = val.formType.toLowerCase();
  });

  console.log(data);

  return data;
};

const printPrefieldForm = async ({ formId, methods, setPrefield }, token) => {
  var res = await getPrefieldData(token);

  var component = [];

  // set country id
  methods.register("countryId", {
    value: res.registrationSettings.defaultCountryId,
  });
  methods.register("skipVerification", {
    value: res.registrationSettings.skipVerification,
  });
  methods.register("enableAutoLogin", {
    value: res.registrationSettings.enableAutoLogin,
  });

  res.registrationSettings.printThisField.forEach((data, key) => {
    var val = "";
    if (res.hasOwnProperty("playerData")) {
      val = res.playerData[data.name];
    }
    if (data.name == "phone") {
      component.push(
        InputTemplate(formId, data, val, res.playerData?.callingCode)
      );
    } else {
      component.push(InputTemplate(formId, data, val));
    }
  });

  setPrefield(component);

  return res;
};

const RegisterForm = () => {
  const { t } = useTranslations();
  const [prefield, setPrefield] = useState([]);
  const auth = useAuth();
  const methods = useForm({
    mode: "onChange",
  });
  var control = methods.control;
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormProvider)
      name: "test", // unique name for your Field Array
    }
  );
  const onSubmit = (data) => {
    // prepare props for sending
    let dataToSend = generalFunction.handleSubmitProps(data);
    console.log(dataToSend);

    /*methods.setError("password", {
      type: "custom",
      message: "wrong",
    });*/

    // do this if got error coming back from server then have to clear it with clearErrors('errMsg')

    //generalFunction.handleFormFeedBack(methods, t("FORM.ERROR.NIH"), "error");

    // ready to send data to API
    if (
      dataToSend.hasOwnProperty("verificationcode") &&
      !dataToSend.skipVerification
    ) {
      // if registration type verify
      dataToSend.registrationToken = getWithExpiry("REG_TOKEN");
      registerVerify(dataToSend, auth).then(function (res) {
        var validate = generalFunction.handleFormFeedBack(
          t,
          methods,
          res.data.errorCode
        );
        if (validate) return;
      });
    } else {
      registerSubmit(dataToSend).then(function (res) {
        console.log(res);
        var validate = generalFunction.handleFormFeedBack(
          t,
          methods,
          res.data.errorCode
        );
        if (validate) return;
        if (dataToSend.skipVerification) {
          // if registration type username
          dataToSend.registrationToken = res.data.registrationToken;
          registerVerify(dataToSend, auth);
        } else {
          // if registration type verify and show verification input
          setWithExpiry("REG_TOKEN", res.data.registrationToken, 0);
          printPrefieldForm(
            { formId, methods, setPrefield },
            res.data.registrationToken
          );
        }
      });
    }
  };
  console.log("isvalid: " + methods.formState.isValid);

  useMemo(() => {
    // this is for registration only
    // var currentDate = new Date(),
    //   offset = -1 * currentDate.getTimezoneOffset();
    // methods.register("ageChecked", { value: 1 });
    // methods.register("country", { value: "IDN" });
    // methods.register("device", { value: "" });
    // methods.register("registrationCurrency", {
    //   value: settings.Init.defaultCurrency,
    // });
    // methods.register("timezone", { value: offset });
    printPrefieldForm({ formId, methods, setPrefield });
  }, []);

  return (
    <FormProvider {...methods}>
      <FormWrapper id={formId} onSubmit={onSubmit}>
        {prefield}
        <input
          type="submit"
          className={`${buttons.primary}`}
          disabled={!methods.formState.isValid}
          key={"submit"}
        />
        {/*<InputText type="text" formId={formId} name="username" />*/}
        {/* <InputText type="text" formId={formId} name="username" />
        <InputText type="password" formId={formId} name="password" />
        <input
          type="submit"
          className={`${buttons.primary}`}
          disabled={!methods.formState.isValid}
          key={"submit"}
        /> */}
        {/* <InputText type="password" formId={formId} name="password" />

        <InputText type="text" formId={formId} name="firstName" />

        <InputText type="text" formId={formId} name="middleName" />

        <InputText type="text" formId={formId} name="lastName" />

        <InputSelect formId={formId} name="operatorBankShortName" value="BCA" />

        <InputAmount formId={formId} name="amount" min="1000" max="1000000" />

        <InputPhoneNumber type="text" formId={formId} name="phoneNumber" />

        <InputBirthDate type="text" formId={formId} name="birthDate" />

        <InputText type="text" formId={formId} name="email" />

        <InputCaptcha formId={formId} instanceId="captcha" name="captcha" />

        <InputCheckBox formId={formId} name="policyChecked" /> */}
      </FormWrapper>
    </FormProvider>
  );
};

export default RegisterForm;

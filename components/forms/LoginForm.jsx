"use client";

import InputText from "../ui/form/inputs/InputText";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import FormWrapper from "../ui/form/wrapper/FormWrapper";
import InputBirthDate from "../ui/form/inputs/inputBirthDate";
import InputPhoneNumber from "../ui/form/inputs/InputPhoneNumber";
import InputAmount from "../ui/form/inputs/InputAmount";

const formId = "loginForm";

const LoginForm = () => {
  const methods = useForm({
    mode: "all",
    criteriaMode: "all",
  });

  const onSubmit = (data) => console.log(data);
  //methods.register("errMsg");
  //console.log(methods.formState.errors);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <InputText
          type="text"
          formId={formId}
          name="userName"
          errMsg={methods.formState.errors["userName"]}
        />

        <InputText
          type="password"
          formId={formId}
          name="password"
          errMsg={methods.formState.errors["password"]}
        />

        <input
          type="submit"
          disabled={!methods.formState.isValid}
          key={"submit"}
        />
      </form>
    </FormProvider>
  );
};

export default LoginForm;

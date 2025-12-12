"use client";

import InputText from "../ui/form/inputs/InputText";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import FormWrapper from "../ui/form/wrapper/FormWrapper";
import InputBirthDate from "../ui/form/inputs/inputBirthDate";
import InputPhoneNumber from "../ui/form/inputs/InputPhoneNumber";
import InputAmount from "../ui/form/inputs/InputAmount";

const formId = "registerForm";

const RegisterForm = () => {
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
          name="firstName"
          errMsg={methods.formState.errors["firstName"]}
        />

        <InputBirthDate
          type="text"
          formId={formId}
          name="birthDate"
          errMsg={methods.formState.errors["birthDate"]}
        />

        <InputAmount
          formId={formId}
          name="amount"
          min="1000"
          max="1000000"
          errMsg={methods.formState.errors["amount"]}
        />

        <InputPhoneNumber
          type="text"
          formId={formId}
          name="phone"
          errMsg={methods.formState.errors["phone"]}
        />

        <InputText
          type="text"
          formId={formId}
          name="email"
          errMsg={methods.formState.errors["email"]}
        />
        {/* <input
        type="text"
        {...methods.register("firstName", inputConfig["firstName"])}
      />
      <div>
        {methods.formState.errors
          ? methods.formState?.errors["firstName"]?.message
          : ""}
      </div> */}
        <input
          type="submit"
          disabled={!methods.formState.isValid}
          key={"submit"}
        />
      </form>
    </FormProvider>
  );
};

export default RegisterForm;

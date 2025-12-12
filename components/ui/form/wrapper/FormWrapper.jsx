import { useFormContext } from "react-hook-form";

const FormWrapper = ({ children, id, onSubmit, arrData }) => {
  const {
    formState: { errors },
    control,
    register,
    handleSubmit,
  } = useFormContext();
  //register("password", { required: true });
  register("errMsg");
  console.log(errors);
  return (
    <>
      <form id={id} onSubmit={handleSubmit(onSubmit)}>
        {errors?.errMsg && errors?.errMsg.type == "error" && (
          <div className="text-[red]">{errors.errMsg?.message}</div>
        )}
        {errors?.errMsg && errors?.errMsg.type == "success" && (
          <div className="text-[green]">{errors.errMsg?.message}</div>
        )}
        {arrData &&
          arrData.map((val) => {
            console.log(val);
            return val.element;
          })}
        {children}
      </form>
    </>
  );
};

export default FormWrapper;

import RegisterForm from "@/components/forms/RegisterForm";
import ModalIntercept from "@/components/ui/modal/ModalIntercept";

const login = () => {
  return (
    <div>
      <ModalIntercept title={"Daftar"}>
        <RegisterForm></RegisterForm>
      </ModalIntercept>
    </div>
  );
};

export default login;

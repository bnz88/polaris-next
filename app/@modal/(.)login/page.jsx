import LoginForm from "@/components/forms/LoginForm";
import ModalIntercept from "@/components/ui/modal/ModalIntercept";

const login = () => {
  return (
    <div>
      <ModalIntercept title={"Masuk"}>
        <LoginForm></LoginForm>
      </ModalIntercept>
    </div>
  );
};

export default login;

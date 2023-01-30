import { FormRegister } from "../../components/form/formRegister/formRegister";
import { StyleResgisterPage } from "./style";
import RegisterImg from "../../assets/registerImg.svg";
import Header from "../../components/header/header";

export const RegisterPage = () => {
  return (
    <StyleResgisterPage>
      <Header />
      <div>
        <FormRegister />
        <img src={RegisterImg} alt="" />
        <div>
          <p>
            {" "}
            Ficou sem <span> DUO</span>? Acesse nosso aplicativo e encontre o
            player certo para a jogatina nunca parar...
          </p>
        </div>
      </div>
      <footer>
        <p> Copyright © 2023 FindMyDuo</p>
        <p> Todos os direitos reservados </p>
      </footer>
    </StyleResgisterPage>
  );
};

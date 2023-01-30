import * as yup from "yup";

//regexp will validate the discord username#tag
const regexp = new RegExp("^.{3,32}#[0-9]{4}$");

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("O e-mail é obrigatório.")
    .email("O e-mail preenchido é inválido."),
  password: yup
    .string()
    .required("A senha é obrigatória.")
    .min(6, "A senha deve conter 6 characteres."),
});

export const registerSchema = yup.object().shape(
  {
    name: yup
      .string()
      .required("O nome é obrigatório.")
      .min(5, "O nome deve conter ao menos 5 digitos"),
    email: yup
      .string()
      .required("O e-mail é obrigatório.")
      .email("O e-mail preenchido é inválido."),
    password: yup
      .string()
      .required("A senha é obrigatória.")
      .min(6, "A senha deve conter 6 characteres."),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais.")
      .required("Confirme a senha.")
      .min(6, "A senha deve conter 6 characteres."),
    socialMedia: yup
      .string()
      .notRequired()
      .optional()
      .nullable(true)
      .when("socialMedia", {
        is: (value: string) => value?.length,
        then: (rule) =>
          rule
            .min(5, "O discord deve ter ao menos 5 digitos.")
            .matches(regexp, "Por favor insira a Tag."),
      }),
  },
  [["socialMedia", "socialMedia"]]
);

export const profileSchema = yup.object().shape(
  {
    name: yup.string().required().matches(/.{5,}/, {
      excludeEmptyString: true,
      message: "Seu nome precisa ter pelo menos 5 caracteres",
    }),

    email: yup.string().required().email("O e-mail preenchido é inválido."),
    url: yup.string(),
    socialMedia: yup
      .string()
      .notRequired()
      .optional()
      .nullable(true)
      .when("socialMedia", {
        is: (value: string) => value?.length,
        then: (rule) => rule.min(5).matches(regexp),
      }),
  },
  [["socialMedia", "socialMedia"]]
);

export const postSchema = yup.object().shape({
  title: yup.string().required("Por favor selecione um jogo"),
  content: yup
    .string()
    .required("Convide seus amigos!")
    .min(10, "Escreva um pouco mais."),
  userId: yup.string().required(),
});

export const postEditSchema = yup.object().shape({
  content: yup
    .string()
    .required("Convide seus amigos!")
    .min(10, "Escreva um pouco mais."),
});

export const newGameSchema = yup.object().shape({
  newGame: yup.string().required("Por favor selecione um jogo."),
});

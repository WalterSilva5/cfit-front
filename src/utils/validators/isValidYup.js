import * as Yup from "yup";

export const isValidLogin = Yup.object({
  email: Yup.string()
    .required("E-mail é obrigatório")
    .email("E-mail inválido"),
  password: Yup.string()
    .required("Senha é obrigatória")
    .matches(/[ `!@#$%^&*()_\-=.?]/, "A senha deve conter um caracter especial")
    .matches(/\d/, "A senha deve conter números")
    .matches(/[a-z]/, "A senha deve conter uma letra minúscula")
    .matches(/[A-Z]/, "A senha deve conter uma letra maiúscula")
    .min(8, "A senha tem que ter no mínimo 8 caracteres")
    .max(16, "A senha pode ter no máximo 16 caracteres")
});

export const isValidRegister = Yup.object({
  name: Yup.string().required("Nome é obrigatório"),
  email: Yup.string()
    .required("E-mail é obrigatório")
    .email("E-mail inválido"),
  password: Yup.string()
    .required("Senha é obrigatória")
    .matches(/[ `!@#$%^&*()_\-=.?]/, "A senha deve conter um caracter especial")
    .matches(/\d/, "A senha deve conter números")
    .matches(/[a-z]/, "A senha deve conter uma letra minúscula")
    .matches(/[A-Z]/, "A senha deve conter uma letra maiúscula")
    .min(8, "A senha tem que ter no mínimo 8 caracteres")
    .max(16, "A senha pode ter no máximo 16 caracteres"),
  confirmePassword: Yup.string()
    .required("Confirmação da senha é obrigatória")
    .oneOf([Yup.ref("password"), null], "As senhas devem corresponder")
});

export const isValidEditProfile = Yup.object({
  name: Yup.string().required("Nome é obrigatório"),
  email: Yup.string()
    .required("E-mail é obrigatório")
    .email("E-mail inválido"),
  linkdin: Yup.string().matches(
    /(https:\/\/)?([w]{3}\.)?(github|linkedin)\.com.*/,
    "Insira uma URL válida"
  ),
  github: Yup.string().matches(
    /(https:\/\/)?([w]{3}\.)?(github|linkedin)\.com.*/,
    "Insira uma URL válida"
  )
});

export const isValidEditPassword = Yup.object({
  currentPassword: Yup.string()
    .required("Senha é obrigatória")
    .matches(/[ `!@#$%^&*()_\-=.?]/, "A senha deve conter um caracter especial")
    .matches(/\d/, "A senha deve conter números")
    .matches(/[a-z]/, "A senha deve conter uma letra minúscula")
    .matches(/[A-Z]/, "A senha deve conter uma letra maiúscula")
    .min(8, "A senha tem que ter no mínimo 8 caracteres")
    .max(16, "A senha pode ter no máximo 16 caracteres"),
  password: Yup.string()
    .required("Senha é obrigatória")
    .matches(/[ `!@#$%^&*()_\-=.?]/, "A senha deve conter um caracter especial")
    .matches(/\d/, "A senha deve conter números")
    .matches(/[a-z]/, "A senha deve conter uma letra minúscula")
    .matches(/[A-Z]/, "A senha deve conter uma letra maiúscula")
    .min(8, "A senha tem que ter no mínimo 8 caracteres")
    .max(16, "A senha pode ter no máximo 16 caracteres"),
  confirmePassword: Yup.string()
    .required("Confirmação da senha é obrigatória")
    .oneOf([Yup.ref("password"), null], "As senhas devem corresponder")
});

export const isValidNewPassword = Yup.object({
  password: Yup.string()
    .required("Senha é obrigatória")
    .matches(/[ `!@#$%^&*()_\-=.?]/, "A senha deve conter um caracter especial")
    .matches(/\d/, "A senha deve conter números")
    .matches(/[a-z]/, "A senha deve conter uma letra minúscula")
    .matches(/[A-Z]/, "A senha deve conter uma letra maiúscula")
    .min(8, "A senha tem que ter no mínimo 8 caracteres")
    .max(16, "A senha pode ter no máximo 16 caracteres"),
  confirmePassword: Yup.string()
    .required("Confirmação da senha é obrigatória")
    .oneOf([Yup.ref("password"), null], "As senhas devem corresponder")
});

export const isValidContactForm = Yup.object().shape(
  {
    nome: Yup.string().required("* Preenchimento obrigatório"),
    empresa: Yup.string().required("* Preenchimento obrigatório"),
    email: Yup.string()
      .email("Email inválido")
      .ensure()
      .when("telefone", {
        is: "",
        then: Yup.string().required("* Preenchimento obrigatório")
      }),
    telefone: Yup.string()
      .trim()
      .ensure()
      .when("email", {
        is: "",
        then: Yup.string()
          .required("* Preenchimento obrigatório")
          .min(14, "Telefone deve conter no mínimo DDD + 8 dígitos")
          .max(15, "Telefone deve conter no maxímo DDD + 9 dígitos")
      }),
    mensagem: Yup.string()
      .min(15, "A mensagem deve ser descritiva")
      .required("* Preenchimento obrigatório")
  },
  [["telefone", "email"]]
);

export const isValidApplicationForm = Yup.object().shape({
  name: Yup.string().required("* Preenchimento obrigatório"),
  email: Yup.string()
    .email("Email inválido")
    .required("* Preenchimento obrigatório"),
  phone: Yup.string()
    .min(14, "Telefone deve conter no mínimo DDD + 8 dígitos")
    .max(15, "Telefone deve conter no maxímo DDD + 9 dígitos")
    .optional(),
  tech: Yup.array()
    .nullable()
    .min(1, "* Preenchimento obrigatório")
    .max(5, "Escolha até 5 opções")
    .required("* Preenchimento obrigatório"),
  linkedin: Yup.string().matches(
    /(https:\/\/)?([w]{3}\.)?(github|linkedin)\.com.*/,
    "Insira uma URL válida"
  ).optional(),
  github: Yup.string().matches(
    /(https:\/\/)?([w]{3}\.)?(github|linkedin)\.com.*/,
    "Insira uma URL válida"
  ).optional(),
  CV: Yup.mixed().required("* Preenchimento obrigatório")
});

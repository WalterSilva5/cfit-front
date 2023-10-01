import Joi from 'joi';

export const isValidLogin = Joi.object({
  email: Joi.string()
    .required()
    .email({ tlds: { allow: false } }),
  password: Joi.string()
    .required()
    .pattern(/[ `!@#$%^&*()_\-=.?]/)
    .pattern(/\d/)
    .pattern(/[a-z]/)
    .pattern(/[A-Z]/)
    .min(8)
    .max(16)
});

export const isValidRegister = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .required()
    .email({ tlds: { allow: false } }),
  password: Joi.string()
    .required()
    .pattern(/[ `!@#$%^&*()_\-=.?]/)
    .pattern(/\d/)
    .pattern(/[a-z]/)
    .pattern(/[A-Z]/)
    .min(8)
    .max(16),
  confirmePassword: Joi.any()
    .required()
    .valid(Joi.ref('password'))
    .messages({ 'any.only': 'As senhas devem corresponder' })
});

export const isValidEditProfile = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .required()
    .email({ tlds: { allow: false } }),
  linkdin: Joi.string().pattern(/(https:\/\/)?([w]{3}\.)?(github|linkedin)\.com.*/),
  github: Joi.string().pattern(/(https:\/\/)?([w]{3}\.)?(github|linkedin)\.com.*/)
});

export const isValidEditPassword = Joi.object({
  currentPassword: Joi.string()
    .required()
    .pattern(/[ `!@#$%^&*()_\-=.?]/)
    .pattern(/\d/)
    .pattern(/[a-z]/)
    .pattern(/[A-Z]/)
    .min(8)
    .max(16),
  password: Joi.string()
    .required()
    .pattern(/[ `!@#$%^&*()_\-=.?]/)
    .pattern(/\d/)
    .pattern(/[a-z]/)
    .pattern(/[A-Z]/)
    .min(8)
    .max(16),
  confirmePassword: Joi.any()
    .required()
    .valid(Joi.ref('password'))
    .messages({ 'any.only': 'As senhas devem corresponder' })
});

export const isValidNewPassword = Joi.object({
  password: Joi.string()
    .required()
    .pattern(/[ `!@#$%^&*()_\-=.?]/)
    .pattern(/\d/)
    .pattern(/[a-z]/)
    .pattern(/[A-Z]/)
    .min(8)
    .max(16),
  confirmePassword: Joi.any()
    .required()
    .valid(Joi.ref('password'))
    .messages({ 'any.only': 'As senhas devem corresponder' })
});

export const isValidContactForm = Joi.object({
  nome: Joi.string().required(),
  empresa: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .when('telefone', {
      is: Joi.string().empty(''),
      then: Joi.string().required()
    }),
  telefone: Joi.string().when('email', {
    is: Joi.string().empty(''),
    then: Joi.string().required().min(14).max(15)
  }),
  mensagem: Joi.string().min(15).required()
});

export const isValidApplicationForm = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  phone: Joi.string().min(14).max(15),
  tech: Joi.array().items(Joi.string()).min(1).max(5).required(),
  linkedin: Joi.string().pattern(/(https:\/\/)?([w]{3}\.)?(github|linkedin)\.com.*/),
  github: Joi.string().pattern(/(https:\/\/)?([w]{3}\.)?(github|linkedin)\.com.*/),
  CV: Joi.any().required()
});

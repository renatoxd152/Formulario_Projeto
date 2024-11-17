import * as yup from 'yup';
export const schema = yup.object().shape({
    nome: yup.string().required('Nome é obrigatório'),
    email: yup.string().email('Email inválido').required('Email é obrigatório'),
    telefone: yup.string().required('Telefone é obrigatório'),
    cep: yup.string().matches(/^\d{5}-\d{3}$/, 'CEP inválido').required('CEP é obrigatório'),
    endereco: yup.string().required('Endereço é obrigatório'),
    numero: yup.string().required('Número é obrigatório'),
    complemento: yup.string(),
    bairro: yup.string().required('Bairro é obrigatório'),
    estado: yup.string().required('Estado é obrigatório'),
    cidade: yup.string().required('Cidade é obrigatória'),
    tipoPessoa: yup
        .string()
        .oneOf(['fisica', 'juridica'], 'Tipo de pessoa inválido')
        .required('Tipo de pessoa é obrigatório'),
    cpf: yup
        .string()
        .when('tipoPessoa', {
            is: 'fisica',
            then: schema => schema
                .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido')
                .required('CPF é obrigatório'),
            otherwise: schema => schema.notRequired(),
        }),
    cnpj: yup
        .string()
        .when('tipoPessoa', {
            is: 'juridica',
            then: schema => schema
                .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, 'CNPJ inválido')
                .required('CNPJ é obrigatório'),
            otherwise: schema => schema.notRequired(),
        }),
    razaoSocial: yup
        .string()
        .when('tipoPessoa', {
            is: 'juridica',
            then: schema => schema.required('Razão social é obrigatória'),
            otherwise: schema => schema.notRequired(),
        }),
    nomeFantasia: yup
        .string()
        .when('tipoPessoa', {
            is: 'juridica',
            then: schema => schema.required('Nome fantasia é obrigatório'),
            otherwise: schema => schema.notRequired(),
        }),
});
export interface FormData {
    nome: string;
    email?: string;
    telefone: string;
    cep: string;
    endereco: string;
    numero: string;
    complemento?: string;
    bairro: string;
    estado: string;
    cidade: string;
    tipoPessoa: 'fisica' | 'juridica';
    cpf?: string;
    cnpj?: string;
    razaoSocial?: string;
    nomeFantasia?: string;
}

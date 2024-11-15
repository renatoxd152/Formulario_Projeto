import { ChangeEvent, useState } from 'react';
import Input from '../../components/formulario/Input';
import RadioGroup from '../../components/formulario/RadioGroup';
import Select from '../../components/formulario/Select';


interface FormData {
    nome: string;
    email: string;
    telefone: string;
    cep: string;
    endereco: string;
    numero: string;
    complemento: string;
    bairro: string;
    estado: string;
    cidade: string;
    tipoPessoa: 'fisica' | 'juridica';
    cpf?: string;
    cnpj?: string;
    razaoSocial?: string;
    nomeFantasia?: string;
}

export const FormularioPage = () =>
{
    const [formData, setFormData] = useState<FormData>({ 
            nome: '', 
            email: '', 
            telefone: '',
            cep: '',
            endereco: '', 
            numero: '', 
            complemento: '', 
            bairro: '', estado: '',
            cidade: '', tipoPessoa: 'juridica', 
            cpf: '', cnpj: '', 
            razaoSocial: '', 
            nomeFantasia: '' }
    );

    const handleSubmit = () =>
    {
        console.log("oi");
    }
    const estados = [
        { value: 'SP', label: 'São Paulo' },
        { value: 'RJ', label: 'Rio de Janeiro' },
        { value: 'MG', label: 'Minas Gerais' },
        { value: 'ES', label: 'Espírito Santo' },
    ];
    const tipoPessoaOptions = [
        { value: 'fisica', label: 'Pessoa Física' },
        { value: 'juridica', label: 'Pessoa Jurídica' },
    ];
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <Input label="Nome completo" type="text" name="nome" value={formData.nome} onChange={handleChange}/>
                <Input label='Email' type='email' name='email' value={formData.email} onChange={handleChange}/>
                <Input label='Telefone' type='text' name='telefone' value={formData.telefone} onChange={handleChange}/>
                <Input label='CEP' type='text' name='cep' value={formData.cep} onChange={handleChange}/>
                <Input label='Endereço' type='text' name='endereco' value={formData.endereco} onChange={handleChange}/>
                <Input label='Número' type='text' name='numero' value={formData.numero} onChange={handleChange}/>
                <Input label='Complemento' type='text' name='complemento' value={formData.complemento} onChange={handleChange}/>
                <Input label='Bairro' type='text' name='bairro' value={formData.bairro} onChange={handleChange}/>
                <Select label='Estado' name='estado' value={formData.estado} options={estados} onChange={handleChange}/>
                <Input label='Cidade' type='text' name='cidade' value={formData.cidade} onChange={handleChange}/>
                <RadioGroup
                    label="Tipo de Pessoa"
                    name="tipoPessoa"
                    value={formData.tipoPessoa}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
                    options={tipoPessoaOptions}
                />
                {
                    formData.tipoPessoa === 'fisica' ?
                    (
                        <Input label="CPF" type="text" name="cpf" value={formData.cpf ?? ''} onChange={handleChange}/>
                    ):
                    (
                        <Input label="CNPJ" type="text" name="cnpj" value={formData.cnpj ?? ''} onChange={handleChange}/>
                    )
                }
            </form>
         
        </>
    )
}
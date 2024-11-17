import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Button from '../../components/formulario/Button';
import Input from '../../components/formulario/Input';
import RadioGroup from '../../components/formulario/RadioGroup';
import SearchBar from '../../components/formulario/Select';
import { buscarCep, buscarCNPJ } from '../../services/Api';
import { estados, tipoPessoaOptions } from '../../tests/mocks/Dados';
import { formatCEP, formatCNPJ, formatCPF, formatTelefone } from '../../utils/Funcoes';
import { schema } from '../../utils/yup';

interface FormData {
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


export const FormularioPage = () => {
    const { control, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            tipoPessoa: 'juridica',
        },
    });
    const [isDisabled, setIsDisabled] = useState(false);
    const[isDisabledCNPJ,setIsDisabledCNPJ] = useState(false);
    const tipoPessoa = watch('tipoPessoa');

    const onSubmit = (data: FormData) => {
        console.log("Dados do formulário: \n",data);
    };
   
    const handleBlurCep = async (cep: string) => {
        if (!cep || cep.length < 8) return;
    
        try {
            const data = await buscarCep(cep);
            setValue('endereco', data.logradouro || '');
            setValue('bairro', data.bairro || '');
            setValue('cidade', data.localidade || '');
            setValue('estado', data.uf || '');
            setIsDisabled(true);
        } catch (error) {
            console.error('Erro ao buscar CEP:', error);
        }
    };
    

    const handleBlurCNPJ = async (cnpj: string) => {
        
        const cnpjFormatado = cnpj.replace(/[^\d]/g, '');
    
        if (cnpjFormatado.length !== 14) { 
            console.log('CNPJ inválido');
            return;
        }
    
        try {
            const data = await buscarCNPJ(cnpjFormatado);
            
            setValue('razaoSocial', data.nome || '');
            setValue('nomeFantasia', data.Fantasia || '');
            setIsDisabledCNPJ(true);
        } catch (error) {
            console.error('Erro ao buscar o CNPJ:', error);
        }
    };
    
    
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '50%', maxHeight: '90vh', overflowY: 'auto' }}>
                <Controller
                    name="nome"
                    control={control}
                    render={({ field }) => (
                        <Input label="Nome completo" type="text" {...field} error={errors.nome?.message} />
                    )}
                />
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <Input label="Email" type="email" {...field} error={errors.email?.message} />
                    )}
                />
                <Controller
                    name="telefone"
                    control={control}
                    render={({ field }) => (
                        <Input label="Telefone" type="text" {...field} error={errors.telefone?.message}
                            onChange={(e) => {
                                field.onChange(formatTelefone(e.target.value));
                            }}
                            value={field.value || ''} />
                    )}
                />
                <Controller
                    name="cep"
                    control={control}
                    render={({ field }) => (
                        <Input
                            label="CEP"
                            type="text"
                            {...field}
                            error={errors.cep?.message}
                            maxLength={9}
                            onChange={(e) => {
                                field.onChange(formatCEP(e.target.value));
                            }}
                            onBlur={() => handleBlurCep(field.value)}
                            value={field.value || ''}
                        />
                    )}
                />
                <Controller
                    name="endereco"
                    control={control}
                    render={({ field }) => (
                        <Input label="Endereço" type="text" {...field} error={errors.endereco?.message} disabled={isDisabled}/>
                    )}
                />
                <Controller
                    name="numero"
                    control={control}
                    render={({ field }) => (
                        <Input label="Número" type="text" {...field} error={errors.numero?.message} />
                    )}
                />
                <Controller
                    name="complemento"
                    control={control}
                    render={({ field }) => (
                        <Input label="Complemento" type="text" {...field} />
                    )}
                />
                <Controller
                    name="bairro"
                    control={control}
                    render={({ field }) => (
                        <Input label="Bairro" type="text" {...field} error={errors.bairro?.message} disabled={isDisabled}/>
                    )}
                />
                <Controller
                    name="estado"
                    control={control}
                    render={({ field }) => (
                        <SearchBar label="Estado" {...field} options={estados} error={errors.estado?.message} disabled={isDisabled}/>
                    )}
                />
                <Controller
                    name="cidade"
                    control={control}
                    render={({ field }) => (
                        <Input label="Cidade" type="text" {...field} error={errors.cidade?.message} disabled={isDisabled}/>
                    )}
                />
                <Controller
                    name="tipoPessoa"
                    control={control}
                    render={({ field }) => (
                        <RadioGroup
                            label="Tipo de Pessoa"
                            name="tipoPessoa"
                            value={field.value}
                            onChange={field.onChange}
                            options={tipoPessoaOptions}
                            error={errors.tipoPessoa?.message}
                        />
                    )}
                />
                {tipoPessoa === 'fisica' && (
                    <Controller
                        name="cpf"
                        control={control}
                        render={({ field }) => (
                            <Input
                                label="CPF"
                                type="text"
                                {...field}
                                error={errors.cpf?.message}
                                maxLength={14}
                                onChange={(e) => {
                                    field.onChange(formatCPF(e.target.value));
                                }}
                                value={field.value || ''}
                            />
                        )}
                    />
                )}
                {tipoPessoa === 'juridica' && (
                    <>
                        <Controller
                            name="cnpj"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    label="CNPJ"
                                    type="text"
                                    {...field}
                                    error={errors.cnpj?.message}
                                    maxLength={18}
                                    onChange={(e) => {
                                        field.onChange(formatCNPJ(e.target.value));
                                    }}
                                    onBlur={() => handleBlurCNPJ(field.value || '')}
                                    value={field.value || ''}
                                />
                            )}
                        />
                        <Controller
                            name="razaoSocial"
                            control={control}
                            render={({ field }) => (
                                <Input label="Razão Social" type="text" {...field} error={errors.razaoSocial?.message} disabled={isDisabledCNPJ}/>
                            )}
                        />
                        <Controller
                            name="nomeFantasia"
                            control={control}
                            render={({ field }) => (
                                <Input label="Nome Fantasia" type="text" {...field} error={errors.nomeFantasia?.message} disabled={isDisabledCNPJ}/>
                            )}
                        />
                    </>
                )}
                <Button type="submit" value="Cadastrar" />
            </form>
        </div>
    );
};

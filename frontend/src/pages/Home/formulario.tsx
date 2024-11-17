import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import Button from '../../components/formulario/Button';
import Input from '../../components/formulario/Input';
import RadioGroup from '../../components/formulario/RadioGroup';
import Select from '../../components/formulario/Select';
import { formatCEP, formatCNPJ, formatCPF, formatTelefone } from '../../utils/Funcoes';
import { schema } from '../../utils/yup';
interface FormData {
    nome: string;
    email: string;
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
    const { control, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            tipoPessoa: 'juridica',
        },
    });
    

    const tipoPessoa = watch('tipoPessoa');

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

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
                            value={field.value || ''}
                        />
                    )}
                />
                <Controller
                    name="endereco"
                    control={control}
                    render={({ field }) => (
                        <Input label="Endereço" type="text" {...field} error={errors.endereco?.message} />
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
                        <Input label="Bairro" type="text" {...field} error={errors.bairro?.message} />
                    )}
                />
                <Controller
                    name="estado"
                    control={control}
                    render={({ field }) => (
                        <Select label="Estado" {...field} options={estados} error={errors.estado?.message} />
                    )}
                />
                <Controller
                    name="cidade"
                    control={control}
                    render={({ field }) => (
                        <Input label="Cidade" type="text" {...field} error={errors.cidade?.message} />
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
                                    value={field.value || ''}
                                />
                            )}
                        />
                        <Controller
                            name="razaoSocial"
                            control={control}
                            render={({ field }) => (
                                <Input label="Razão Social" type="text" {...field} error={errors.razaoSocial?.message} />
                            )}
                        />
                        <Controller
                            name="nomeFantasia"
                            control={control}
                            render={({ field }) => (
                                <Input label="Nome Fantasia" type="text" {...field} error={errors.nomeFantasia?.message} />
                            )}
                        />
                    </>
                )}
                <Button type="submit" value="Cadastrar" />
            </form>
        </div>
    );
};

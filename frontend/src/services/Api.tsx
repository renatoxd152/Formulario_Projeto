// services/cepService.ts

export const buscarCep = async (cep: string) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        if (data.erro) {
            throw new Error('CEP não encontrado.');
        }
        
        return data;
    } catch (error) {
        console.error('Erro ao buscar CEP:', error);
        throw error;
    }
};

export const buscarCNPJ = async (cnpj: string) => {
    const url = `https://receitaws.com.br/v1/cnpj/${cnpj}`;
    
    try {
        const response = await fetch(url,{
            mode:"no-cors"
        });
        const data = await response.json();
        if (data.erro) {
            throw new Error('CNPJ não encontrado.');
        }  
        return data;
    } catch (error) {
        console.error('Erro ao buscar CNPJ:', error);
        throw error;
    }
};

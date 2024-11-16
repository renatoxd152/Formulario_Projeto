// services/cepService.ts

export const buscarCep = async (cep: string) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.erro) {
            throw new Error('CEP não encontrado.');
        }
        
        return data;
    } catch (error) {
        console.error('Erro ao buscar CEP:', error);
        throw error;
    }
};

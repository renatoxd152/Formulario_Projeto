export const formatCEP = (value: string): string => {

    value = value.replace(/\D/g, '');
    
    if (value.length <= 5) {
        return value;
    }
    return value.slice(0, 5) + '-' + value.slice(5, 8);
};


export const formatCPF = (value: string): string => {
    value = value.replace(/\D/g, '');
    
    if (value.length <= 3) {
        return value;
    }
    if (value.length <= 6) {
        return value.slice(0, 3) + '.' + value.slice(3, 6);
    }
    if (value.length <= 9) {
        return value.slice(0, 6) + '.' + value.slice(6, 9);
    }
    return value.slice(0, 3) + '.' + value.slice(3, 6) + '.' + value.slice(6, 9) + '-' + value.slice(9, 11);
};

export const formatCNPJ = (value: string): string => {
    value = value.replace(/\D/g, '');

    if (value.length <= 2) {
        return value;
    }
    if (value.length <= 5) {
        return value.slice(0, 2) + '.' + value.slice(2, 5);
    }
    if (value.length <= 8) {
        return value.slice(0, 2) + '.' + value.slice(2, 5) + '.' + value.slice(5, 8);
    }
    if (value.length <= 12) {
        return value.slice(0, 2) + '.' + value.slice(2, 5) + '.' + value.slice(5, 8) + '/' + value.slice(8, 12);
    }
    return value.slice(0, 2) + '.' + value.slice(2, 5) + '.' + value.slice(5, 8) + '/' + value.slice(8, 12) + '-' + value.slice(12, 14);
};

export const formatTelefone = (value: string): string => {
    
    value = value.replace(/\D/g, '');
    
    if (value.length <= 2) {
        return `(${value}`; 
    }
    if (value.length <= 6) {
        return `(${value.slice(0, 2)}) ${value.slice(2)}`;
    }
    return `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
};

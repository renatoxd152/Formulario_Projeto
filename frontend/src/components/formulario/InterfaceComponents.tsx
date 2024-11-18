import { ChangeEvent, FocusEvent } from 'react';
export interface InputProps {
    label: string;
    type: string;
    name: string;
    value: string | undefined;
    maxLength?: number;
    error?: string;
    disabled?:boolean;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonProps { 
    type: 'button' | 'submit' | 'reset';
    value: string; 
}
export interface SelectProps {
    label: string;
    name: string;
    value: string;
    error?: string;
    disabled?: boolean;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string }[];
}
export interface RadioGroupProps {
    label: string; 
    name: string;
    value: string;
    error?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void; 
    options: { value: string; label: string }[];
}
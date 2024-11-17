import { ChangeEvent, FocusEvent } from 'react';

interface InputProps {
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



const Input = ({ label, type, name, value, onChange, maxLength, error, onBlur, disabled }: InputProps) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <input
                type={type}
                name={name}
                className={`form-control ${error ? 'is-invalid' : ''}`}
                value={value}
                maxLength={maxLength}
                onChange={onChange}
                onBlur={onBlur}
                disabled={disabled}
            />
            {error && <span className="text-danger">{error}</span>}
        </div>
    );
};


export default Input;

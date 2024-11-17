import { ChangeEvent } from 'react';

interface InputProps {
    label: string;
    type: string;
    name: string;
    value: string | undefined; 
    maxLength?: number;
    error?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}


const Input = ({ label, type, name, value, onChange, maxLength, error }: InputProps) => {
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
            />
            {error && <span className="text-danger">{error}</span>}
        </div>
    );
};

export default Input;

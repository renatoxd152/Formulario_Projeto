import { ChangeEvent } from 'react';

interface SelectProps {
    label: string;
    name: string;
    value: string;
    error?: string;
    disabled?:boolean;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string; }[];
}

const Select = ({ label, name, value, onChange, options,error,disabled }:SelectProps) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <select name={name} className="form-control" value={value} onChange={onChange} disabled={disabled}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
            {error && <span className="text-danger">{error}</span>}
        </div>
    );
};

export default Select;

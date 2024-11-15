import { ChangeEvent } from 'react';

interface SelectProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string; }[];
}

const Select = ({ label, name, value, onChange, options }:SelectProps) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <select name={name} className="form-control" value={value} onChange={onChange}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};

export default Select;

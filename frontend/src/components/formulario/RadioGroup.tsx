import { ChangeEvent } from 'react';

interface RadioGroupProps {
    label: string; 
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void; 
    options: { value: string; label: string }[];
}

const RadioGroup = ({ label, name, value, onChange, options }:RadioGroupProps) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <div>
                {options.map((option, index) => (
                    <div key={index} className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name={name}
                            value={option.value}
                            checked={value === option.value}
                            onChange={onChange}
                        />
                        <label className="form-check-label">{option.label}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RadioGroup;

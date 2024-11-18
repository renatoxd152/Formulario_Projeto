import { RadioGroupProps } from "./InterfaceComponents";

const RadioGroup = ({ label, name, value, onChange, options, error }:RadioGroupProps) => {
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
            {error && <span className="text-danger">{error}</span>}
            </div>
        </div>
    );
};

export default RadioGroup;

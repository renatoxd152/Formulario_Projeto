import { ChangeEvent, useState } from 'react';
import { SelectProps } from './InterfaceComponents';

const SelectWithSearch = ({
    label,
    name,
    value,
    onChange,
    options,
    error,
    disabled,
}: SelectProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setIsOpen(true);
    };

    const handleOptionSelect = (value: string) => {
        onChange({ target: { value } } as ChangeEvent<HTMLSelectElement>);
        setSearchTerm(value);
        setIsOpen(false);
    };

    return (
        <div className="form-group" style={{ position: 'relative' }}>
            <label>{label}</label>
          
            <input
                type="text"
                placeholder="Buscar estado"
                className="form-control"
                value={searchTerm || value}
                onChange={handleSearchChange}
                onClick={() => setIsOpen(true)}
                disabled={disabled}
            />
        
            {isOpen && (
                <div className="dropdown-menu show" style={{ position: 'absolute', width: '100%', zIndex: 9999 }}>
                    <select
                        value={value}
                        onChange={(e) => handleOptionSelect(e.target.value)}
                        className="form-control"
                        disabled={disabled}
                        size={Math.min(filteredOptions.length, 5)}
                    >
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option, index) => (
                                <option key={index} value={option.value}>
                                    {option.label}
                                </option>
                            ))
                        ) : (
                            <option disabled>Sem resultados</option>
                        )}
                    </select>
                </div>
            )}
            {error && <span className="text-danger">{error}</span>}
        </div>
    );
};

export default SelectWithSearch;

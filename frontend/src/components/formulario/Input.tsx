import { ChangeEvent } from 'react';

interface InputProps { 
    label: string; type: string; 
    name: string; value: string; 
    onChange: (e: ChangeEvent<HTMLInputElement>) => void; 
}

const Input = ({ label, type, name, value, onChange }:InputProps) => 
{ 
    return ( 
    <div className="form-group"> 
        <label>{label}</label> 
        <input type={type} name={name} className="form-control" value={value} onChange={onChange} /> 
    </div> ); 
}; 
export default Input;
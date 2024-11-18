import { ButtonProps } from "./InterfaceComponents";

const Button = ({ type, value }: ButtonProps) => { 
    return ( 
        <div className="form-group"> 
            <button type={type} className="btn btn-primary btn-lg w-100">{value}</button>
        </div> 
    ); 
}; 

export default Button;

import ButtonProps from "../../types/buttonPropType";
import "../App.css";

const Button : React.FC<ButtonProps> = (props: ButtonProps) => {
    const {onClick, text} = props;
    return <button onClick={onClick}>{text}</button>;
};

export default Button;
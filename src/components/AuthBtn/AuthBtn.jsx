import { Btn } from "./AuthBtn.styled";

const AuthBtn = ({path,text,icon,clickHandler}) => {
    return (
        <Btn to={path} onClick={clickHandler && (()=>clickHandler(false))}>
            {text}
            {icon}
        </Btn>
    );
}

export default AuthBtn;
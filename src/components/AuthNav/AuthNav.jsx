import AuthBtn from "components/AuthBtn/AuthBtn";
import { PawPrintIcon } from "utils/icons";
import {List} from './AuthNav.styled'

const AuthNav = ({setIsOpen}) => {
    return (
        <List>
            <li>
                <AuthBtn
                path='/login'
                text = 'Log IN'
                icon = {<PawPrintIcon/>}
                clickHandler={setIsOpen}
                />
            </li>
            <li>
                <AuthBtn
                path='/register'
                text = 'Registration'
                icon = {<PawPrintIcon/>}
                clickHandler={setIsOpen}
                />
            </li>
        </List>
    );
}

export default AuthNav;
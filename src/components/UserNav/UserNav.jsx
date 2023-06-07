import { UserIcon } from "utils/icons";
import { Wrapper } from "./UserNav.styled";


const UserNav = ({userName,showName,setIsOpen}) => {
    return (
        <Wrapper to='/user' onClick={()=>setIsOpen(false)}>
            <UserIcon/>
            {showName && userName}
        </Wrapper>
    );
}

export default UserNav;
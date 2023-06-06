import Container from "components/Container/Container";
import Logo from "components/Logo/Logo";
import Nav from "components/Nav/Nav";
import UserNav from "components/UserNav/UserNav";
import AuthNav from "components/AuthNav/AuthNav";
import BurgerButton from "components/BurgerButton/BurgerButton";
import { useState } from "react";
import { useWindowSize } from "hooks/useResize";



const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const[screenWidth]=useWindowSize();

    
    return (
        <div className="HeaderWrapper">
            <Container>
                <div className="Wrapper-user">
                    <Logo/>
                    <div className="NavWrapper"></div>
                </div>
            </Container>
        </div>
    );
}

export default Header;
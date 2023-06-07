import { useWindowSize } from "hooks/useResize";
import { LogoIcon,LogoIconSm } from "utils/icons";


const Logo = () => {

    const screenWidth = useWindowSize()
    return (
        <LogoWrapper to = '/' aria-label = 'Site logo'>
            
            {screenWidth <= 767 ? <LogoIconSm/> : <LogoIcon/>}

        </LogoWrapper>
        
    );
}

export default Logo;
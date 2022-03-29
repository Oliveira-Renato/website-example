import  { useState } from "react";
import { Link } from "react-router-dom";
import logoMColored from '../../images/iconsLogo/logo_syscare_400.png';

import { 
    FiMenu 
} from 'react-icons/fi';

import { AiOutlineClose } from 'react-icons/ai';

import { Header, Logo, HeaderContent, MenuSectionOn, ContainerIcons } from './styles';


const ToggleMenu = () => {
    const [menuBar, setMenuBar] = useState(false);
    const [displayMenu, setDisplayMenu] = useState(false)
    const [toggle, set] = useState(false);;

    const handleMenuBar = () => {
        if(!menuBar){
            setMenuBar(true);
        }else{
            setMenuBar(false);
        }
    };
    
    const handleClickLink = () => {
        if(!displayMenu){
            setMenuBar(false);
        }else{
            setMenuBar(false);
        }
    };


    return(
        <Header>
            <MenuSectionOn  ishandled={menuBar} >
                    <nav>
                        <Link onClick={() => handleClickLink()} to="#about" >About me</Link>
                        <Link onClick={() => handleClickLink()} to="services" >Services</Link>
                        <Link onClick={() => handleClickLink()} to="portfolio" >Portfólio</Link>
                        <Link onClick={() => handleClickLink()} to="contact" >Contact</Link>
                    </nav>
                    <ContainerIcons>
                        <a href="#" target="_blank">
                            <button className="button">Suporte</button>
                        </a>
                        
                    </ContainerIcons>
            </MenuSectionOn>
            <HeaderContent ishandled={menuBar}>
                <Logo>
                    <Link to="home" >
                        {/* <img src={logoMColored} alt="logo"/> */}
                        </Link>
                </Logo>
                
                { menuBar ? <AiOutlineClose onClick={() => handleMenuBar()} size={36} color="#333" />
                : <FiMenu onClick={() => handleMenuBar()} size={36} color="#333"/>}
                    <nav>
                        <Link to="#about" >Sobre</Link>
                        <Link to="services" >Habilidades</Link>
                        <Link to="portfolio" >Projetos</Link>
                        <Link to="contact" >Contato</Link>
                    </nav>
            </HeaderContent>
            
        </Header>
    )
}

export default ToggleMenu;
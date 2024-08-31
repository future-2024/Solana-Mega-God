
import React, {useState} from 'react';
import { FaList } from 'react-icons/fa';
import './index.css';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
    const [menu, setMenu] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' })
    const showMenu = () => {
        if(isOpen) {
            setMenu(<div className='menu-section'>
                    <div><a href='#home'><h4 className='mx-3 color-header' onClick={click}>Home</h4></a></div>
                    <div><a href='#tokenomics'><h4 className='mx-3 color-header' onClick={click}>Tokenomics</h4></a></div>
                    <div><a href='#mechanism'><h4 className='mx-3 color-header' onClick={click}>Mechanism</h4></a></div>
                    <div><a href='#roadmap'><h4 className='mx-3 color-header' onClick={click}>RoadMap</h4></a></div>
                    <div><a href='#security'><h4 className='mx-3 color-header' onClick={click}>Security</h4></a></div>
                    <div><a href='#contact'><h4 className='mx-3 color-header' onClick={click}>Contact</h4></a></div>  
                </div>);
        }
        else setMenu('');
        setIsOpen(!isOpen);
    }
    const click = () => {
        setMenu('')
    }
    return (
        <>
            <header className='header-component'>
                <div className='d-flex'>
                    <img className='mb-1' src="img/icon.png" width={50} alt="Logo" />
                    <h3 className='align-self-center ml-4 border-100' style={{fontWeight:'700'}}>Mega Sol God</h3>
                </div>
                
                {!isMobile && (
                    <div className="rest">
                        <div><a href='#home'><h4 className='mx-3 color-header'>Home</h4></a></div>
                        <div><a href='#tokenomics'><h4 className='mx-3 color-header'>Tokenomics</h4></a></div>
                        <div><a href='#mechanism'><h4 className='mx-3 color-header'>Mechanism</h4></a></div>
                        <div><a href='#roadmap'><h4 className='mx-3 color-header'>RoadMap</h4></a></div>
                        <div><a href='#security'><h4 className='mx-3 color-header'>Security</h4></a></div>
                        <div><a href='#contact'><h4 className='mx-3 color-header'>Contact</h4></a></div>                    
                    </div> 
                )}
                {isMobile && (
                    <div><FaList color='white' size={40} onClick={(isOpen) => showMenu(isOpen)}/></div>
                )}
                
            </header>  
            {menu}           
        </>
    )
}

export default Header;

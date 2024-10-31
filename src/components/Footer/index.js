
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { FaTelegram, FaTwitter } from 'react-icons/fa';
const Footer = () => {

    return (
        <>                   
            <footer className='background-footer'  id="contact" >  
                <a href="https://x.com/megasolgod" className='d-flex' target="_blank" rel="noreferrer"><FaTwitter className='align-self-center'/><div className='pl-3'>Twitter</div></a>
                <a href="https://t.me/megasolgodportal" className='d-flex' target="_blank" rel="noreferrer"><FaTelegram className='align-self-center'/><div className='pl-3'>Telegram</div></a>
            </footer>
            <div><h6 className='text-grey'>Alsihr222@icloud.com</h6></div>
        </>
    )
}

export default Footer;

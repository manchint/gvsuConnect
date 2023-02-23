import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header(props) {
    let navigate = useNavigate();
    return (
        <div className='header' style={{backgroundColor: rgb(131, 189, 239),
            height: '60px',
            position: fixed,
            top: '0px',
            width: '100%'}}>
                <div style={{marginLeft : '100px'}}>
                    <button className='header-menu' onClick={navigate('/home')}>Home</button>
                    <button className='header-menu'>Places To Visit</button>
                    <button className='header-menu'>Professors</button>
                    <button className='header-menu'>Home</button>
                    <AccountMenu></AccountMenu>
                </div>   
            </div>
    )
}

export default Header;
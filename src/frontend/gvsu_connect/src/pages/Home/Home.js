import React from 'react';

import './Home.css';
import AccountMenu from '../../components/AccountMenu';


function Home(props) {
    return (
        <div>
            <div className='header'>
                <div style={{marginLeft : '100px'}}>
                    <button className='header-menu'>Home</button>
                    <button className='header-menu'>Places To Visit</button>
                    <button className='header-menu'>Professors</button>
                    <button className='header-menu'>Home</button>
                    <AccountMenu></AccountMenu>
                </div>
                
            </div>
        </div>
    )
}
    
export default Home;
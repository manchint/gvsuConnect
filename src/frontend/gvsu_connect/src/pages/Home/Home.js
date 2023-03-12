import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Home.css';
import AccountMenu from '../../components/AccountMenu';
import Post from '../../components/Post';
import Header from '../../components/Header';
import RecentChat from '../../components/RecentChat';
import Chat from '../Chat/Chat';
function Home(props) {
    let navigate = useNavigate();
    return (
        <div>
            {/* <div className='header'>
                <div style={{marginLeft : '100px'}}>
                    <button className='header-menu' onClick={navigate('/home')}>Home</button>
                    <button className='header-menu'>Places To Visit</button>
                    <button className='header-menu'>Professors</button>
                    <button className='header-menu'>Home</button>
                    <AccountMenu></AccountMenu>
                </div>   
            </div> */}
            <Header />
            <div style={{backgroundColor:'grey', opacity:'50%', overflowY:'scroll', marginTop:'60px', display: 'flex'}}>
                    <div style={{marginLeft: '35%', marginBottom: '30px'}}>
                        <Post></Post>
                        <Post></Post>
                    </div>
                    <div style={{marginLeft: '35%', marginBottom: '30px'}}>
                        <RecentChat />
                    </div>
                </div>
                <Chat />
        </div>
    )
}
    
export default Home;
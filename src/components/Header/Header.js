import React from 'react'; 

import logo from '../../assets/img/Imagem3.png'

import './index.css'

function Header(){
    return(
        <header>
            <div className='home'>
                <img src={logo} alt='Logo' />
                <h1>SuperGiantGames</h1>
            </div>
        </header>
    )
}

export default Header
import React from 'react';

import Header from '../components/Header/Header';

import Card from '../assets/img/card.png'

import '../styles/pages/landing.css'

function Landing(){
    return(
        <div className='landing-page'>
            <Header />
            <div className='card'>
                <p><strong> TRANSISTOR - RED THE SINGER</strong></p>
                <img src={Card} alt='Card de personagem' />
                <div className='text'>
                    <p>"Olha, o que quer que você esteja pensando, me faça um favor, não solte."</p>
                </div>

            </div>
        </div>
    )
}

export default Landing
import React from 'react';

function Hero() {
    return (
        <div className="container p-5">
            <div className="row text-center">
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
                <h1 className='mt-5 mb-3'>Invest in everything</h1>
                <p className='text-muted'>Online Platform to invest in stocks, derivatives, mutual funds, and more.</p>
                <button className='p-2 rounded mt-5 mb-5'
                style={{width:"13rem", margin:"auto", backgroundColor:"#387ed1", color:"white", fontWeight:"500",
                fontSize:"1.2rem", border:"none"
                }}>
                    Sign up now
                </button>
            </div>
        </div>
    );
}

export default Hero;
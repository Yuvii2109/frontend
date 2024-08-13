import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row p-5'>
                <div className='col-lg-6 col-md-12'>
                    <img src = 'media/images/Education.svg' alt='Varsity Image' className='mt-5 mb-5' style={{width: "90%"}}/>
                </div>
                <div className='col-lg-6 col-md-12 mt-5 mb-5'>
                    <h1>Free and open market education</h1>
                    <br/>
                    <p className='text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration: "none", fontWeight:"500", color: "#387ed1"}}>Varsity <i class = "fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <br/> <br/>
                    <p className='text-muted'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{textDecoration: "none", fontWeight:"500", color: "#387ed1"}}>TradingQ&A <i class = "fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;
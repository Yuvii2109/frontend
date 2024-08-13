import React from 'react';

function Awards() {
    return ( 
        <div className="container mt-5 mb-5" style={{textAlign: "center"}}>
            <div className="row">
                <div className="col-lg-6 col-md-12 mt-5">
                    <img className='mt-4 mb-5' src='media/images/largestBroker.svg' alt='Largest Broker Image' style={{width: "90%"}}/>
                </div>
                <div className="col-lg-6 col-md-12 mt-5" 
                style={{textAlign: "center", justifyContent: "center", 
                    }}>
                    <h1 className='mt-3'>Largest Stock Broker in India</h1>
                    <p className='mt-5 text-muted'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in :</p>
                    <div className='row mt-5'>
                        <div className='col-lg-6 col-md-12'>
                            <ul className='text-muted'>
                                <li>Futures and Options</li>
                                <li>Commodity Derivatives</li>
                                <li>Currency Derivatives</li>
                            </ul>
                        </div>
                        <div className='col-lg-6 col-md-12'>
                            <ul className='text-muted'>
                                <li>Stocks and IPOs</li>
                                <li>Direct Mutual Funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' alt='Press Images' style={{width: "90%"}} className='mt-3'/>
                </div>
            </div>
        </div>
    );
}

export default Awards;
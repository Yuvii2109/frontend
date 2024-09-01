import React from 'react';

function OpenAccount() {
    return (
        <div className='container p-5'>
            <div className='row text-center'>
                <h1 className='mt-3 mb-4'>Open a Zerodha account</h1>
                <p className='text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='p-2 rounded mt-4 mb-5'
                style={{width:"13rem", margin:"auto", backgroundColor:"#387ed1", color:"white", fontWeight:"500",
                fontSize:"1.2rem", border:"none"
                }}>
                    Sign up now
                </button>
            </div>
        </div>
    );
}

export default OpenAccount;
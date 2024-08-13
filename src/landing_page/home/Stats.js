import React from 'react';

function Stats() {
    return (
        <div className='container mb-5 p-5'>
            <div className='row'>
                <div className='col-lg-5 col-md-12 mt-5 p-3'>
                    <h1>Trust with confidence</h1>
                    <br/> <br/>
                    <h5>Customer-first always</h5>
                    <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <br/>
                    <h5>No spam or gimmicks</h5>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <br/>
                    <h5>The Zerodha universe</h5>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <br/>
                    <h5>Do better with money</h5>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-lg-7 col-md-12 mt-5'>
                    <br/>
                    <img src='media/images/ecosystem.png' alt='Ecosystem Image' className='mt-3' style={{width: "100%"}}/>
                    <div style={{textAlign: "center", fontWeight: "500"}}>
                        <a href='' style={{textDecoration: "none", color:"#387ed1"}}>Explore our products <i class = "fa fa-long-arrow-right" aria-hidden="true"></i></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='' style={{textDecoration: "none", color:"#387ed1"}}>Try Kite Demo <i class = "fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;
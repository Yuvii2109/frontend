import React from 'react';

function Pricing() {
    return (
        <div className='container mb-5 mt-5 p-4'>
            <div className='row mt-5'>
                <div className='col-lg-5 col-md-12'>
                    <h1>Unbeatable pricing</h1>
                    <br/>
                    <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration: "none", color:"#387ed1", fontWeight: "500"}}>See pricing <i class = "fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-6 col-md-12 mt-5'>
                    <div className='row text-center'>
                        <div className='col border pt-4 pb-1'>
                            <h1 className='mt-2' style={{fontWeight: "700"}}><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
                            <p className='text-muted'>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col border p-4'>
                            <h1 className='mb-3 mt-2' style={{fontWeight: "700"}}><i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
                            <p className='text-muted'>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
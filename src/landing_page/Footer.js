import React from 'react';

function Footer() {
    return (
        <div className='container-fluid mt-5' style={{backgroundColor: "#f0f0f0", width: "100%", margin: "0", boxSizing: "border-box", marginBottom: "0", borderTop: "1px solid #eee"}}>
            <div className='row ps-5 pe-5'>
                <div className='col-lg-3 col-md-6 col-sm-12 mb-5 mt-5'>
                    <img src='media/images/logo.svg' style={{width: "60%"}}
                    className='mb-4'/>
                    <p style={{fontSize: "0.8rem"}} className='mb-4'>© 2010 - 2024, Zerodha Broking Ltd. <br/>
                    All rights reserved.</p>
                    <span className='text-muted' style={{fontSize: "1.2rem"}}>
                        <i style={{cursor: "pointer"}} class="fa-brands fa-x-twitter"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                        <i style={{cursor: "pointer"}} class="fa-brands fa-square-facebook"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                        <i style={{cursor: "pointer"}} class="fa-brands fa-instagram"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                        <i style={{cursor: "pointer"}} class="fa-brands fa-linkedin-in"></i> 
                        <hr style={{width: "90%"}}/>
                        <i style={{cursor: "pointer"}} class="fa-brands fa-youtube"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                        <i style={{cursor: "pointer"}} class="fa-brands fa-whatsapp"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                        <i style={{cursor: "pointer"}} class="fa-brands fa-telegram"></i>
                    </span>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 mb-5 mt-5'>
                    <h5 className='mb-3'>Company</h5>
                    <a className='text-muted' href=''>About</a> <br/>
                    <a className='text-muted' href=''>Products</a> <br/>
                    <a className='text-muted' href=''>Pricing</a> <br/>
                    <a className='text-muted' href=''>Referral Programme</a> <br/>
                    <a className='text-muted' href=''>Careers</a> <br/>
                    <a className='text-muted' href=''>Zerodha.tech</a> <br/>
                    <a className='text-muted' href=''>Press & Media</a> <br/>
                    <a className='text-muted' href=''>Zerodha Cares (CSR)</a> <br/>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 mt-5 mb-5'>
                    <h5 className='mb-3'>Support</h5>
                    <a href='' className='text-muted'>Contact us</a><br/>
                    <a href='' className='text-muted'>Support portal</a><br/>
                    <a href='' className='text-muted'>Z-Connect blog</a><br/>
                    <a href='' className='text-muted'>List of charges</a><br/>
                    <a href='' className='text-muted'>Downloads & resources</a><br/>
                    <a href='' className='text-muted'>Videos</a><br/>
                    <a href='' className='text-muted'>Market overview</a><br/>
                    <a href='' className='text-muted'>How to file a complaint?</a><br/>
                    <a href='' className='text-muted'>Status of your complaints</a><br/>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 mt-5 mb-5'>
                    <h5 className='mb-3'>Account</h5>
                    <a href='' className='text-muted'>Open an account</a> <br/>
                    <a href='' className='text-muted'>Fund transfer</a>
                </div>
                <div>
                    <p className='text-muted mt-5 mb-3' style={{fontSize: "0.8rem"}}>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF <br/><br/>

                    Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances<br/><br/>

                    Smart Online Dispute Resolution | Grievances Redressal Mechanism<br/><br/>

                    Investments in securities market are subject to market risks; read all the related documents carefully before investing.<br/><br/>

                    Attention investors: 1. Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2. Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3. Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.<br/><br/>

                    "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p><br/><br/>
                </div>
            </div>
        </div>
    );
}

export default Footer;
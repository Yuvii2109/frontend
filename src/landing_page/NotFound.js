import React from 'react';

function NotFound() {
    return (
        <div className='container p-5'>
            <div className='row text-center'>
                <h1 className='mt-5 mb-4'>404 Page Not Found</h1>
                <p className='text-muted'>Sorry, the page you are looking for does not exist.</p>
            </div>
        </div>
    );
}

export default NotFound;
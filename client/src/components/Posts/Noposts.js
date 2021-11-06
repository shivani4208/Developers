import React from 'react';
import Image from './noposts.svg';

const Noposts = () => {
    return (
        <div>
            <h1 className="text-secondary text-center m-5">No Posts!</h1>
            <img src={Image} className="m-5" style={{height:"350px"}} alt="no posts!" />
        </div>
    )
}

export default Noposts

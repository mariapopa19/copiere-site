import React from 'react';

const Card = () => {
    return (
        <div className='tc dib br4 ma5 bw2 shadow-5'>
            <img className='br4' alt='error' src={`https://picsum.photos/300/400?random=${Math.random()}`}/>
        </div>
    );
}

export default Card;
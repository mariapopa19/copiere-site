import React from 'react';

const Card = ({img}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='error' src={img} />
        </div>
    );
}

export default Card;
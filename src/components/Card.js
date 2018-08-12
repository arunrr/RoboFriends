import React from 'react';

const Card = ( {id, name, email} ) => {
    return(

        <div className='bg-light-green dib br3 ma2 pa4 grow' style={{ height: '350px' }}>
            <img src={`https://robohash.org/${id}?size=200x200`} alt='Profile'/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>

    );
}

export default Card;
import React from 'react';

type PoetCardProps = {
    image: string;
    quote: string;
    name: string;
}

const PoetCard: React.FC<PoetCardProps> = ({ image, quote, name }) => {
    return (
        <div className="poet-card card text-center">
            <img src={image} className="card-img-top" alt={`${name}`} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">"{quote}"</p>
            </div>
        </div>
    );
}

export default PoetCard;

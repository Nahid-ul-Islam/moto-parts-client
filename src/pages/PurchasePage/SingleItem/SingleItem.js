import React from 'react';
import { useParams } from 'react-router-dom';

const SingleItem = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>details about {id}</h2>
        </div>
    );
};

export default SingleItem;
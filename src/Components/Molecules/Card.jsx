import React from 'react';

export default function Card({children}) {
    return (
        <button className="Card">
            {children}
        </button>
    );
}
import React from 'react'


export default function LumipayImg({width = 100, height = "auto",className = "",style = {}}){
    return (
        <img
            src={`${process.env.PUBLIC_URL}/ax.png`}
            alt="logo"
            className={className}
            style={{
                width,
                height,
                ...style
            }}
        />
    );
}
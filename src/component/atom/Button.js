import React from 'react';

const Button = ({title, diKlik, loading}) => {
    if(loading){ 
            return <button className="button-submit abu">Loading...</button> 
    }
    return (
        <button className="button-submit" onClick={diKlik}>{title}</button>
    )
}

export default Button;
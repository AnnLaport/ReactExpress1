import React from 'react';

function EntradaLogin({identifier, tipo, onChange, value}){

    return(
        <div>
            <label htmlFor={identifier}>{tipo}: </label>
            <input type={tipo} id={identifier} onChange={onChange} value={value} />
        </div>
    )
}


export default EntradaLogin;
import React from 'react';

function EntradaLogin(props){

    return(
        <div>
            <label htmlFor={props.id}>{props.id}: </label>
            <input text={props.type} id={props.id} />
        </div>
    )
}


export default EntradaLogin;
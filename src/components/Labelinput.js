import React from 'react';

function Labelinput({label, type, name, value, handler}) {

    return (
        <>
            <label form={`${name}-field`}>{label}</label>
            <input
                type={type}
                name={`${name}-field`}
                value={value}
                onChange={(event) => handler(event.target.value)}
            />
        </>
    );

}

export default Labelinput;
import React from 'react';

function Button({click, visible, children}) {
    return(

        <Button
            onClick={click}
            disabled={visible}
            >
            {children}
        </Button>
    );
}

export default Button;
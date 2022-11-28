import React from 'react';
import Button from './Button'

function Counter({fruitType, setCount, counter}) {

    return(
        <>
            <h2>{fruitType}</h2>
            <Button click={() => setCount(counter+1)} >
                +
            </Button>
            <Button visible={counter===0} click={() => setCount(counter-1)} >
                -
            </Button>
            <h3>{counter}</h3>
        </>
    );

}

export default Counter;
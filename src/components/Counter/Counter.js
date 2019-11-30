import React from 'react';

export const Counter = ({ increment, decrement, reset, counter }) => {
	return(
		<div>
	        <button onClick={increment}>+</button>
	        <button onClick={decrement}>-</button>
	        <button onClick={reset}>Reset</button>
	        
	        <div>{counter}</div>
	    </div>
	)
}
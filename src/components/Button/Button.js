import React from 'react';
import './Button.css';

export default function Button({ className, buttonText, onClick }) {
	return (
		<button onClick={onClick} className={className}>
			{buttonText}
		</button>
	);
}

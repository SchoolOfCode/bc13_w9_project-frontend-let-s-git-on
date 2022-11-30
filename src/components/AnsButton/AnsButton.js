import React from 'react';

/**
 * A component that renders the answer button
 * @param {props}
 * @returns
 */
export default function AnsButton({ handleAnswer, buttonText, id, className }) {
	return (
		<button onClick={handleAnswer} id={id} className={className}>
			{buttonText}
		</button>
	);
}

import React from 'react';
import AnsButton from '../AnsButton/AnsButton.js';

export default function AnsButtonDisplay({ handleAnswer, className, ansArr }) {
	return ansArr.map((ansObj) => {
		return (
			<AnsButton
				handleAnswer={handleAnswer}
				id={ansObj.id}
				className={className}
				buttonText={ansObj.text}
			/>
		);
	});
}

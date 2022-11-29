import React from 'react';

/**
 * A component that renders an list item an unordered list.
 * @param {props} - an object containing a question (string) and an answer choice (string).
 * @returns renders a question and the corresponding choice.
 */
export default function ListItem({ questions, choices }) {
	return (
		<ul>
			<li>
				{questions} <strong>{choices}</strong>
			</li>
		</ul>
	);
}

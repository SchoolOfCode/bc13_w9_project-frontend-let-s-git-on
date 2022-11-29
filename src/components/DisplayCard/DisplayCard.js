import './DisplayCard.css';
import React from 'react';
import ListItem from '../ListItem/ListItem.js';
// import images from '../../images/monkey.png';

/**
 * This is a component function that renders a ListItem child component and passing into it the appropriate props
 * @param {props} - props received from the parent component
 * @returns renders a ListItem component
 */
export default function DisplayCard({ userNickname, userState }) {
	return (
		<div className="displayCard">
			<p>{userNickname},</p>
			{userState.map((x) => {
				return <ListItem questions={x.question} choices={x.choices} />;
			})}
		</div>
	);
}

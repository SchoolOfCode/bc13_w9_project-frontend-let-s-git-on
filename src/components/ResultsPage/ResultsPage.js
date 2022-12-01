import { useState, useEffect } from 'react';
import React from 'react';
//import MainPerson from "../MainPerson/MainPerson";
import DisplayCard from '../DisplayCard/DisplayCard.js';
import './ResultsPage.css';
import images2 from '../../images/monkeyshy.png';
import images from '../../images/neon.png';

/**
 * a component function that renders the results page.
 * - defines two states, one for player (userState), and one for player 2 (p2State)
 * - sends a fetch request to server to get all the questions and answers submitted by the player
 * - sends another fetch request for similar information for player 2.
 * - displays the fetched information on the page by rendering its children components and passing into them the appropriate props.
 * @param {string} userNickname prop
 * @param {number} userNumber prop
 * @returns renders player's questions and answers.
 */
export default function ResultsPage({ userNickname, userNumber }) {
	const [userState, setUserState] = useState([]); // for next sprint: can the initial state be refactored to ([{}])? or ([])
	const [p2State, setP2State] = useState([]);
	const [player2Id, setPlayer2Id] = useState(null)

	console.log(userState);
	useEffect(() => {

		/**
		 * This funtion sends fetch request to the server /database to get the player's data
		 * in the fetch request, it uses the player ID, which is the userNumber prop that is passed down from a parent component.
		 */
		async function fetchPlayer1Data() {
			const response = await fetch(
				`http://localhost:3000/api/players/${userNumber}`
			);
			let unpackedJson = await response.json();
			setUserState(unpackedJson.payload);
		}
		fetchPlayer1Data();
	}, [userNumber]);

	/**
	 * This function sends fetch request to the server / database to get the player's data.
	 * @param {num} value player ID
	 */
	async function fetchPlayer2Data(value) {
		const response = await fetch(`http://localhost:3000/api/players/${value}`);
		let unpackedJson = await response.json();
		console.log(unpackedJson.payload);
		setP2State(unpackedJson.payload);
	}

	/**
	 * This functions calls the function that fetches the player's infomation from db.
	 * it passes the player's ID into the argument.
	 */
		return (
			<div id="resultsPage">
				<div id="playerOne">
					<h1 className="hello">Hello {userNickname}</h1>
					<h2 className="yourIdIs"> Your ID is: {userNumber}</h2>
					<img src={images} className="neonS" alt="neonS" />
					<DisplayCard
						 userState={userState} 
						 userNickname={userNickname}
					/>
					<p className="personalId"></p>
				</div>
				<div id="playerTwo">
				{ p2State.length > 0 ? (
					<>
					<h3 className="player2Results">{p2State[0].nickname} </h3>
					<img src={images2} className="shymonkey" alt="monkey" />
					<div>
						<DisplayCard
							id="displayBox2"
							userState={p2State}
							userNickname={p2State[0].nickname}
						/>
					</div>
					</>
					):( <>
						<h3 className="playerTwoResults">
						Write the ID of another player here to see their results: </h3>
						<input 
						type="number" 
						id="p2Input" 
						onChange = {(event)=> setPlayer2Id(event.target.value)}
						></input>{' '}
						<button
							className="compareBtn"
							onClick={() => fetchPlayer2Data(player2Id)}
						>
							Compare results
						</button>
						</>
						) }								
				</div>
			</div>
		);
	}


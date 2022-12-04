import React from 'react';
import ImageComponent from './ImageComponent';

import bear from '../../images/bear.png';
import bull from '../../images/bull.png';
import elephant from '../../images/elephant.png';
import wolf from '../../images/wolf.png';

import smile from '../../images/smile green.png';

import sad from '../../images/sad.png';
import neon from '../../images/neon.png';

import red from '../../images/red.png';

import button from '../../images/button.png';

export default function ImgByQuestion({ qID }) {
	if (qID === 1) {
		const imgArrBear = ['bear-image', 'bear-image2', 'bear-image3'];
		const imgArrEle = ['elephant', 'elephant2'];
		return (
			<div>
				{imgArrBear.map((className) => {
					return (
						<ImageComponent
							key={imgArrBear.indexOf(className)}
							src={bear}
							className={className}
							alt="bear"
						/>
					);
				})}
				{imgArrEle.map((className) => {
					return (
						<ImageComponent
							key={imgArrEle.indexOf(className)}
							src={elephant}
							className={className}
							alt="elephant"
						/>
					);
				})}
				;
				<img src={bull} className="bull" alt="bull" />
				<img src={wolf} className="wolf" alt="wolf" />
			</div>
		);
	}
	if (qID === 2) {
		const imgArrSmile = [
			'smilegreen',
			'smilegreen2',
			'smilegreen3',
			'smilegreen5',
			'smilegreen6',
			'smilegreen7',
		];
		return imgArrSmile.map((className) => {
			return (
				<ImageComponent
					key={imgArrSmile.indexOf(className)}
					src={smile}
					className={className}
					alt="smilegreen"
				/>
			);
		});
	}
	if (qID === 3) {
		const imgArrSadSmile = ['sadSmile', 'sadSmile2', 'sadSmile3'];
		const imgArrNeonSmile = ['neonSmile', 'neonSmile2', 'neonSmile3'];
		return (
			<div>
				{imgArrSadSmile.map((className) => {
					return (
						<ImageComponent
							key={imgArrSadSmile.indexOf(className)}
							src={sad}
							className={className}
							alt="sadsmile"
						/>
					);
				})}
				{imgArrNeonSmile.map((className) => {
					return (
						<ImageComponent
							key={imgArrNeonSmile.indexOf(className)}
							src={neon}
							className={className}
							alt="neonSmile"
						/>
					);
				})}
			</div>
		);
	}
	if (qID === 4) {
		const imgArrRedSmile = ['red', 'red2'];
		return imgArrRedSmile.map((className) => {
			return (
				<ImageComponent
					key={imgArrRedSmile.indexOf(className)}
					src={red}
					className={className}
					alt="redsmile"
				/>
			);
		});
	}
	if (qID === 5) {
		const imgArrButton = [
			'buttonblue',
			'buttonblue2',
			'buttonblue3',
			'buttonblue4',
			'buttonblue5',
			'buttonblue6',
		];
		return imgArrButton.map((className) => {
			return (
				<ImageComponent
					key={imgArrButton.indexOf(className)}
					src={button}
					className={className}
					alt="buttonblue"
				/>
			);
		});
	}
}

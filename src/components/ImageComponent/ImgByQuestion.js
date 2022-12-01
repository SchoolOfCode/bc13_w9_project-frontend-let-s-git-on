import React from 'react';
import ImageComponent from './ImageComponent';

import images from '../../images/bear.png';
import images2 from '../../images/bull.png';
import images3 from '../../images/elephant.png';
import images4 from '../../images/wolf.png';

export default function ImgByQuestion({ qID }) {
	if (qID === 1) {
		const imgArrBear = ['bear-image', 'bear-image2', 'bear-image3'];
		const imgArrEle = ['elephant', 'elephant2'];
		return (
			<div>
				{imgArrBear.map((className) => {
					return (
						<ImageComponent src={images} className={className} alt="bear" />
					);
				})}
				{imgArrEle.map((className) => {
					return (
						<ImageComponent
							src={images3}
							className={className}
							alt="elephant"
						/>
					);
				})}
				;
				<img src={images2} className="bull" alt="bull" />
				<img src={images4} className="wolf" alt="wolf" />
			</div>
		);
	}
}

import React from 'react';
import './ImageComponent.css';

export default function ImageComponent({ src, className, alt }) {
	return <img src={src} className={className} alt={alt} />;
}

import React from 'react';

export default function ImageComponent({ src, className, alt }) {
	return <img src={src} className={className} alt={alt} />;
}

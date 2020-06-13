import React from 'react';
import "./circularImage.css"



function CircularImage({src,alt,className, onClick}) {

    return (<img className={`circularImage ${className}`} onClick={onClick} src={src} alt={alt}/>);
}

export default CircularImage;
import React from 'react';
import "./circularImage.css"



function CircularImage({src,alt,className= ""}) {

    return (<img className={`circularImage ${className}`} src={src} alt={alt}/>);
}

export default CircularImage;
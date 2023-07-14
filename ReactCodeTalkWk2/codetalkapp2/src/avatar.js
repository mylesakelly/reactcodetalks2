import React from 'react'

const Avatar = (props) => {
    // storing the name, imageURL, and imageSize in the variable props.user
    const { name, imageUrl, imageSize } = props.user;
  
    return (
      <div>
        <h2>{name}</h2>
        <img src={imageUrl} alt={name} style={{ width: imageSize, height: imageSize }} />
      </div>
    );
  };

export default Avatar;

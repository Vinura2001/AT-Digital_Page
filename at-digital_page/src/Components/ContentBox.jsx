import React from 'react';
import '../CSS/ContentBox.css'; 

const ContentBox = ({ topic, imageUrl, paragraph, buttonText, position }) => {
  return (
    <div className="container">
      <div className="box">
        <img className={position} src={imageUrl} alt="Image" />
        <div className="content">
          <div className="topic">{topic}</div>
          <div className="paragraph">{paragraph}</div>
          <button className="button">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default ContentBox;



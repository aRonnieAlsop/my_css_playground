import React from 'react';
import './FlexBox.css';

const FlexBox = () => {
    return (
        <div>
        <img className="img" src="./assets/IMG_0186.png"/>
        <img className="img" src="./assets/IMG_0186.png"/>
        <img className="img" src="./assets/IMG_0186.png"/> 
        <div className="title">Flex Box</div>
        <div className="flex-container">
        <img className="img" src="./assets/IMG_0186.png"/>
        <img className="img" src="./assets/IMG_0186.png"/>
        <img className="img" src="./assets/IMG_0186.png"/>
        </div>
        <div className="comment">display: flex;</div>
        <div className="flex-container border">
        <img className="img" src="./assets/IMG_0186.png"/>
        <img className="img" src="./assets/IMG_0186.png"/>
        <img className="img" src="./assets/IMG_0186.png"/>
        </div>
        <div className="comment">border: 2px solid black;</div>
        <div className="flex-container border flex-start">
        <img className="img" src="./assets/IMG_0186.png"/>
        <img className="img" src="./assets/IMG_0186.png"/>
        <img className="img" src="./assets/IMG_0186.png"/>
        </div>
        <div className="comment">justify-content: flex-start;</div>
        <div className="flex-container border space-between">
        <img className="img" src="./assets/IMG_0186.png"/>
        <img className="img" src="./assets/IMG_0186.png"/>
        <img className="img" src="./assets/IMG_0186.png"/>
        </div>
        <div className="comment">justify-content: space-between;</div>
        <div className="flex-container border justify-space-around">
        <img className="img" src="./assets/IMG_0186.png"/>
        <img className="img" src="./assets/IMG_0186.png"/>
        <img className="img" src="./assets/IMG_0186.png"/>
        </div>
        <div className="comment">justify-content: space-around;</div>
        <div className="flex-container border justify-space-evenly">
        <img className="img" src="./assets/IMG_0186.png"/>
        <img className="img" src="./assets/IMG_0186.png"/>
        <img className="img" src="./assets/IMG_0186.png"/>
        </div>
        <div className="comment">justify-content: space-evenly;</div>
        <div className="flex-container border justify-start">
        <img className="img" src="./assets/IMG_0186.png"/>
        <img className="img" src="./assets/IMG_0186.png"/>
        <img className="img" src="./assets/IMG_0186.png"/>
        </div>
        <div className="comment">justify-content: flex-start;</div>
        <div className="flex-container border justify-end">
        <img className="img" src="./assets/IMG_0186.png"/>
        <img className="img" src="./assets/IMG_0186.png"/>
        <img className="img" src="./assets/IMG_0186.png"/>
        </div>
        <div className="comment">justify-content: flex-end;</div>
        <div><h1>Add Height To See Align-Items:</h1></div>
        <div className="flex-container border justify-content align-items flex-start">
        <img className="img" src="./assets/IMG_0186.png"/>
        <img className="img" src="./assets/IMG_0186.png"/>
        <img className="img" src="./assets/IMG_0186.png"/>
        </div>
        <div className="comment">align-items: flex-start;</div>
        <div className="flex-container border justify-content align-items center">
        <img className="img" src="./assets/IMG_0186.png"/>
        <img className="img" src="./assets/IMG_0186.png"/>
        <img className="img" src="./assets/IMG_0186.png"/>
        </div>
        <div className="comment">align-items: center;</div>
        <div className="flex-container border justify-content align-items flex-end">
        <img className="img" src="./assets/IMG_0186.png"/>
        <img className="img" src="./assets/IMG_0186.png"/>
        <img className="img" src="./assets/IMG_0186.png"/>
        </div>
        <div className="comment">align-items: flex-end;</div>
        <div className="flex-container border justify-content align-items stretch">
        <img className="img" src="./assets/IMG_0186.png"/>
        <img className="img" src="./assets/IMG_0186.png"/>
        <img className="img" src="./assets/IMG_0186.png"/>
        </div>
        <div className="comment">align-items: stretch;</div>
        <div className="flex-container border justify-content align-items baseline">
            <h1>baseline</h1>
        <img className="img" src="./assets/IMG_0186.png"/>
        <h1>text</h1>
        <img className="img" src="./assets/IMG_0186.png"/>
        <h1>baseline</h1>
        </div>
        <div className="comment">align-items: baseline</div>
        </div>
        
    );
}

export default FlexBox;
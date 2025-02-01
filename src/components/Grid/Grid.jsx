import React from 'react';
import './Grid.css';

const Grid = () => {
    return (
        <div>
            <div>
            <img className="img"  src="./assets/IMG_0186.png" />
            <img className="img"  src="./assets/IMG_0186.png" />
            <img className="img"  src="./assets/IMG_0186.png" />
            <img className="img"  src="./assets/IMG_0186.png" />
            </div>
            <div><h2>Grid:</h2></div>
            <div className="grid">
            <img className="img"  src="./assets/IMG_0186.png" />
            <img className="img"  src="./assets/IMG_0186.png" />
            <img className="img"  src="./assets/IMG_0186.png" />
            <img className="img"  src="./assets/IMG_0186.png" />
            <h3>display: grid;</h3>
            </div>
            <div class="grid-container">
            <img className="img"  src="./assets/IMG_0186.png" />
            <img className="img"  src="./assets/IMG_0186.png" />
            <img className="img"  src="./assets/IMG_0186.png" />
            <img className="img"  src="./assets/IMG_0186.png" />
            </div>
            <div><h3>2 equal width columns & 2 equal width rows</h3></div>
            <div className="grid-two">
            <img className="img"  src="./assets/IMG_0186.png" />
            <img className="img"  src="./assets/IMG_0186.png" />
            <img className="img"  src="./assets/IMG_0186.png" />
            <img className="img"  src="./assets/IMG_0186.png" />            
            <img className="img"  src="./assets/IMG_0186.png" />
            <img className="img"  src="./assets/IMG_0186.png" />
            <img className="img"  src="./assets/IMG_0186.png" />
            <img className="img"  src="./assets/IMG_0186.png" />   
        </div>
        <h3>grid-template-columns: repeat(3, 1fr);</h3>
        </div>
    )
}

export default Grid;
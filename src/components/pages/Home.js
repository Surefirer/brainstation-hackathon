import React from "react";
import image from "../../assets/image/video-list-4.jpg";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="farmers">
            <h2>Farmers</h2>
          </div>
          <div className="category">
            <ul>
              <li>category</li>
              <li>category</li>
              <li>category</li>
            </ul>
          </div>
        </div>
        <div className="main">
          <div className="card">
            <div className="img">
              <img src={image} alt="" />
            </div>
            <div className="description">
              <p>some text</p>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src={image} alt="" />
            </div>
            <div className="description">
              <p>some text</p>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src={image} alt="" />
            </div>
            <div className="description">
              <p>some text</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;

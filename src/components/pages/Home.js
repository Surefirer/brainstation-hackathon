import React from "react";
import image from "../../assets/image/video-list-4.jpg";
import locationImg from "../../assets/image/noun_location_1047157.png";
import heroImg from "../../assets/image/hero.png";
import greyImg from "../../assets/image/grey.jpg";
import magnify from "../../assets/image/magnify.png";
import image1 from "../../assets/image/1.jpg";
import image2 from "../../assets/image/2.jpg";
import image4 from "../../assets/image/4.jpg";
import userIcon from "../../assets/image/Shape.svg";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="userIcon">
            <img src={userIcon} alt="userIcon" />
          </div>
          <div className="header_title">
            <img className="header_locationImg" src={locationImg} alt="" />
            <h3>Toronto</h3>
          </div>
          <div className="searchBar">
            <img className="searchBar-img" src={magnify} alt="" />
            <input
              className="searchBar-input"
              type="text"
              placeholder="search market"
            />
          </div>
        </div>

        <div className="hero">
          <img src={heroImg} alt="" />
        </div>

        <div className="nearYou">
          <h4>Farms near you</h4>
          <div className="container">
            <div className="nearYou_card">
              <div className="nearYou_card__img">
                <img src={image1} alt="" />
              </div>
              <div className="nearYou_card__adress">
                <p>Village Market</p>
                <p>1900 betty st.</p>
              </div>
            </div>
            <div className="nearYou_card">
              <div className="nearYou_card__img">
                <img src={image2} alt="" />
              </div>
              <div className="nearYou_card__adress">
                <p>Village Market</p>
                <p>1900 betty st.</p>
              </div>
            </div>
          </div>

          <div className="subscriptions">
            <h4>Discounted produce</h4>
            <div className="subscriptions-cardWrapper">
              <div className="subscriptions-card">
                <img src={image4} alt="" />
              </div>
              <div className="subscriptions-card">
                <img src={image4} alt="" />
              </div>
              <div className="subscriptions-card">
                <img src={image4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;

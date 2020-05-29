import React from "react";
import arrow from "../../assets/image/noun_Arrow.png";
import hamburger from "../../assets/image/noun_Hamburger.png";

function FarmerBio() {
  return (
    <section className="bio">
      <div className="bio__hero">
        <div className="bio__hero-icons">
          <img className="bio__hero-icons--img" src={arrow} alt="" />
        </div>
        <h1 className="bio__hero-text">LEX FARMS</h1>
      </div>
      <div className="bio__card">
        <div className="bio__card-head">
          <img className="bio__card-img" src="/placeholder1.jpg" />
          <h2 className="bio__card-head--title">Owner</h2>
        </div>
        <div className="bio__card-text">
          <p className="bio__card-text--paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s.
          </p>
        </div>
      </div>
      <div className="bio__contact">
        <div className="bio__box bio__box--1">Contact </div>
        <div className="bio__box bio__box--2">Subscribe </div>
      </div>
      <div className="bio__map">
        <h2 className="bio__map-header">1900 Berry Street</h2>
        <div className="bio__map-img-container">
          <img src="/placeholder2.jpg" className="bio__map-image" />
        </div>
      </div>
      <div className="bio__button">
        <button className="bio__button-btn">
          <p className="bio__button--text">Order</p>
        </button>
      </div>
    </section>
  );
}

export default FarmerBio;

import React from "react";
import "./intro.css";

function Intro() {
  return (
    <div>
      <h1>Intro to JavaScript</h1>
      <div className="BodyIntro">
        <h3>Welcome to Learning JavaScript.</h3>
        <p>
          I'll be doing my best to take you on a wonderful learning journey on
          the front end language of JavaScript!
        </p>
        <p>
            Let's get started!
        </p>
      </div>

        <div className="IntroContent1">
            <p>The first thing to learn is about data types and what they represent.</p>
            <p>JavaScript has eight different data types.</p>
            <ul className="dataTypes">1) Undefined</ul>
            <ul className="dataTypes">2) Null</ul>
            <ul className="dataTypes">3) Boolean</ul>
            <ul className="dataTypes">4) String</ul>
            <ul className="dataTypes">5) Symbol</ul>
            <ul className="dataTypes">6) Bigint</ul>
            <ul className="dataTypes">7) Number</ul>
            <ul className="dataTypes">8) Object</ul>
        </div>

    </div>
  );
}

export default Intro;

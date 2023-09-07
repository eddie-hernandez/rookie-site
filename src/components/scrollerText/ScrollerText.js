import React from 'react'
import './ScrollerText.css'

export default function ScrollerText({ showModal }) {
  return showModal ? (
    <div className="scrolling-text-container">
      <div className="scrolling-text-wrapper">
        <h1 className="scrolling-text">ROOKIE PIZZA</h1>
        <h1 className="scrolling-text">ROOKIE PIZZA</h1>
        <h1 className="scrolling-text">ROOKIE PIZZA</h1>
        <h1 className="scrolling-text">ROOKIE PIZZA</h1>
        <h1 className="scrolling-text">ROOKIE PIZZA</h1>
        <h1 className="scrolling-text">ROOKIE PIZZA</h1>
        <h1 className="scrolling-text">ROOKIE PIZZA</h1>
        <h1 className="scrolling-text">ROOKIE PIZZA</h1>
        <h1 className="scrolling-text">ROOKIE PIZZA</h1>
        <h1 className="scrolling-text">ROOKIE PIZZA</h1>
      </div>
      <div className="scrolling-text-wrapper">
        <h1 className="scrolling-text">ROOKIE PIZZA</h1>
        <h1 className="scrolling-text">ROOKIE PIZZA</h1>
        <h1 className="scrolling-text">ROOKIE PIZZA</h1>
        <h1 className="scrolling-text">ROOKIE PIZZA</h1>
        <h1 className="scrolling-text">ROOKIE PIZZA</h1>
        <h1 className="scrolling-text">ROOKIE PIZZA</h1>
        <h1 className="scrolling-text">ROOKIE PIZZA</h1>
        <h1 className="scrolling-text">ROOKIE PIZZA</h1>
        <h1 className="scrolling-text">ROOKIE PIZZA</h1>
        <h1 className="scrolling-text">ROOKIE PIZZA</h1>
      </div>
    </div>
  ) : (
    ''
  );
}
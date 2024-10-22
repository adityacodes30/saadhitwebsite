"use client";
import React from "react";
import Button from "./Button";
import stl from "./styles/navbar.module.css";
import { useState, useEffect } from "react";
import logo from "./lofo.png";
import Image from "next/image";


export default function Navbar() {
  const [isopen, setisopen] = useState(false);

  const toggle = () => {
    setisopen(!isopen);
  };

  return (
    <navbar className={stl.navbar}>
      <div><Image style={{width:'250px' , height:'130px', paddingTop:'20px'}} src={logo}></Image></div>
      <div className={stl.navlinks}>
        <div>Home</div>
        <div>About</div>
        <div>Case Studies</div>
        <div>Services</div>
        <Button text="Contact Us" />
      </div>
      <div className={stl.smallnavlinks}>
      <span >
          {!isopen ? (
            <span onClick={toggle} style={{cursor:'pointer'}} >O</span>
          ) : (
            <>
            <span onClick={toggle} style={{cursor:'pointer'}} >X</span>
            <div className={stl.smallnavnav}>
            <Button text="Home" />
            <Button text="About" />
            <Button text="Case Studies" />
            <Button text="Contact Us" />
            </div>
            </>
          )}
          </span>
      </div>
    </navbar>
  );
}

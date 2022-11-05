import React from "react";
import ProfileImage from "../../src/img/ProfilePic.jpg";
import Slack from "../img/slack.svg";
import Github from "../img/Social_icon.svg";
import Icon from "../img/Icon-md.png";
import { FiCamera } from "react-icons/fi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import '../index.css'
import { Link } from "react-router-dom"

const Linktree = () => {
  const buttons = [
    {
      linkName: "Twitter Link",
      href: "https://twitter.com/jerrymcfred",
      id: "twitter",
    },
    {
      linkName: "Zuri Team",
      href: "https://training.zuri.team/",
      id: "btn__zuri",
    },
    {
      linkName: "Zuri Books",
      href: "http://books.zuri.team",
      id: "books",
    },
    {
      linkName: "Python Books",
      href: "https://books.zuri.team/python-for-beginners?ref_id=jerry_mcfred",
      id: "book__python",
    },
    {
      linkName: "Background Check for Coders",
      href: "https://background.zuri.team,",
      id: "pitch",
    },
    {
      linkName: "Design Books",
      href: "https://books.zuri.team/design-rules ",
      id: "book__design",
    },
  ];

  return (
    <div className="App">
      <div>
        <div className="rightDesktop hidden md:block w-10 h-10 mt-4 mr-6 font-bold border-2 border-dashed rounded-full md:mr-20 hover:bg-gray-200">
          <img src={Icon} alt="icon" />
        </div>
        <div className="rightMobile block md:hidden w-10 h-10 mt-4 mr-6 font-bold border-2 border-dashed rounded-full md:mr-20">
          <BiDotsHorizontalRounded />
        </div>
      </div>

      <div className="container w-30 flex flex-col sm-auto justify-center items-center">
        <img
          src={ProfileImage}
          alt="Profile"
          id="profile__img"
          className="img mt-8 w-24 rounded-full border-sky-500 md:w-28 md:hover:brightness-50"
        />
        <div class="overlay">
          <a href="/contact" class="icon">
            <FiCamera />
          </a>
        </div>
      </div>

      <p id="slack" style={{ display: "none" }}>
      </p>
      <h1 className="text-2xl py-4 font-bold">Jeremiah Chigozie</h1>

      <div className="w-full md:w-4/5">
        {buttons.map((button) => (
          <div className="bg-gray-200 rounded-lg text-sm p-5 my-5 drop-shadow-[0_15px_25px_rgba(0,0,0,0.02)] hover:drop-shadow-md hover:bg-gray-300">
            <a href={button.href} id={button.id}>
              {button.linkName}
            </a>
          </div>
        ))}
        <div className="bg-gray-200 rounded-lg text-sm p-5 my-5 drop-shadow-[0_15px_25px_rgba(0,0,0,0.02)] hover:drop-shadow-md hover:bg-gray-300">
          <Link to="/contact" id="contact">Contact Me</Link>
        </div>
        
      </div>

      <div className="flex">
        <a href="https://stage.vercel.app">
          <img
            src={Slack}
            alt="slack"
            className="w-8 rounded-full border-sky-500 m-2"
          />
        </a>
        <a href="https://github.com/jerrymcfred" id="github">
          <img
            src={Github}
            alt="github"
            className="w-8 rounded-full border-sky-500 m-2"
          />
        </a>
      </div>
    </div>
  );
};

export default Linktree;

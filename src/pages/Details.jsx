import logo from "../assets/logo.svg";
import phones from "../assets/image-mockups.png";
import bgIntro from "../assets/bg-intro-desktop.svg";
import hamburger from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";

import online from "../assets/icon-online.svg";
import onboard from "../assets/icon-onboarding.svg";
import api from "../assets/icon-api.svg";
import bud from "../assets/icon-budgeting.svg";

import currency from "../assets/image-currency.jpg";
import restaurant from "../assets/image-restaurant.jpg";
import plane from "../assets/image-plane.jpg";
import confetti from "../assets/image-confetti.jpg";

import face from "../assets/icon-facebook.svg";
import yout from "../assets/icon-youtube.svg";
import twi from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import insta from "../assets/icon-instagram.svg";

import moon from "../assets/moon.svg";
import light from "../assets/light.svg";
import { Choose } from "../components/Choose";
import { Articles } from "../components/Articles";

export function Details() {
  function Menu() {
    const open = document.getElementById("burger");
    const close = document.getElementById("close");
    const list = document.querySelector("ul");

    open.classList.toggle("hidden");
    close.classList.toggle("hidden");
    list.classList.toggle("opacity-0"), list.classList.toggle("mt-7");
  }

  function DarkMode() {
    const moon = document.getElementById("moon");
    const light = document.getElementById("light");
    const html = document.querySelector("html");

    moon.classList.toggle("hidden");
    light.classList.toggle("hidden");
    html.classList.toggle("dark");
  }

  return (
    <>
      <div className="bg-white shadow-lg shadow-black/20 dark:bg-black dark:shadow-lg dark:shadow-white/20">
        <section className="max-w-[1440px] md:h-28 h-20 border-b-2 my-0 mx-auto md:flex md:justify-between py-8 px-6 z-10 relative">
          <div className="flex items-center md:justify-center justify-between">
            <img src={logo} className="dark:invert" />
            <img
              className="md:hidden dark:invert"
              src={hamburger}
              onClick={Menu}
              id="burger"
            />
            <img
              className="md:opacity-0 hidden dark:invert"
              src={close}
              onClick={Menu}
              id="close"
            />
          </div>
          <ul className="md:flex md:items-center md:static md:z-auto md:bg-transparent absolute bg-white dark:bg-black -z-10 md:pt-0 pt-0 md:mt-0  md:normal-case uppercase md:opacity-100 opacity-0  py-0 px-14 md:py-0 md:px-0 font-light text-gray-400 dark:text-slate-300">
            <li className="mx-4 my-6 md:my-0 hover:text-gray-600">
              <a href="#">Home</a>
            </li>
            <li className="mx-4 my-6 md:my-0 hover:text-gray-600">
              <a href="#">About</a>
            </li>
            <li className="mx-4 my-6 md:my-0 hover:text-gray-600">
              <a href="#">Contact</a>
            </li>
            <li className="mx-4 my-6 md:my-0 hover:text-gray-600">
              <a href="#">Blog</a>
            </li>
            <li className="mx-4 my-6 md:my-0 hover:text-gray-600">
              <a href="#">Careers</a>
            </li>
            <li>
              <img
                src={moon}
                className=" my-0 mx-auto w-5 md:ml-2 md:mx-0 md:pb-0 pb-4 cursor-pointer"
                id="moon"
                onClick={DarkMode}
              />
              <img
                src={light}
                className="hidden my-0 mx-auto w-5 md:ml-2 md:mx-0 md:pb-0 pb-4 cursor-pointer dark:invert"
                id="light"
                onClick={DarkMode}
              />
            </li>
          </ul>
          <button className="text-white bg-gradient-to-r from-[#38AD57] to-[#2BB7DA] md:px-8 rounded-full hidden md:mx-0 md:mb-0 mb-2 md:flex md:items-center md:justify-center">
            Request Invite
          </button>
        </section>
      </div>
      <section className="max-w-[1440px] md:grid md:grid-cols-2 my-0 mx-auto flex flex-col">
        <div className="sm:self-center md:order-1 order-2 md:text-start text-center px-8">
          <h1 className="text-4xl mb-5 sm:max-w-readableTitle sm:leading-tight leading-tight sm:text-6xl sm:mb-5 dark:text-white">
            Next generation digital banking
          </h1>
          <p className="sm:text-xl mb-8 text-gray-400  sm:max-w-readable">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="text-white bg-gradient-to-r from-[#38AD57] to-[#2BB7DA] w-40 h-12 rounded-full">
            Request Invite
          </button>
        </div>
        <div className="relative -z-50 md:order-1">
          <img src={bgIntro} className="w-full relative md:-top-28" />
          <img
            src={phones}
            className="absolute -top-40 md:-top-20 md:right-0"
          />
        </div>
      </section>
      <section className="max-w-[1440px] sm:pt-28 sm:px-8 pt-24 px-12 my-0 mx-auto sm:text-start text-center mb-16">
        <h1 className="sm:text-4xl mb-5 text-3xl dark:text-white">
          Why choose Easybank?
        </h1>
        <p className="sm:text-xl text-gray-400 max-w-readableSubTitle">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before
        </p>
      </section>
      <section className="my-0 mx-auto max-w-[1440px] md:flex md:items-center md:justify-center md:gap-8 md:px-8 md:mb-44 mb-28">
        <Choose
          src={online}
          title="Online Banking"
          content=" Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world."
        />
        <Choose
          src={bud}
          title="Simple Budgeting"
          content="See exactly where your money goes each month. Receive notifications when
        you're close to hitting your limits."
        />
        <Choose
          src={onboard}
          title="Fast Onboarding"
          content="We don't do branches. Open your account in minutes online and start taking control of your finances right away."
        />
        <Choose
          src={api}
          title="Open API"
          content="Manage your savings, investments, pensions, and much more from one account. Tracking your money has never been easier."
        />
      </section>
      <h1 className="sm:text-4xl text-3xl mb-12 md:text-start text-center max-w-[1440px] my-0 mx-auto px-8 dark:text-white">
        Latest Articles
      </h1>
      <section className="max-w-[1440px] my-0 mx-auto md:flex md:gap-12 md:justify-center md:items-center mb-32 px-8">
        <Articles
          src={currency}
          creator="Claire Robinsan"
          title="Receive money in any currency with no fees"
          content="
          The world is getting smaller and we're becoming more mobile. So why
          should you be forcecd to only receive money in a single..."
        />
        <Articles
          src={restaurant}
          creator="Wilson Hutton"
          title="Treat yourself without worrying about money"
          content=" Our simple budgeting feature allows you to separate out your spending
        and set realistic limits each month. That means you..."
        />
        <Articles
          src={plane}
          creator="Wilson Hutton"
          title="Take your Easybank card wherever you go"
          content="We want you to enjoy your travels. This is why we don't charge any
            fees on purchases while you're abroad. We'll even show you..."
        />
        <Articles
          src={confetti}
          creator="Claire Robinsan"
          title="Our invite-only Beta accounts are now live"
          content="After a lot of hard work by the whole team, we're excited launch our
            closed beta. It's easy to request an invite through the site..."
        />
      </section>
      <section className="w-full bg-[#3E436A]">
        <footer className="text-white max-w-[1440px] my-0 mx-auto md:grid md:grid-cols-3 md:py-8 md:px-8 grid grid-cols-1 px-12 py-10">
          <div className="flex flex-col justify-center items-center gap-4 md:block">
            <img src={logo} className="dark:invert" />
            <ul className="flex gap-4 md:mt-12 mt-4">
              <li>
                <a href="#" className="hover:invert">
                  <img src={face} />
                </a>
              </li>
              <li>
                <a href="#" className="hover:invert">
                  <img src={yout} />
                </a>
              </li>
              <li>
                <a href="#" className="hover:invert">
                  <img src={twi} />
                </a>
              </li>
              <li>
                <a href="#" className="hover:invert">
                  <img src={pinterest} />
                </a>
              </li>
              <li>
                <a href="#" className="hover:invert">
                  <img src={insta} />
                </a>
              </li>
            </ul>
          </div>
          <div className="md:flex md:gap-16">
            <ul className="flex flex-col gap-2 md:items-start items-center justify-center font-light mt-4 md:mt-0">
              <li>
                <a href="#" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Blog
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-2 md:items-start items-center justify-center font-light">
              <li className="mt-2 md:mt-0">
                <a href="#" className="hover:text-gray-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center">
            <button className="bg-gradient-to-r from-[#38AD57] to-[#2BB7DA] w-40 h-12 rounded-full md:self-end md:mt-0 mt-8">
              Request Invite
            </button>
            <span className="text-gray-400 text-sm mt-4 md:self-end">
              @Easybank. All Rights Reserved
            </span>
          </div>
        </footer>
      </section>
    </>
  );
}

import React from "react";
import CardProduct from "../components/CardProduct";
import CardSearch from "../components/CardSearch";
import Choiceswipper from "../components/Choiceswipper";
import Masonrysection from "../components/Masonrysection";

const Home = () => {
  return (
    <>
      <header>
        <div className="bgmain">
          <br />
          <div className=" my-72 flex justify-center items-center ">
            <div className="text-white text-center flex flex-col gap-1 ">
              <h1 className="text-3xl lg:text-7xl">Your Trip Your Adventure</h1>
              <p className="text-lg lg:mt-2 lg:mb-2 lg:text-2xl ">
                Choose Your Favourites
              </p>
              <button className="bg-slate-100 text-black py-2 px-3 mt mx-auto rounded-full ">
                <a className="text-sm  " href="">
                  Start Your Journey
                </a>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="h-fit ">
        <div className="xl:mx-48 mx-7 pt-20">
          <section>
            <div className="lg:flex justify-between py-4 ">
              <div className="my-5 lg:w-1/2 ">
                <div>
                  <h1 className="text-5xl">Traveler</h1>
                  <h1 className="text-2xl">Beyond Your Wildest Dreams</h1>
                  <h1 className="text-sm">
                    Welcome to our travel website, We're here to help you plan
                    your next adventure and <br /> make the most of your
                    travels. we have a variety of vacation spots around the
                    world and have collaborated <br /> with the local around it
                    so you can really enjoy your trip without hesitation.
                  </h1>
                </div>
              </div>
              <div className="w-full lg:w-[40vw] mx-auto">
                <Choiceswipper />
              </div>
            </div>
          </section>
          <section className="flex flex-wrap mx-5 mt-12 lg:justify-evenly">
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </section>

          <section>
            <CardSearch />
          </section>

          <section className="mt-24">
            <Masonrysection />
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;

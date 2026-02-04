import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              We are dedicated to creating memorable dining experiences by
              combining quality food, warm hospitality, and a comfortable
              atmosphere. Our journey began with a simple vision: to serve
              delicious meals prepared with care, fresh ingredients, and
              authentic flavors. Every dish on our menu is thoughtfully crafted
              to satisfy different tastes while maintaining consistency and
              quality. We believe that great food brings people together, which
              is why we focus not only on taste but also on service and
              presentation. Our team works passionately to ensure every guest
              feels welcomed and valued. Whether you are visiting for a casual
              meal or a special occasion, we strive to make your time with us
              enjoyable and fulfilling.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

"use client";
import Link from "next/link";
import Image from "next/image";
import "./reservations.css";
import pizza from "images/tabla.jpg";
import masa from "images/masa.jpg";
import { useEffect, useState } from "react";
import useScrollPosition from "../hooks/usescrollposition.js";
import AnimatedDivUp from "components/animateddiv/animateddivup.js";

export default function Reservations() {
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    // Lógica específica para Page1 que se ejecutará cuando cambie la posición del scroll
  }, [scrollPosition]);

  return (
    <main className="wrapper-l">
      <div id="header" className="header-l flex-column">
        <Image
          src={pizza}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="header-img-l"
          alt="marmoled background"
          loading="eager"
          placeholder="blur"
          priority={true}
        />

        <h1 className="header-tittle-l ">Secure your table </h1>
        <h2 className="header-h2-l col-12">
          <div className="col-8 mx-auto">
            Reserve your Mediterranean dining experience today
          </div>
        </h2>
      </div>
      <div className="section2 row col-12 mx-0 ">
        <div className="section2-inner row col-12 px-0">
          {" "}
          <div className="col-6 relative">
            {" "}
            <Image
              src={pizza}
              fill
              quality={100}
              className="card1 mx-auto"
              alt="puerto banus image"
            />
          </div>
          <div className="col-6 flex-column section2-bg">
          {" "}
          <AnimatedDivUp>
            <h1 className="col-12 mt-3">
              +34 777 55 99 00{" "}
            </h1>
          </AnimatedDivUp>
          <AnimatedDivUp>
            {" "}
            <p className="lato">
              Indulge in the anticipation of an exquisite culinary voyage with
              us. To <strong>ensure your seamless experience</strong>, we recommend reserving
              your table in advance. Our attentive staff is eager to assist you
              in arranging a <strong>memorable meal by the sea</strong>.
            </p>{" "}
          </AnimatedDivUp>
          <AnimatedDivUp>
            {" "}
            <div className="ms-5">
              {" "}
              <a
                href="tel:+34777559900"
                target="_blank"
                className="button mx-auto mb-5"
              >
              Reserve now &#x27A1;
              </a>
            </div>
          </AnimatedDivUp>
        </div>
        </div>
      </div>
    

      <div className="interlude-location-img">
        <Image
          src={masa}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="interlude2-img"
          alt="man knead dough"
        />
      </div>
      <div className="footer-l">
        <h2 className="interlude-text">
          "Discover a waterfront haven in Puerto Banús, where Mediterranean
          shores marries classic Mediterranean flavors with an exclusive terrace
          experience." - Chief.
        </h2>
      </div>
    </main>
  );
}
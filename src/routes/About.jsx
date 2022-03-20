import React from "react";
import Image from "../components/Image";
import "../styles/about.css";
import img1 from "../img/about-image-1.jpg";
import img2 from "../img/about-image-2.jpg";
import img3 from "../img/about-image-3.jpg";
import img4 from "../img/about-image-4.jpg";
import img5 from "../img/about-image-5.jpg";
import Center from "../components/Center";

export default function About() {
  return (
    <Center centralizeBy="flex">
      <div className="about--container my-5">
        <div className="about--section-summary">
          We are the Vertical team of the Tuğba Özbek Anadolu Lisesi podcast
          group. We meet for 2 days after school and get our records, as well as
          deliver our work to different points. (EU projects, TÜBİTAK projects,
          etc.) We shoot for our school on special days and share it on the
          school's social media accounts at the same time. Most importantly, we
          do all these in entertaining ways. Thanks to our 2 teachers who help
          us in every way and treat us like friends, we fulfill our
          responsibilities without getting bored.
        </div>
        <div className="about--section-pictures">
          <div>
            <div>
              <Image src={img1} />
            </div>
            <div>
              <Image src={img2} />
            </div>
            <div>
              <Image src={img4} />
            </div>
            <div>
              <Image src={img5} />
            </div>
            <div>
              <Image src={img3} />
            </div>
          </div>
        </div>
      </div>
    </Center>
  );
}

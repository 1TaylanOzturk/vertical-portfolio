import React, { useState } from "react";
import Image from "../components/Image";
import biographies from "../biographies";
import "../styles/bio.css";

export default function Bio() {
  const [translateTo, setTranslateTo] = useState("turkish");

  const handleTranslate = () => {
    setTranslateTo(translateTo === "turkish" ? "english" : "turkish");
  };

  return (
    <div className="bio--container-outer">
      <div className="bio--container">
        {biographies.map((data, index) => {
          return (
            <section className="bio--section" key={index}>
              <div className="bio--section-img">
                <Image src={data.avatar} />
              </div>
              <div className="bio--section-info">{data.bio[translateTo]}</div>
            </section>
          );
        })}
      </div>
      <div className="translator">
        <button onClick={handleTranslate}>
          Translate to{" "}
          <span>{translateTo === "turkish" ? "english" : "turkish"}</span>
        </button>
      </div>
    </div>
  );
}

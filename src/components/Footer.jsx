import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              We are the Vertical team of the Tuğba Özbek Anadolu Lisesi podcast
              group. We meet for 2 days after school and get our records, as
              well as deliver our work to different points. (EU projects,
              TÜBİTAK projects, etc.) We shoot for our school on special days
              and share it on the school's social media accounts at the same
              time. Most importantly, we do all these in entertaining ways.
              Thanks to our 2 teachers who help us in every way and treat us
              like friends, we fulfill our responsibilities without getting
              bored.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Company</h6>
            <ul className="footer-links">
              <li>
                <span>
                  <Link to="/about">About Us</Link>
                </span>
              </li>
              <li>
                <span>
                  <Link to="/contact">Contact</Link>
                </span>
              </li>
              <li>
                <span>
                  <Link to="/bio">Short Biographies</Link>
                </span>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <span>
                  <a
                    href="https://github.com/1TaylanOzturk/vertical-portfolio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Contribute
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <a
                    href="https://github.com/1TaylanOzturk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Developer
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p translate="no" className="copyright-text">
              Vertical
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a
                  className="twitter"
                  href="https://twitter.com/toalpodcast"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  className="youtube"
                  href="https://www.youtube.com/channel/UCCqpIw1useXiKWDOwh_5AOg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-youtube"></i>
                </a>
              </li>
              <li>
                <a
                  className="instagram"
                  href="https://www.instagram.com/invites/contact/?i=dnfvwtohuq57&utm_content=msruy7s"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React, { useState } from "react";
import "./qualifications.css";
const Qualifications = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-book-reader qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> Xth (GPA : 8.0)</h3>
                <span className="qualification__subtitle">
                Jawahar Navodaya Vidayalaya
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2013 - /2014
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title"> XII th (GPA : 7.0)</h3>
                <span className="qualification__subtitle">
                Jawahar Navodaya Vidayalaya
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2015 - 2016
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Tech</h3>
                <span className="qualification__subtitle">
                  Maharishi Dayanand University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  University Web Devlopement Challenge
                </h3>
                <span className="qualification__subtitle">
                  Participation Certification
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 07/2018
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                VocalForLocal (E-Commerce)
                  
                </h3>
                <span className="qualification__subtitle">
                Design Landing Page 
                  
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 10/2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>


            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                HindGaming   (E-Mobile Championship)
                    
                </h3>
                <span className="qualification__subtitle">
                Develope MVP(Minimum Viable Product) for this Bootstartup
                    
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 05/2020
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Mphasis Limited
                  
                </h3>
                <span className="qualification__subtitle">
                  Associate Software Engineer
                  
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 11/2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;

import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './goals.css'

const Goals = (props) => {
  return (
    <div className="goals-container">
      <Helmet>
        <title>Goals - Finbest</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="Goals - Finbest" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <header data-thq="thq-navbar" className="goals-navbar-interactive">
        <Link to="/" className="goals-navlink">
          <img
            alt="logo"
            src="https://classroom.umcghana.org/wp-content/uploads/2022/08/AP-logo-BLACK.jpg"
            className="goals-logo"
          />
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="goals-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="goals-nav"
          >
            <div
              data-thq="thq-dropdown"
              className="goals-thq-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="goals-dropdown-toggle"
              >
                <span className="goals-text">
                  <span>About Us</span>
                  <br></br>
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="goals-dropdown-arrow"
                >
                  <svg viewBox="0 0 1024 1024" className="goals-icon">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul data-thq="thq-dropdown-list" className="goals-dropdown-list">
                <li
                  data-thq="thq-dropdown"
                  className="goals-dropdown list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="goals-dropdown-toggle1"
                  >
                    <Link to="/goals" className="goals-navlink01">
                      Our Goals &amp; Objectives
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="goals-dropdown1 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="goals-dropdown-toggle2"
                  >
                    <Link to="/founders" className="goals-navlink02">
                      <span>
                        Our Founders Partners
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="goals-dropdown2 list-item"
                ></li>
              </ul>
            </div>
            <Link to="/" className="goals-navlink03">
              Home
            </Link>
            <Link to="/our-work" className="goals-navlink04">
              <span>Our Work</span>
              <br></br>
            </Link>
            <Link to="/our-strategy" className="goals-navlink05">
              <span>Our Strategy</span>
              <br></br>
            </Link>
            <a
              href="https://classroom.umcghana.org/student-registration/"
              target="_blank"
              rel="noreferrer noopener"
              className="goals-link"
            >
              <span>Our Programmes</span>
              <br></br>
            </a>
            <Link to="/news" className="goals-navlink06">
              <span>
                News
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
            </Link>
            <Link to="/contact-us" className="goals-navlink07">
              <span>Conttact Us</span>
              <br></br>
            </Link>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="goals-btn-group">
          <a
            href="https://classroom.umcghana.org/student-registration/"
            target="_blank"
            rel="noreferrer noopener"
            className="goals-login button"
          >
            Login
          </a>
          <a
            href="https://classroom.umcghana.org/student-registration/"
            target="_blank"
            rel="noreferrer noopener"
            className="goals-register button"
          >
            Register
          </a>
        </div>
        <div data-thq="thq-burger-menu" className="goals-burger-menu">
          <svg viewBox="0 0 1024 1024" className="goals-icon02">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="goals-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="goals-nav1"
          >
            <div className="goals-container01">
              <img
                alt="image"
                src="/playground_assets/logo-1500h.jpg"
                className="goals-image"
              />
              <div data-thq="thq-close-menu" className="goals-menu-close">
                <svg viewBox="0 0 1024 1024" className="goals-icon04">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="goals-nav2"
            >
              <Link to="/goals" className="goals-navlink08">
                <span>Our Goals &amp; Objectives</span>
                <br></br>
              </Link>
              <Link to="/founders" className="goals-navlink09">
                <span>Our Founders &amp; Partners</span>
                <br></br>
              </Link>
              <Link to="/our-work" className="goals-navlink10">
                <span>Our Work</span>
                <br></br>
              </Link>
              <Link to="/our-strategy" className="goals-navlink11">
                <span>Our Strategy</span>
                <br></br>
              </Link>
              <a
                href="https://classroom.umcghana.org/student-registration/"
                target="_blank"
                rel="noreferrer noopener"
                className="goals-link1"
              >
                <span>Our Programmes</span>
                <br></br>
              </a>
              <Link to="/news" className="goals-navlink12">
                <span>News &amp; Events</span>
                <br></br>
              </Link>
              <Link to="/contact-us" className="goals-navlink13">
                <span>Contact Us</span>
                <br></br>
              </Link>
            </nav>
            <div className="goals-container02">
              <a
                href="https://classroom.umcghana.org/student-registration/"
                target="_blank"
                rel="noreferrer noopener"
                className="goals-login1 button"
              >
                Login
              </a>
              <a
                href="https://classroom.umcghana.org/student-registration/"
                target="_blank"
                rel="noreferrer noopener"
                className="goals-register1 button"
              >
                Register
              </a>
            </div>
          </div>
          <div className="goals-icon-group">
            <svg viewBox="0 0 950.8571428571428 1024" className="goals-icon06">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="goals-icon08">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="goals-icon10">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="goals-banner">
        <img
          alt="profile"
          src="https://classroom.umcghana.org/wp-content/uploads/2022/08/cropped-AP-logo-BLACK.jpg"
          className="goals-image01"
        />
      </div>
      <div className="goals-hero">
        <div className="goals-container03">
          <h4 className="goals-text029">Our Goals &amp; Objectives</h4>
          <span className="goals-text030">
            <span>
              Our goal is to ensure that students and young employees are job
              ready with the requisite skills and become efficient, effective
              and valuable to their employers through our capacity-boosting,
              confidence building, soft and technically enhancing skills, with
              personal development. At A&amp;P Intern Connect Africa, our work
              is guided by the desire to advance learning and promote soft
              skills among the teeming continuing students, graduating students
              and unemployed youths to improve their employable skills.
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <div className="goals-btn-group1">
            <a
              href="https://classroom.umcghana.org"
              target="_blank"
              rel="noreferrer noopener"
              className="goals-button button"
            >
              Get Started
            </a>
            <a
              href="https://classroom.umcghana.org/dashboard/#/enrolled-courses"
              target="_blank"
              rel="noreferrer noopener"
              className="goals-link2 button"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="goals-hero1">
        <div className="goals-container04"></div>
        <div className="goals-steps">
          <h1 className="goals-text034">Our Objectives</h1>
          <div className="goals-container05">
            <div className="goals-container06">
              <div className="goals-step">
                <h1 className="goals-text035">
                  <span>1</span>
                </h1>
                <img
                  alt="image"
                  src="https://classroom.umcghana.org/wp-content/uploads/2022/08/cropped-AP-logo-BLACK.jpg"
                  className="goals-image02"
                />
                <span className="goals-text037">
                  <br></br>
                  <span>Objective 1</span>
                  <br></br>
                  <br></br>
                  <span>
                    To offer a well-packaged entrepreneurship and
                    employer-relevant training suitable to meet the needs of
                    interns, young entrepreneurs and employees;
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="goals-step1">
                <h1 className="goals-text044">
                  <span>2</span>
                </h1>
                <img
                  alt="image"
                  src="https://classroom.umcghana.org/wp-content/uploads/2022/12/Photo33.jpg"
                  className="goals-image03"
                />
                <span className="goals-text046">
                  <br></br>
                  <span>Objective 2</span>
                  <br></br>
                  <br></br>
                  <span>
                    To provide interns with critical employable soft-skills and
                    technical skills required by employers and entrepreneurs;
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="goals-container07">
              <div className="goals-step2">
                <h1 className="goals-text053">
                  <span>3</span>
                </h1>
                <img
                  alt="image"
                  src="https://classroom.umcghana.org/wp-content/uploads/2022/12/team-2.jpg"
                  className="goals-image04"
                />
                <span className="goals-text055">
                  <br></br>
                  <span>Objective 3</span>
                  <br></br>
                  <br></br>
                  <span>
                    To provide personal development, coaching and career
                    grooming for interns and potential entrepreneurs;
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="goals-step3">
                <h1 className="goals-text062">
                  <span>4</span>
                </h1>
                <img
                  alt="image"
                  src="https://classroom.umcghana.org/wp-content/uploads/2022/12/int1-scaled.jpg"
                  className="goals-image05"
                />
                <span className="goals-text064">
                  <br></br>
                  <span>Objective 4</span>
                  <br></br>
                  <br></br>
                  <span>
                    To support interns in articulating their personal career
                    objectives and sharpen their career and life goals;
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="goals-hero2">
        <div className="goals-container08"></div>
        <div className="goals-steps1">
          <div className="goals-container09">
            <div className="goals-container10">
              <div className="goals-step4">
                <h1 className="goals-text071">5</h1>
                <img
                  alt="image"
                  src="https://classroom.umcghana.org/wp-content/uploads/2022/12/Patience-6-scaled.jpg"
                  className="goals-image06"
                />
                <span className="goals-text072">
                  <br></br>
                  <span>Objective 5</span>
                  <br></br>
                  <br></br>
                  <span>
                    To support interns in developing their CVs and profiles;
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="goals-step5">
                <h1 className="goals-text079">6</h1>
                <img
                  alt="image"
                  src="https://classroom.umcghana.org/wp-content/uploads/2022/12/faci-1.jpg"
                  className="goals-image07"
                />
                <span className="goals-text080">
                  <br></br>
                  <span>Objective 6</span>
                  <br></br>
                  <br></br>
                  <span>
                    To support entrepreneurs in developing their business ideas
                    for the market.
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="goals-container11">
              <div className="goals-step6">
                <h1 className="goals-text087">7</h1>
                <img
                  alt="image"
                  src="https://classroom.umcghana.org/wp-content/uploads/2022/12/faci-1.jpg"
                  className="goals-image08"
                />
                <span className="goals-text088">
                  <br></br>
                  <span>Objective 7</span>
                  <br></br>
                  <br></br>
                  <span>
                    To provide interns with linkages and networking
                    opportunities with employers and start-up funding when
                    available;
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="goals-step7">
                <h1 className="goals-text095">8</h1>
                <img
                  alt="image"
                  src="https://classroom.umcghana.org/wp-content/uploads/2022/12/int7-scaled.jpg"
                  className="goals-image09"
                />
                <span className="goals-text096">
                  <br></br>
                  <span>Objective 8</span>
                  <br></br>
                  <br></br>
                  <span>
                    To provide interns with required references and
                    certification.
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Goals

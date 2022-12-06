import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Highlight from '../components/highlight'
import Overlay1 from '../components/overlay1'
import Overlay from '../components/overlay'
import Footer1 from '../components/footer1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Finbest</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="Finbest" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <div className="home-container01">
        <div className="home-container02">
          <div className="home-container03">
            <div className="home-container04"></div>
          </div>
        </div>
      </div>
      <header data-thq="thq-navbar" className="home-navbar-interactive">
        <img
          alt="logo"
          src="/playground_assets/logo-1500h.jpg"
          className="home-logo"
        />
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="home-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="home-nav"
          >
            <div
              data-thq="thq-dropdown"
              className="home-thq-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle"
              >
                <span className="home-text">
                  <span>About Us</span>
                  <br></br>
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="home-dropdown-arrow"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul data-thq="thq-dropdown-list" className="home-dropdown-list">
                <li data-thq="thq-dropdown" className="home-dropdown list-item">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle01"
                  >
                    <Link to="/goals" className="home-navlink">
                      Our Goals &amp; Objectives
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown01 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle02"
                  >
                    <Link to="/founders" className="home-navlink01">
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
                  className="home-dropdown02 list-item"
                ></li>
              </ul>
            </div>
            <Link to="/" className="home-navlink02">
              Home
            </Link>
            <Link to="/our-work" className="home-navlink03">
              <span>Our Work</span>
              <br></br>
            </Link>
            <Link to="/our-strategy" className="home-navlink04">
              <span>Our Strategy</span>
              <br></br>
            </Link>
            <a
              href="https://classroom.umcghana.org/student-registration/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link"
            >
              <span>Our Programmes</span>
              <br></br>
            </a>
            <Link to="/news" className="home-navlink05">
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
            <Link to="/contact-us" className="home-navlink06">
              <span>Contact Us</span>
              <br></br>
            </Link>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="home-btn-group">
          <a
            href="https://classroom.umcghana.org/student-registration/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-login button"
          >
            Login
          </a>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon02">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="home-nav1"
          >
            <div className="home-container05">
              <img
                alt="image"
                src="/playground_assets/logo-1500h.jpg"
                className="home-image"
              />
              <div data-thq="thq-close-menu" className="home-menu-close">
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="home-nav2"
            >
              <Link to="/goals" className="home-navlink07">
                <span>Our Goals &amp; Objectives</span>
                <br></br>
              </Link>
              <Link to="/founders" className="home-navlink08">
                <span>Our Founders &amp; Partners</span>
                <br></br>
              </Link>
              <Link to="/our-work" className="home-navlink09">
                <span>Our Work</span>
                <br></br>
              </Link>
              <Link to="/our-strategy" className="home-navlink10">
                <span>Our Strategy</span>
                <br></br>
              </Link>
              <a
                href="https://classroom.umcghana.org/student-registration/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1"
              >
                <span>Our Programmes</span>
                <br></br>
              </a>
              <Link to="/news" className="home-navlink11">
                <span>News &amp; Events</span>
                <br></br>
              </Link>
              <Link to="/contact-us" className="home-navlink12">
                <span>Contact Us</span>
                <br></br>
              </Link>
            </nav>
            <div className="home-container06">
              <a
                href="https://classroom.umcghana.org/student-registration/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-login1 button"
              >
                Login
              </a>
              <a
                href="https://classroom.umcghana.org/student-registration/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-register button"
              >
                Register
              </a>
            </div>
          </div>
          <div className="home-icon-group">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon06">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon08">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon10">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="home-hero">
        <img
          alt="image"
          src="https://internconnectafrica.com/img/faci.jpg"
          loading="lazy"
          className="home-image1"
        />
        <div className="home-container07">
          <h2 className="home-text29">A &amp; P INTERN CONNECT AFRICA</h2>
          <span className="home-text30">
            At A&amp;P Intern Connect Africa, our work is guided by the desire
            to advance learning and promote soft skills among the teeming
            continuing students, graduating students and unemployed youths to
            improve their employable skills.
          </span>
          <div className="home-btn-group1">
            <a
              href="https://classroom.umcghana.org/student-registration/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link2 button"
            >
              Get Started
            </a>
          </div>
          <div data-thq="thq-dropdown" className="home-thq-dropdown1 list-item">
            <ul data-thq="thq-dropdown-list" className="home-dropdown-list1">
              <li data-thq="thq-dropdown" className="home-dropdown03 list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-dropdown-toggle03"
                >
                  <span className="home-text31">Sub-menu Item</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="home-dropdown-arrow1"
                  >
                    <svg viewBox="0 0 1024 1024" className="home-icon12">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="home-dropdown-list2"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown04 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle04"
                    >
                      <span className="home-text32">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown05 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle05"
                    >
                      <span className="home-text33">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown06 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle06"
                    >
                      <span className="home-text34">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown07 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle07"
                    >
                      <span className="home-text35">Sub-menu Item</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li data-thq="thq-dropdown" className="home-dropdown08 list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-dropdown-toggle08"
                >
                  <span className="home-text36">Sub-menu Item</span>
                </div>
              </li>
              <li data-thq="thq-dropdown" className="home-dropdown09 list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-dropdown-toggle09"
                >
                  <span className="home-text37">Sub-menu Item</span>
                </div>
              </li>
              <li data-thq="thq-dropdown" className="home-dropdown10 list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-dropdown-toggle10"
                >
                  <span className="home-text38">Sub-menu Item</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="home-video">
        <div className="home-content">
          <div className="home-header"></div>
          <a
            href="https://www.youtube.com/watch?v=S1_lsen7EGo"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link3"
          >
            <div className="home-video-container">
              <iframe
                src="https://www.youtube.com/embed/DeQkMK5LME4"
                className="home-iframe"
              ></iframe>
              <div className="home-heading-container">
                <div className="home-heading">
                  <span className="home-text39">Job Ready !!!</span>
                  <span className="home-text40">
                    {' '}
                    Our work is exclusively in Africa but with global links and
                    footprints. 
                  </span>
                </div>
                <div className="home-explore">
                  <span className="home-text41">
                    Explore our programmes-&gt;
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="home-sections">
        <div className="home-section">
          <div className="home-image2"></div>
          <div className="home-content1">
            <h2 className="home-text42">Intern Connect Africa</h2>
            <Highlight
              Title="Lorem ipsum dolor sit amet, consectetur "
              Description="Most students and young adults seek for internship opportunities during their vacations with limited success. An internship is a form of structured and supervised experiential learning in a student’s chosen field but most important to acquire work related employable soft and technical skills to be able to perform efficiently and effectively after graduation. Internships encompass learning objectives, observation, reflection, evaluation and assessment. Internships offer students career exploration and skills application while providing employers with creativity, enthusiasm and assistance for project work. It is a winning scenario for students, employers, colleges/universities."
            ></Highlight>
            <div className="home-explore1">
              <Link to="/our-work" className="home-navlink13">
                Explore our works-&gt;
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-banner-container"></div>
      <div className="home-pricing">
        <a
          href="https://classroom.umcghana.org/student-registration/"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link4"
        >
          <div className="home-content2">
            <div className="home-header1">
              <div className="home-heading1">
                <h2 className="home-text43">Programmes</h2>
              </div>
            </div>
            <div className="home-pricing-plans">
              <div className="home-plans">
                <div className="home-plan">
                  <div className="home-top">
                    <div className="home-heading2">
                      <img
                        alt="image"
                        src="/playground_assets/softskills-700w.jpg"
                        className="home-image3"
                      />
                      <span className="home-text44">Soft skills</span>
                      <span className="home-text45">
                        Your education, degree, and certifications might help
                        you get an interview, but your soft skills are what will
                        help you get the job and sustain it...
                      </span>
                    </div>
                    <div className="home-cost"></div>
                  </div>
                  <div className="home-bottom">
                    <div className="home-button">
                      <span className="home-text46">Get Standard</span>
                    </div>
                  </div>
                </div>
                <div className="home-plan1">
                  <img
                    alt="image"
                    src="/playground_assets/critical-700w.jpg"
                    className="home-image4"
                  />
                  <div className="home-top1">
                    <div className="home-heading3">
                      <span className="home-text47">
                        Critical Technical Skills
                      </span>
                      <span className="home-text48">
                        Technical skills are the specialized knowledge and
                        expertise required to perform specific tasks and use
                        specific tools and programmes in real world...
                      </span>
                    </div>
                    <div className="home-cost1"></div>
                  </div>
                  <div className="home-bottom1">
                    <div className="home-button1">
                      <span className="home-text49">Get Standard</span>
                    </div>
                  </div>
                </div>
                <div className="home-plan2">
                  <img
                    alt="image"
                    src="/playground_assets/team-700w.jpg"
                    className="home-image5"
                  />
                  <div className="home-top2">
                    <div className="home-heading4">
                      <span className="home-text50">Personal Development</span>
                      <span className="home-text51">
                        You may have an impressive combination of soft and
                        technical skills that employers are looking for but if
                        you are unable to clearly articulate this...
                      </span>
                    </div>
                    <div className="home-cost2"></div>
                  </div>
                  <div className="home-bottom2">
                    <div className="home-button2">
                      <span className="home-text52">Get Standard</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-expand">
                <Overlay1 rootClassName="overlay1-root-class-name"></Overlay1>
              </div>
            </div>
            <div className="home-plans1">
              <div className="home-plan3">
                <div className="home-top3">
                  <div className="home-heading5">
                    <span className="home-text53">Soft skills</span>
                    <span className="home-text54">
                      Your education, degree, and certifications might help you
                      get an interview, but your soft skills are what will help
                      you get the job and sustain it...
                    </span>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/playground_assets/softskills-700w.jpg"
                  className="home-image6"
                />
                <div className="home-bottom3">
                  <div className="home-button3">
                    <span className="home-text55">Get Started</span>
                  </div>
                </div>
              </div>
              <div className="home-plan4">
                <div className="home-top4">
                  <div className="home-heading6">
                    <span className="home-text56">
                      Critical Technical Skills
                    </span>
                    <span className="home-text57">
                      Technical skills are the specialized knowledge and
                      expertise required to perform specific tasks and use
                      specific tools and programmes in real world...
                    </span>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/playground_assets/critical-700w.jpg"
                  className="home-image7"
                />
                <div className="home-bottom4">
                  <div className="home-bottom5">
                    <div className="home-button4">
                      <span className="home-text58">Get Started</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-plan5">
                <div className="home-top5">
                  <div className="home-heading7">
                    <span className="home-text59">Personal Development</span>
                    <span className="home-text60">
                      You may have an impressive combination of soft and
                      technical skills that employers are looking for but if you
                      are unable to clearly articulate this...
                    </span>
                  </div>
                </div>
                <div className="home-bottom6">
                  <img
                    alt="image"
                    src="/playground_assets/team-700w.jpg"
                    className="home-image8"
                  />
                </div>
                <div className="home-bottom7">
                  <div className="home-button5">
                    <span className="home-text61">Get Started</span>
                  </div>
                </div>
              </div>
              <div className="home-expand1">
                <Overlay rootClassName="overlay-root-class-name"></Overlay>
              </div>
            </div>
          </div>
        </a>
        <div className="home-help">
          <span className="home-text62">Need any help?</span>
          <div className="home-explore2">
            <span className="home-text63">
              Get in touch with us right away -&gt;
            </span>
          </div>
        </div>
        <div className="home-hero1">
          <strong className="home-text64">Donate to support our Course</strong>
          <div className="home-btn-group2">
            <Link to="/contact-us" className="home-navlink14 button">
              Get Started
            </Link>
            <button className="home-button6 button">Learn More</button>
          </div>
        </div>
        <span className="home-text65">
          Learn about how to SIGN-UP and OIN -&gt;
        </span>
      </div>
      <div className="home-get-started">
        <div className="home-content3">
          <div className="home-heading8"></div>
          <div className="home-hero-buttons">
            <a
              href="https://classroom.umcghana.org/student-registration/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link5"
            >
              <div className="home-android-btn">
                <img
                  alt="pastedImage"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRWR9Fa4y37Ep9tmqQxnltiF8DGfy19zI9Tg&amp;usqp=CAU"
                  className="home-android"
                />
                <span className="home-caption">SIGN UP NOW</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="home-social-bar">
        <svg viewBox="0 0 950.8571428571428 1024" className="home-icon14">
          <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
        </svg>
        <svg viewBox="0 0 877.7142857142857 1024" className="home-icon16">
          <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
        </svg>
        <svg viewBox="0 0 602.2582857142856 1024" className="home-icon18">
          <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
        </svg>
        <a
          href="https://www.linkedin.com/company/intern-connect-africa/"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link6"
        >
          <svg viewBox="0 0 877.7142857142857 1024" className="home-icon20">
            <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
          </svg>
        </a>
        <svg viewBox="0 0 1024 1024" className="home-icon22">
          <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
        </svg>
      </div>
      <div className="home-container08">
        <div className="home-container09">
          <Footer1></Footer1>
          <span className="home-text66">
            © 2022 TGNE Solutions - Tema. All Rights Reserved.
          </span>
        </div>
        <div className="home-container10"></div>
      </div>
    </div>
  )
}

export default Home

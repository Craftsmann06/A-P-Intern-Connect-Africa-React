import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import BlogPostCard2 from '../components/blog-post-card2'
import './news.css'

const News = (props) => {
  return (
    <div className="news-container">
      <Helmet>
        <title>News - Finbest</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="News - Finbest" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <header data-thq="thq-navbar" className="news-navbar-interactive">
        <Link to="/" className="news-navlink">
          <img
            alt="logo"
            src="/playground_assets/logo-1500h.jpg"
            className="news-logo"
          />
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="news-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="news-nav"
          >
            <div
              data-thq="thq-dropdown"
              className="news-thq-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="news-dropdown-toggle"
              >
                <span className="news-text">
                  <span>About Us</span>
                  <br></br>
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="news-dropdown-arrow"
                >
                  <svg viewBox="0 0 1024 1024" className="news-icon">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul data-thq="thq-dropdown-list" className="news-dropdown-list">
                <li data-thq="thq-dropdown" className="news-dropdown list-item">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="news-dropdown-toggle1"
                  >
                    <Link to="/goals" className="news-navlink01">
                      Our Goals &amp; Objectives
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="news-dropdown1 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="news-dropdown-toggle2"
                  >
                    <Link to="/founders" className="news-navlink02">
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
                  className="news-dropdown2 list-item"
                ></li>
              </ul>
            </div>
            <Link to="/" className="news-navlink03">
              Home
            </Link>
            <Link to="/our-work" className="news-navlink04">
              <span>Our Work</span>
              <br></br>
            </Link>
            <Link to="/our-strategy" className="news-navlink05">
              <span>Our Strategy</span>
              <br></br>
            </Link>
            <a
              href="https://classroom.umcghana.org/student-registration/"
              target="_blank"
              rel="noreferrer noopener"
              className="news-link"
            >
              <span>Our Programmes</span>
              <br></br>
            </a>
            <Link to="/news" className="news-navlink06">
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
            <Link to="/contact-us" className="news-navlink07">
              <span>Conttact Us</span>
              <br></br>
            </Link>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="news-btn-group">
          <a
            href="https://classroom.umcghana.org/student-registration/"
            target="_blank"
            rel="noreferrer noopener"
            className="news-login button"
          >
            Login
          </a>
          <a
            href="https://classroom.umcghana.org/student-registration/"
            target="_blank"
            rel="noreferrer noopener"
            className="news-register button"
          >
            Register
          </a>
        </div>
        <div data-thq="thq-burger-menu" className="news-burger-menu">
          <svg viewBox="0 0 1024 1024" className="news-icon02">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="news-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="news-nav1"
          >
            <div className="news-container1">
              <img
                alt="image"
                src="/playground_assets/logo-1500h.jpg"
                className="news-image"
              />
              <div data-thq="thq-close-menu" className="news-menu-close">
                <svg viewBox="0 0 1024 1024" className="news-icon04">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="news-nav2"
            >
              <Link to="/goals" className="news-navlink08">
                <span>Our Goals &amp; Objectives</span>
                <br></br>
              </Link>
              <Link to="/founders" className="news-navlink09">
                <span>Our Founders &amp; Partners</span>
                <br></br>
              </Link>
              <Link to="/our-work" className="news-navlink10">
                <span>Our Work</span>
                <br></br>
              </Link>
              <Link to="/our-strategy" className="news-navlink11">
                <span>Our Strategy</span>
                <br></br>
              </Link>
              <a
                href="https://classroom.umcghana.org/student-registration/"
                target="_blank"
                rel="noreferrer noopener"
                className="news-link1"
              >
                <span>Our Programmes</span>
                <br></br>
              </a>
              <Link to="/news" className="news-navlink12">
                <span>News &amp; Events</span>
                <br></br>
              </Link>
              <Link to="/contact-us" className="news-navlink13">
                <span>Contact Us</span>
                <br></br>
              </Link>
            </nav>
            <div className="news-container2">
              <a
                href="https://classroom.umcghana.org/student-registration/"
                target="_blank"
                rel="noreferrer noopener"
                className="news-login1 button"
              >
                Login
              </a>
              <a
                href="https://classroom.umcghana.org/student-registration/"
                target="_blank"
                rel="noreferrer noopener"
                className="news-register1 button"
              >
                Register
              </a>
            </div>
          </div>
          <div className="news-icon-group">
            <svg viewBox="0 0 950.8571428571428 1024" className="news-icon06">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="news-icon08">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="news-icon10">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="news-banner">
        <img
          alt="profile"
          src="https://classroom.umcghana.org/wp-content/uploads/2022/08/cropped-AP-logo-BLACK.jpg"
          className="news-image1"
        />
      </div>
      <div className="news-blog">
        <div className="news-container3">
          <BlogPostCard2
            image_src="https://classroom.umcghana.org/wp-content/uploads/2022/12/int1-scaled.jpg"
            profile_src="https://classroom.umcghana.org/wp-content/uploads/2022/08/cropped-AP-logo-BLACK.jpg"
            rootClassName="rootClassName3"
          ></BlogPostCard2>
          <BlogPostCard2
            profile_src="https://classroom.umcghana.org/wp-content/uploads/2022/12/int3-scaled.jpg"
            rootClassName="rootClassName3"
          ></BlogPostCard2>
        </div>
        <div className="news-container4">
          <BlogPostCard2
            image_src="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
            profile_src="https://classroom.umcghana.org/wp-content/uploads/2022/12/Photo33.jpg"
            rootClassName="rootClassName"
          ></BlogPostCard2>
        </div>
        <BlogPostCard2
          image_src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIxfHxwb3J0cmFpdCUyMHdvbWFuJTIwY29sb3J8ZW58MHx8fHwxNjI2NDUwNTU4&amp;ixlib=rb-1.2.1&amp;h=1000"
          profile_src="https://classroom.umcghana.org/wp-content/uploads/2022/12/int4-scaled.jpg"
          rootClassName="rootClassName2"
        ></BlogPostCard2>
      </div>
    </div>
  )
}

export default News

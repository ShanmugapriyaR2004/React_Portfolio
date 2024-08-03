import React from 'react'

const Intro = () => {
  return (
    <div>
        <div className="intross">
        <div className="intro">
          <h1>Hey,there</h1>
          <h2>I'm Shanmuga priya</h2>
          <h4>Frontend Developer</h4>
          <hr />
          <div className="circle4"></div>
          <div className="circle5"></div>
          <div className="circle6"></div>
          <div className="circle7"></div>
          <img src="media/background image.png" alt="" />
        </div>
      </div>
      <div className="decor"></div>
      <div className="aboutme">
        <div className="circle9"></div>
        <h1 className="h1">About me</h1>
        <hr />
        <div className="content">
          <p>
            Hi, this is Shanmuga priya i’m an engineering student pursuing
            Information technology .I always thrive to learn and experience new
            things and concepts .As a passionate learner li would love to learn
            more and build many unquie products.
          </p>
          <p>Looking forward to give out bests in the upcoming enterprise.</p>
        </div>
        <div className="option">
          <div className="hire">
            <p>
              <a className="hireme" href="#">
                Hire me
              </a>
            </p>
          </div>
          <div className="cv">
            <p>
              <a className="downloadcv" href="#">
                Download CV
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
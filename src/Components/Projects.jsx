import React from 'react'

const Projects = () => {
  return (
    <div>
        <div className="projects">
        <p>Projects</p>
        <hr />
        <div className="project">
          <div className="project1">
            <p>Automatic Irrigation System</p>
            <p className="description1">
              Detection of soil moisture and automation of valve opening through
              sensors
            </p>
            <img src="media/onpr.png" alt="" />
            <p className="onprocess">On Process</p>
            <div className="gb1">
              <p>Github</p>
            </div>
          </div>
          <div className="project2">
            <p>Parking management system</p>
            <p className="description2">
              Software based two and four wheeler parking management monitoring
              ,authorization and etc...
            </p>
            <img src="media/onpr.png" alt="" />
            <p className="onprocess">On Process</p>
            <div className="gb2">
              <p>Github</p>
            </div>
          </div>
        </div>
        <div className="project3">
          <p className="description3">
            Created Books website using HTML and CSS Responsiveness added for
            Tablets
          </p>
          <p className="project4">Books Website</p>
          <img src="media/donlogo.png" alt="" />
          <p className="available">Available</p>
          <div className="gb3">
            <p>Github</p>
          </div>
        </div>
        <div className="star"></div>
      </div>
    </div>
  )
}

export default Projects
import React from 'react'

const Connect = () => {
  return (
    <div>
        <div className="connect">
        <div className="circle29"></div>
        <div className="circle30"></div>
        <div className="circle31"></div>
        <div className="circle32"></div>
        <div className="circle33"></div>
        <div className="circle34"></div>
        <div className="circle35"></div>
        <div className="circle36"></div>
        <div className="start">
          <h1>Start by just</h1>
        </div>
        <div className="saying">
          <h1>
            Saying<p>hi</p>
          </h1>
        </div>
        <div className="glowcircle8">
          <p>Get Started</p>
        </div>
        <div className="connectthrough">
          <img src="media/Screenshot (299).png" alt="" />
          <img src="media/iconr.png" alt="" />
          <img src="media/iconr1.png" alt="" />
          <img src="media/flogo.png" alt="" />
          <p className="top">Let's build something Great!</p>
          <div className="connectoutline"></div>
          <div className="name">
            <label for="name" />
            <input type="text" id="name" name="name" placeholder="Name" />
          </div>
          <div className="second">
            <label for="emailid" />
            <input className="emailid" name="emailid" placeholder="Email id" />
          </div>
          <div className="third">
            <label for="comment" />
            <input
              className="comment"
              name="comment"
              placeholder="Leave a comment"
            />
          </div>
          <div className="submit">
            <label for="submitt" />
            <input
              type="submit"
              className="submitt"
              name="submitt"
              placeholder="submit"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connect
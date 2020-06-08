import React from "react"

const Banner = ({ children }) => (
  <div className="container text-white text-center">
    <div className="row">
      <div className="col">
        <h2 className="display-4 mb-5">
          A <span className="text-warning ">community-driven</span> culture
          collection platform for sharing materials
        </h2>
        {children}
      </div>
    </div>
  </div>
)

export default Banner

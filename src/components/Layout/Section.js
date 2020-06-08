import React from "react"

const Section = ({ title, info, children, isLast }) => {
  return (
    <section className="pt-5">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            {title ? <p className="text-uppercase pt-4">{title}</p> : null}

            <h2 className="display-5">{info}</h2>
            {children}
          </div>
        </div>
      </div>
      {isLast ? null : (
        <div className="container pt-5">
          <hr className="vw-50 mx-auto" />
        </div>
      )}
    </section>
  )
}

export default Section

import React from "react"

const Footer = () => (
  <footer id="footer" className="bg-dark py-3 text-white text-center">
    <div className="py-3">
      Copyright &copy; National Institutes of Biotechnology
      {new Date().getFullYear()} all rights reserved
    </div>
  </footer>
)

export default Footer

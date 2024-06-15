import React from 'react'

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#343A40]  text-white">
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Report Lost item</a>
    <a className="link link-hover">Claim lost Items</a>
    <a className="link link-hover">Report Found Items</a>
   
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
   
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
  )
}

export default Footer
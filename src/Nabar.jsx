import React from "react";
// import { a } from "react-router-dom";
// import { a } from "react-router-dom";


const Navbar = () => {
    return(
       <>
 <div className="container-fluid" nav bg>
    <div className="row">
        <div className="col-10 ms-auto">


<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
      <span className="navbar-hrefggler-icon"></span>
    </buthrefn>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/service">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
</div>
</div> 
       </>
    )
}
export default Navbar;
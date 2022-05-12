import React from "react";
import { BsFacebook, BsTwitter, BsLinkedin, BsBehance } from "react-icons/bs";

function Codeaddict() {
  return (
    <div>
      <div class="d-flex justify-content-between shadow bg-body rounded"> 
        <nav class=" text-center pt-2 col-4">
          <p class="fs-4 ">
            <span class="text-dark"></span>
            Coding
            <span class="text-primary"> Addict</span>
          </p>
        </nav>
        <div class="d-flex">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
              <button
                class="navbar-toggler "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item ">
                    <a
                      class="nav-link text-primary"
                      aria-current="page"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-primary" href="#">
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-primary" href="#">
                      Projects
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-primary">Contact</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-primary">Profile</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <nav class="px-1 pt-3 text-info text-center col-4  d-none d-lg-block">
          <BsFacebook size={20} class="mx-2" />
          <BsTwitter size={20} class="mx-2" />
          <BsLinkedin size={20} class="mx-2" />
          <BsBehance size={20} class="mx-2" />
        </nav>
      </div>
    </div>
  );
}

export default Codeaddict;

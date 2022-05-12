import React from "react";
import "./sidebar.css";
import { FaHome, FaFolderOpen, FaCalendarAlt } from "react-icons/fa";
import { MdGroup } from "react-icons/md";
import { IoDocumentText, IoLogoLinkedin } from "react-icons/io5";
import { BsFacebook, BsTwitter, BsBehance } from "react-icons/bs";
import { GiCutDiamond } from "react-icons/gi";

function Sidebar() {
  return (
    <div>
      <div>
        <nav class="navbar navbar-light bg-light fixed-top">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="offcanvas offcanvas-start"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                  <span class="txt-coding">Coding </span>
                  <span class="txt-addict">Addict</span>
                </h5>
                <button
                  type="button"
                  class="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item item1nav">
                    <a class="nav-link texthome" aria-current="page" href="#">
                      <FaHome class="home-ico m-2" size={25} />
                      <span class="home-txt">Home</span>
                    </a>
                  </li>
                  <li class="nav-item item2nav">
                    <a class="nav-link" href="#">
                      <MdGroup class="home-ico m-2" size={25} />
                      <span class="home-txt">Team</span>
                    </a>
                  </li>
                  <li class="nav-item item3nav">
                    <a class="nav-link" href="#">
                      <FaFolderOpen class="home-ico m-2" size={25} />
                      <span class="home-txt">Projects</span>
                    </a>
                  </li>
                  <li class="nav-item item4nav">
                    <a class="nav-link" href="#">
                      <FaCalendarAlt class="home-ico m-2" size={25} />
                      <span class="home-txt">Calendar</span>
                    </a>
                  </li>
                  <li class="nav-item item5nav">
                    <a class="nav-link" href="#">
                      <IoDocumentText class="home-ico m-2" size={25} />
                      <span class="home-txt">Documents</span>
                    </a>
                  </li>
                </ul>
                <div class="icon-social px-2">
                  <a href="https://www.facebook.com">
                    <BsFacebook class="ms-4 fbicon" size={25} />
                  </a>
                  <a class="" href="https://www.twitter.com">
                    <BsTwitter class="ms-4 twittericon" size={25} />
                  </a>
                  <a href="https://www.linked.com v mnbdxw2S!2">
                    <IoLogoLinkedin class="ms-4 linkedinicon" size={25} />
                  </a>
                  <a href="https://www.behance.net/">
                    <BsBehance class="ms-4 behanceicon" size={25} />
                  </a>
                  <a href="https://www.twitter.com">
                    <GiCutDiamond class="ms-4 diamondicon" size={25} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;

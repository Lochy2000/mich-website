"use strict";

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    once: true,
  });

  const nav = document.querySelector("#nav");
  const navBtn = document.querySelector("#nav-btn");
  const navBtnImg = document.querySelector("#nav-btn-img");

  //Hamburger menu
  navBtn.onclick = () => {
    if (nav.classList.toggle("open")) {
      navBtnImg.src = "img/icons/close.svg";
    } else {
      navBtnImg.src = "img/icons/open.svg";
    }
  };

  window.addEventListener("scroll", function () {
    const header = document.querySelector("#header");
    const hero = document.querySelector("#home");
    let triggerHeight = hero.offsetHeight - 170;

    if (window.scrollY > triggerHeight) {
      header.classList.add("header-sticky");
      goToTop.classList.add("reveal");
    } else {
      header.classList.remove("header-sticky");
      goToTop.classList.remove("reveal");
    }
  });

  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 170;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector("header nav a[href*=" + id + "]")
            .classList.add("active");
        });
      }
    });
  };

  // Lightbox functionality
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.querySelector(".lightbox-close");

  // Get all gallery images directly
  const galleryImages = document.querySelectorAll(".project-img");

  // Open lightbox when clicking on gallery images
  galleryImages.forEach(function(img) {
    img.style.cursor = "pointer";
    img.onclick = function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log("Image clicked:", this.src); // Debug
      lightbox.style.display = "block";
      lightboxImg.src = this.src;
      lightboxImg.alt = this.alt;
      document.body.style.overflow = "hidden";
    };
  });

  // Close lightbox when clicking the X button
  if (lightboxClose) {
    lightboxClose.onclick = function() {
      lightbox.style.display = "none";
      document.body.style.overflow = "auto";
    };
  }

  // Close lightbox when clicking outside the image
  if (lightbox) {
    lightbox.onclick = function(e) {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto";
      }
    };
  }

  // Close lightbox with Escape key
  document.onkeydown = function(e) {
    if (e.key === "Escape" && lightbox && lightbox.style.display === "block") {
      lightbox.style.display = "none";
      document.body.style.overflow = "auto";
    }
  };
});

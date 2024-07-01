const overlay = document.querySelector(".dark-overlay");

function toggleMenuSidebar() {
  const hamburger = document.querySelector(".hamburger");
  const offcanvasSidebar = document.querySelector(".offcanvas-menu-sidebar");
  const closeBtn = document.querySelector(".offcanvas-close");

  const sideBarOpen = () => {
    hamburger.classList.add("hamburger-active");
    offcanvasSidebar.classList.add("sidebar-open");
    overlay.classList.add("d-block");
    document.body.style.overflow = "hidden";
  };

  const sideBarClose = () => {
    hamburger.classList.remove("hamburger-active");
    offcanvasSidebar.classList.remove("sidebar-open");
    overlay.classList.remove("d-block");
    document.body.style = null;
  };

  hamburger.addEventListener("click", sideBarOpen);
  overlay.addEventListener("click", sideBarClose);
  closeBtn.addEventListener("click", sideBarClose);
}

function toggleCategories() {
  const triggerBtn = document.querySelector(".categories-sidebar-btn");
  const categoriesSidebar = document.querySelector(".side-menu-section");
  const closeBtn = document.querySelector(".side-menu-close");

  const sideBarOpen = () => {
    categoriesSidebar.classList.add("sidebar-open");
    overlay.classList.add("d-block");
    document.body.style.overflow = "hidden";
  };

  const sideBarClose = () => {
    categoriesSidebar.classList.remove("sidebar-open");
    overlay.classList.remove("d-block");
    document.body.style = null;
  };

  triggerBtn.addEventListener("click", sideBarOpen);
  overlay.addEventListener("click", sideBarClose);
  closeBtn.addEventListener("click", sideBarClose);
}

document.addEventListener("DOMContentLoaded", toggleCategories);
document.addEventListener("DOMContentLoaded", toggleMenuSidebar);

//------Tabs---------//

const tabs = document.querySelectorAll("button[data-tab-target]");
const mobileTab = document.getElementById("tranfer-tabs");
const tabContents = document.querySelectorAll(".tab-item");
const defaultTab = document.getElementById("all");

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const target = document.querySelector(tab.dataset.tabTarget);

    if (e.target.classList.contains("active-tab")) {
      defaultTab.classList.add("active-tab");

      tabContents.forEach((tabContent) => {
        tabContent.classList.remove("active-tab");
      });

      tabs.forEach((tab) => {
        tab.classList.remove("active-tab");
      });
    } else {
      defaultTab.classList.remove("active-tab");

      tabContents.forEach((tabContent) => {
        tabContent.classList.remove("active-tab");
      });

      tabs.forEach((tab) => {
        tab.classList.remove("active-tab");
      });

      tab.classList.add("active-tab");
      target.classList.add("active-tab");
    }
  });
});

mobileTab.addEventListener("change", (e) => {
  const target = document.getElementById(e.target.value);

  if (e.target.classList.contains("active-tab")) {
    defaultTab.classList.add("active-tab");

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active-tab");
    });
  } else {
    defaultTab.classList.remove("active-tab");

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active-tab");
    });

    target.classList.add("active-tab");
  }
});

// home page images slider
$('.slider-home').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  adaptiveHeight: true,
  infinite: false,
  useTransform: true,
  speed: 400,
  cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
  autoplay: true,
  autoplaySpeed: 2000,
});

$('.slider-home').on('afterChange', function (event, slick, currentSlide) {
});

$('.slider-home').on('click', '.slick-slide', function (event) {
  event.preventDefault();
  var $clickedSlide = $(this);
  var goToSingleSlide = $clickedSlide.data('slick-index');
  $('.slider-home .slick-slide').removeClass('is-active');
  $clickedSlide.addClass('is-active');
  $('.slider-home').slick('slickGoTo', goToSingleSlide);
});


//........... booking-page facilities show-all button............//
function toggleShowAll() {
  var showAllBtn = document.getElementById("showall-btn");
  var currentDisplay = window.getComputedStyle(showAllBtn).display;
  if (currentDisplay === "none" || currentDisplay === "") {
    showAllBtn.style.display = "block";
    document.getElementById("myBtn").textContent = "Show Less";
  } else {
    showAllBtn.style.display = "none";
    document.getElementById("myBtn").textContent = "Show all 14";
  }
}

// ...............booking-page Room facilities show-all button...............//
function ttoggleShowAll() {
  var showAllBtn = document.getElementById("sshowall-btn");
  var currentDisplay = window.getComputedStyle(showAllBtn).display;
  if (currentDisplay === "none" || currentDisplay === "") {
    showAllBtn.style.display = "block";
    document.getElementById("mmyBtn").textContent = "Show Less";
  } else {
    showAllBtn.style.display = "none";
    document.getElementById("mmyBtn").textContent = "Show all 25";
  }
}

// ................booking-page Brands show-all button.................//
function ShowAlltree() {
  var showAllBtn = document.getElementById("showallbtn-tree");
  var currentDisplay = window.getComputedStyle(showAllBtn).display;
  if (currentDisplay === "none" || currentDisplay === "") {
    showAllBtn.style.display = "block";
    document.getElementById("mmyBtn-t").textContent = "Show Less";
  } else {
    showAllBtn.style.display = "none";
    document.getElementById("mmyBtn-t").textContent = "Show all 20";
  }
}



































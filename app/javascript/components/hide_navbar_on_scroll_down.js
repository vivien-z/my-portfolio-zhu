let prevScrollPos = window.pageYOffset;

const hideNavbarTrigger = () => {

  window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-72px";
    }
    prevScrollPos = currentScrollPos;
  }
};

export { hideNavbarTrigger };




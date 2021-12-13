const makeNavitemActiveOnClick = () => {

  const url = window.location.href;
  $(".navbar-nav .nav-link").each(function () {
    // checks if its the same on the address bar
    if (url == (this.href)) {
      $(this).closest("li").addClass("active");
    }
  });
 };



export { makeNavitemActiveOnClick };

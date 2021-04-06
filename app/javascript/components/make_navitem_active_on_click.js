const makeNavitemActiveOnClick = () => {

  const url = window.location.href;
  $(".navbar-nav .nav-link").each(function () {
    // checks if its the same on the address bar
    if (url == (this.href)) {
      $(this).closest("li").addClass("active");
    }
  });

  // const allNavitems = document.querySelector(".navbar-nav");

  // allNavitems.addEventListener('click', (event) => {

  //   const activeNavitem = document.querySelector(".nav-item.active");
  //   const targetElement = event.target.parentElement;
  //     // console.log(activeNavitem);
  //   if (activeNavitem !== null) {
  //     activeNavitem.classList.remove("active");
  //   }
  //   targetElement.classList.add('active');
  //     // console.log(targetElement);
  // });

  // $( '#navbar .navbar-nav a' ).on( 'click', function () {
  //   $( '#navbar .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
  //   $( this ).parent( 'li' ).addClass( 'active' );
  // });

 };



export { makeNavitemActiveOnClick };

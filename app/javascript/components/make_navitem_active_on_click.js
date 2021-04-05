

const makeNavitemActiveOnClick = () => {
  const allNavitems = document.querySelector(".navbar-nav");
  const activeNavitem = document.querySelector(".nav-item.active");

  allNavitems.addEventListener('click', (event) => {
    // event.preventDefault();
    if (activeNavitem !== null) {
      activeNavitem.classList.remove("active");
      // console.log(activeNavitem);
    }
    const targetElement = event.target.parentElement;
    targetElement.classList.add('active');
      console.log(targetElement);
  });
 };

export { makeNavitemActiveOnClick };

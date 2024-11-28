//header scroll

let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.elementElement.scrollTop > 20) {
    nav.classList.add("header-scrolled");
  }
  else {
    nav.classList.remove("header-scrolled");
  }
}
window.addEventListener("scroll", function () {
  var header_wrapper = document.querySelector("header_wrapper");
  header_wrapper.classList.toggle("sticky", window.scrollY > 0)
})
//nav hide
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");

  })
})

//counter design
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
      let obj = document.getElementById(id),
          current = start,
          range = end - start,
          increment = end > start ? 1 : -1,
          step = Math.abs(Math.floor(duration / range)),
          timer = setInterval(() => {
              current += increment;
              obj.textContent = current;
              if (current == end) {
                  clearInterval(timer);
              }

          }, step);
  }
  counter("count1", 0, 1000 , 3000);
  counter("count2", 100, 1001 , 2500);
  counter("count3", 0, 1002, 3000);
  counter("count4", 0, 1005 , 3000);
});




//owl carousel
// $(document).ready(function() {
//   $(".client-slider-section").owlCarousel({
//     items: 4,
//     loop: true,
//     nav: false,
//     autoplay: true,
//     autoplayTimeout: 2000,
//     autoplayHoverPause: true,
//     responsiveClass: true,
//     responsive:{
//       0:  {
//          items: 2
//       },
//       600:{
//          items: 3
//       },
//       1000: {
//           items: 6
//       }
//     }
//   });
// });
// $(document).ready(function () {
//   $(".client-slider-section").owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: true,
//     responsive: {
//       0: {
//         items: 1
//       },
//       600: {
//         items: 3
//       },
//       1000: {
//         items: 5
//       }
//     }
//   });
// });
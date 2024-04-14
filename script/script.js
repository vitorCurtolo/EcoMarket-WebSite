
// const headerListMob = document.querySelector('.header-list-mob');
// const header = document.querySelector('#header');

// // Function to change the CSS properties
// function adjustLayoutOn() {
//     let headerListMob = document.querySelector(".header-list-mob");
//     let header = document.getElementById("header");
//     // Change .header-list-mob to display grid
//     headerListMob.style.display = 'grid';
//     // Change #header to display none
//     header.style.display = 'none';
// }

// // Function to change the CSS properties
// function adjustLayoutOff() {
//     let headerListMob = document.querySelector(".header-list-mob");
//     let header = document.getElementById("header");
  
//     // Change .header-list-mob to display grid
//     headerListMob.style.display = 'none';
//     // Change #header to display none
//     header.style.display = 'flex';
// }

// window.addEventListener("resize", function() {
//   const headerListMob = document.querySelector(".header-list-mob");
//   const header = document.getElementById("header");

//   if (window.innerWidth <= 730) {
//     headerListMob.style.display = "grid";
//     header.style.display = "none";
//   } else {
//     // Optional: Reset styles for larger screens (if needed)
//     headerListMob.style.display = ""; // Inherit from CSS
//     header.style.display = "";
//   }
// });

function formatPhoneNumber() {
    var input = document.getElementById("phone");
    var numbers = input.value.replace(/\D/g, '');
    var formattedNumber = '';

    if (numbers.length > 0) {
      formattedNumber = '(' + numbers.substring(0, 2) + ')';
    }
    if (numbers.length > 2) {
      formattedNumber += ' ' + numbers.substring(2, 7);
    }
    if (numbers.length > 6) {
      formattedNumber += '-' + numbers.substring(7, 11);
    }

    input.value = formattedNumber;
  }






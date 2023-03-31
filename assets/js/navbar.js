/* ======================================
        ! Navigation active !
   ====================================== */
//    let navbar = document.getElementById('navbar');
let NavbarTogglerBtn = document.querySelector('.navbar-toggler-btn');
let navigation = document.getElementById('navigation');

NavbarTogglerBtn.onclick = function () {
  navigation.classList.toggle('active');
}
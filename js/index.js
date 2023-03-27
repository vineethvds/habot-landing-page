
$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});
$(".toggle-password1").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});


  const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#passwordField');
if (togglePassword) {
	togglePassword.onclick = () => {
    console.log('clicked')
		const type = password
			.getAttribute('type') === 'password' ?
			'text' : 'password';
		password.setAttribute('type', type);
		this.classList.toggle('eyeIcon');
	}
}

 const togglePassword2 = document.querySelector('#togglePassword2');
const password2 = document.querySelector('#passwordField2');
if (togglePassword2) {
	togglePassword2.onclick = () => {
		const type2 = password2
			.getAttribute('type') === 'password' ?
			'text' : 'password';
		password2.setAttribute('type', type2);
		this.classList.toggle('eyeIcon');
	}
}

    function myFunction() {
      var x = document.getElementById("myLinks");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }


let hamburger_menu = document.querySelector('.hamburger_menu')
if (hamburger_menu) {
  hamburger_menu.onclick = () => document.querySelector('.navbar1').classList.add('navbarShow')
  console.log("cki")
}

let close_nav = document.querySelector('.close_nav')
if (close_nav) {
	close_nav.onclick = () => document.querySelector('.navbar1').classList.remove('navbarShow')
}
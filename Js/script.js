//--------aos----------
document.addEventListener("DOMContentLoaded", function() {
      if (window.AOS) {
        AOS.init({ once: true, duration: 700, offset: 200 ,startEvent: 'scroll'});
      }
    });

//--------slide----------
let slideIndex = 1;
window.onload = function() {
  showSlides(slideIndex);
};
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (slides.length === 0) return; // עצירה אם אין slides

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  if(dots[slideIndex-1]) dots[slideIndex-1].className += " active";
}


//--------About-read more toggles----------
function toggleReadMore() {
        const content = document.querySelector('.read-more-content');
        const button = document.querySelector('.read-more');
        if (content.style.display === "block") {
            content.style.display = "none";
            button.innerHTML = "Read More";
        } else {
            content.style.display = "block";
            button.innerHTML = "Read Less";
        }
    }


//--------accordion----------
document.querySelectorAll('.acc-item').forEach(btn => {
  btn.addEventListener('click', () => {
    const open = btn.classList.toggle('active');
    btn.querySelector('.acc-icon').textContent = open ? '–' : '+';
    document.querySelectorAll('.acc-item').forEach(b => { if (b !== btn) b.classList.remove('active'); });
  });
});

//--------form validation----------
(function formSetup() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const err = document.getElementById('form-error');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    err.textContent = '';

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const notes = form.notes.value.trim();

    if (!name || !email || !notes) {
      err.textContent = 'Please fill in all fields.';
      return;
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      err.textContent = 'Please enter a valid email (must include "@" and a dot).';
      return;
    }
    window.location.href = 'thank-you.html';
  });
})();

 
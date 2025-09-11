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

  if (slides.length === 0) return; 

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

 // -------- Trivia Quiz ----------
(function triviaSetup() {
  const container = document.getElementById("trivia-quiz");
  if (!container) return;

  const questions = [
    {
      q: "What is the capital of Japan?",
      options: ["Tokyo", "Kyoto", "Osaka", "Nagoya"],
      answer: "Tokyo"
    },
    {
      q: "Which country has the city of Machu Picchu?",
      options: ["Peru", "Brazil", "Mexico", "Chile"],
      answer: "Peru"
    },
    {
      q: "Which continent is the Sahara Desert located in?",
      options: ["Asia", "South America", "Africa", "Australia"],
      answer: "Africa"
    },
    {
      q: "Which city is known as 'The City of Canals'?",
      options: ["Amsterdam", "Venice", "Bangkok", "Bruges"],
      answer: "Venice"
    },
    {
      q: "Mount Everest lies between which two countries?",
      options: ["India & China", "Nepal & China", "Nepal & India", "China & Bhutan"],
      answer: "Nepal & China"
    }
  ];

  let score = 0;
  let current = 0;

  function showQuestion() {
    const q = questions[current];
    container.innerHTML = `
      <div class="question">
        <h3>${q.q}</h3>
        <div class="options">
          ${q.options.map(opt => `<button>${opt}</button>`).join("")}
        </div>
      </div>
      <div class="result">Question ${current + 1} of ${questions.length}</div>
    `;

    container.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => {
        if (btn.textContent === q.answer) {
          score += 20;
          btn.style.background = "green";
        } else {
          btn.style.background = "red";
        }
        setTimeout(() => {
          current++;
          if (current < questions.length) {
            showQuestion();
          } else {
            container.innerHTML = `<div class="result"><h2>Your Score: ${score}/100</h2></div>`;
          }
        }, 800);
      });
    });
  }

  showQuestion();
})();
// Dark mode toggle
const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  // Save preference
  if(document.body.classList.contains('dark')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});

// Load saved mode
window.addEventListener('DOMContentLoaded', () => {
  if(localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark');
  }
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const targetID = anchor.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    if(targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Inspirational quotes array
const quotes = [
  "Mental health is not a destination, but a process. — Noam Shpancer",
  "You, yourself, as much as anybody in the entire universe, deserve your love and affection. — Buddha",
  "It’s okay to not be okay, but it’s not okay to stay that way. — Unknown",
  "Sometimes the people around you won’t understand your journey. They don’t need to, it’s yours. — Joubert Botha",
  "Your mental health is a priority. Your happiness is an essential. Your self-care is a necessity. — Unknown"
];

// Quote cycling
const quoteText = document.getElementById('quoteText');
const newQuoteBtn = document.getElementById('newQuoteBtn');

function displayRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[index];
}

// Initial quote
displayRandomQuote();

// New quote on button click
newQuoteBtn.addEventListener('click', displayRandomQuote);

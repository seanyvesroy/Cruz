document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
const API_KEY = 'your-yelp-api-key'; // Replace with your actual Yelp API key
const BUSINESS_ID = 'cruz-integrated-systems-costa-mesa-2'; // Replace with your Yelp business ID

async function fetchYelpReviews() {
  const url = `https://api.yelp.com/v3/businesses/${BUSINESS_ID}/reviews`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  if (!response.ok) {
    console.error('Failed to fetch Yelp reviews');
    return;
  }

  const data = await response.json();
  displayReviews(data.reviews);
}

function displayReviews(reviews) {
  const testimonialsSection = document.getElementById('testimonials');
  reviews.forEach((review) => {
    const reviewElement = document.createElement('div');
    reviewElement.className = 'review';

    reviewElement.innerHTML = `
      <p>${review.text}</p>
      <p><strong>- ${review.user.name}</strong></p>
    `;

    testimonialsSection.appendChild(reviewElement);
  });
}

fetchYelpReviews();

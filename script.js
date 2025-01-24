// Get all gallery items
const galleryItems = document.querySelectorAll('.gallery-item');

// Add event listener to each gallery item
galleryItems.forEach((item) => {
  item.addEventListener('click', () => {
    // Get the image and description of the clicked item
    const image = item.querySelector('img');
    const description = item.querySelector('p');

    // Create a modal window to display the image and description
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <img src="${image.src}" alt="${image.alt}">
      <p>${description.textContent}</p>
      <button class="close-modal">Close</button>
    `;

    // Add the modal to the body
    document.body.appendChild(modal);

    // Add event listener to close the modal
    const closeModalButton = modal.querySelector('.close-modal');
    closeModalButton.addEventListener('click', () => {
      modal.remove();
    });
  });
});

// Get the contact form
const contactForm = document.querySelector('.contact form');

// Add event listener to the contact form
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the form data
  const formData = new FormData(contactForm);

  // Send the form data to the server (replace with your own server-side code)
  fetch('/contact', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});

// Get the navigation menu
const navMenu = document.querySelector('nav ul');

// Add event listener to the navigation menu
navMenu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    e.preventDefault();

    // Get the href attribute of the clicked link
    const href = e.target.getAttribute('href');

    // Scroll to the corresponding section
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
});
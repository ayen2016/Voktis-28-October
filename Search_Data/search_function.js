// Map of keywords to page URLs
const pages = {
  // Support
  "outsourced it support": "Outsourced-IT-Support.html",
  "onsite it engineers": "Onsite-IT-Engineers.html",
  "helpdesk": "Help-Desk.html",
  "school it support": "School-IT-Support.html",

  // Consultancy
  "wireless solutions": "Wireless-Solutions.html",
  "network design": "Network-Design.html",
  "serverless solutions": "Serverless-Solutions.html",

  // Security
  "cyber security training": "Cyber-Security-Training.html",
  "cyber essentials": "Cyber-Essentials.html",

  // Hardware
  "laptops": "Laptops.html",
  "desktops": "Desktops.html",
  "switches": "Switches.html",
  "firewalls": "Firewalls.html",
  "esims": "Esims.html",
  "e-sims": "Esims.html",

  // Software
  "cloud backup": "#", 
  "endpoint protection": "#",
  "microsoft 365": "#",
  "ai": "#",
  "microsoft copilot": "#",
  "cloud printing": "#",

  // About / Blogs / Case Studies
  "blogs": "Blogs.html",
  "case studies": "Case-Studies.html",
  "team": "About-Us.html",
  "Mohammed Hadi": "About-Us.html",
  "Shah Amanat": "About-Us.html",
  "David Robert": "About-Us.html",
  "Nozom Uddin": "About-Us.html",
  
  // General pages
  "contact": "Contact-Us.html",
  "home": "index.html"
};

document.addEventListener('DOMContentLoaded', function () {
  // Select all search forms (desktop, sticky, mobile)
  const searchForms = document.querySelectorAll('.search-box form');

  searchForms.forEach(form => {
    const searchInput = form.querySelector('input[name="search-field"]');

    // Check if message container exists; if not, create it
    let messageContainer = form.querySelector('.search-message');
    if (!messageContainer) {
      messageContainer = document.createElement('div');
      messageContainer.classList.add('search-message');
      form.appendChild(messageContainer);
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent normal form submit

      const query = searchInput.value.trim().toLowerCase(); // Case-insensitive input
      let found = false;

      // Loop through all keywords
      for (const key in pages) {
        const keyLower = key.toLowerCase(); // Case-insensitive comparison
        if (keyLower.includes(query) || query.includes(keyLower)) {
          // Redirect to the matched page
          window.location.href = pages[key];
          found = true;
          break;
        }
      }

      // Show message if no match found
      if (!found) {
        messageContainer.textContent = "No results found.";

        // Auto-hide message after 20 seconds
        setTimeout(() => {
          messageContainer.textContent = "";
        }, 5000); // 5000ms = 5 seconds
      } else {
        messageContainer.textContent = ""; // Clear message if match found
      }
    });
  });
});


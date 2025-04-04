document.addEventListener("DOMContentLoaded", function () {
  // Dark Mode Toggle Using Logo
  const logo = document.querySelector(".header-top img");
  const body = document.body;

  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
  }

  logo.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  // Sidebar Toggle
  const menuBtn = document.getElementById("menu-btn");
  const closeSidebar = document.getElementById("close-sidebar");
  const sidebar = document.getElementById("sidebar");

  menuBtn.addEventListener("click", () => {
    sidebar.style.left = "0";
  });

  closeSidebar.addEventListener("click", () => {
    sidebar.style.left = "-250px";
  });

  // Category Slider
  const prevBtn = document.getElementById("prev-category");
  const nextBtn = document.getElementById("next-category");
  const categoriesGrid = document.querySelector(".categories-slider");

  let scrollAmount = 0;
  const scrollStep = 200;

  nextBtn.addEventListener("click", function () {
    scrollAmount += scrollStep;
    categoriesGrid.scrollTo({ left: scrollAmount, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", function () {
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) scrollAmount = 0;
    categoriesGrid.scrollTo({ left: scrollAmount, behavior: "smooth" });
  });

  // Search Bar Auto-Suggestions
  const searchBar = document.getElementById("search-bar");
  const searchSuggestions = document.getElementById("search-suggestions");

  const sampleSuggestions = [
    "JavaScript Basics",
    "Python for Beginners",
    "HTML & CSS Crash Course",
    "React.js Full Guide",
    "Machine Learning Tutorial",
  ];

  searchBar.addEventListener("input", function () {
    let input = searchBar.value.toLowerCase();
    searchSuggestions.innerHTML = "";
    if (input.length > 0) {
      sampleSuggestions.forEach((suggestion) => {
        if (suggestion.toLowerCase().includes(input)) {
          let div = document.createElement("div");
          div.classList.add("suggestion-item");
          div.textContent = suggestion;
          div.addEventListener("click", () => {
            searchBar.value = suggestion;
            searchSuggestions.innerHTML = "";
          });
          searchSuggestions.appendChild(div);
        }
      });
    }
  });

  // Like Button Functionality
  document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', function() {
      alert('You liked this video!');
    });
  });

  // Infinite Scrolling with Loading Indicator
  const videoGrid = document.querySelector(".video-grid");
  const loadingIndicator = document.createElement("div");
  loadingIndicator.classList.add("loading-spinner");
  document.body.appendChild(loadingIndicator);

  const videoData = [
    { title: "Web Development Crash Course", thumbnail: "tnali.png" },
    { title: "CSS Animations Masterclass", thumbnail: "Green.png" },
    { title: "Python Data Science Basics", thumbnail: "b.png" },
    { title: "AI & Machine Learning Explained", thumbnail: "ee.png" },
  ];

  function loadMoreVideos() {
    videoData.forEach((video) => {
      let videoCard = document.createElement("div");
      videoCard.classList.add("video-card");

      videoCard.innerHTML = `
        <a href="#">
          <img src="${video.thumbnail}" alt="${video.title}">
          <div class="video-info">
            <h3 class="video-title">${video.title}</h3>
            <p class="channel-name">Channel Name</p>
            <p class="video-stats">1.2M views • 2 days ago</p>
          </div>
        </a>
      `;

      videoGrid.appendChild(videoCard);
    });
  }

  window.addEventListener("scroll", function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      loadingIndicator.style.display = "block";
      
      setTimeout(() => {
        loadMoreVideos();
        loadingIndicator.style.display = "none";
      }, 3000);
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const videoGrid = document.querySelector(".video-grid");

  // Create Loading Spinner
  const loadingIndicator = document.createElement("div");
  loadingIndicator.classList.add("loading-spinner");
  document.body.appendChild(loadingIndicator);

  // Sample videos to be loaded dynamically
  const videoData = [
      { title: "Web Development Crash Course", thumbnail: "tnali.png" },
      { title: "CSS Animations Masterclass", thumbnail: "Green.png" },
      { title: "Python Data Science Basics", thumbnail: "b.png" },
      { title: "AI & Machine Learning Explained", thumbnail: "ee.png" },
  ];

  function loadMoreVideos() {
      videoData.forEach((video) => {
          let videoCard = document.createElement("div");
          videoCard.classList.add("video-card");

          videoCard.innerHTML = `
            <a href="#">
              <img src="${video.thumbnail}" alt="${video.title}">
              <div class="video-info">
                <h3 class="video-title">${video.title}</h3>
                <p class="channel-name">Channel Name</p>
                <p class="video-stats">1.2M views • 2 days ago</p>
              </div>
            </a>
          `;

          videoGrid.appendChild(videoCard);
      });
  }

  // Infinite Scroll Event Listener with Loading Spinner
  window.addEventListener("scroll", function () {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
          loadingIndicator.style.display = "block"; // Show spinner
          
          setTimeout(() => {
              loadMoreVideos();
              loadingIndicator.style.display = "none"; // Hide spinner
          }, 3000);
      }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.getElementById("themeToggle");
  const body = document.body;

  // Check local storage for theme preference
  if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
      toggleSwitch.checked = true;
  }

  toggleSwitch.addEventListener("change", function () {
      if (this.checked) {
          body.classList.add("dark-mode");
          localStorage.setItem("theme", "dark");
      } else {
          body.classList.remove("dark-mode");
          localStorage.setItem("theme", "light");
      }
  });
});
document.querySelector("form").addEventListener("submit", async function (event) {
  event.preventDefault();
  
  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="password"]').value;
  
  const response = await fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const result = await response.json();
  
  if (result.success) {
    localStorage.setItem("token", result.token); // Save token for session management
    window.location.href = "home.html"; // Redirect to home page
  } else {
    alert("Invalid email or password!");
  }
});

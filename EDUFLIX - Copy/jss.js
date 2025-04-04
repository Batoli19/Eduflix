
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menuBtn");
    const closeSidebar = document.getElementById("closeSidebar");
    const sidebar = document.getElementById("sidebar");
  
    if (menuBtn && closeSidebar && sidebar) {
      menuBtn.addEventListener("click", () => {
        sidebar.classList.add("active");
      });
  
      closeSidebar.addEventListener("click", () => {
        sidebar.classList.remove("active");
      });
    } else {
      console.error("One or more elements (menuBtn, closeSidebar, sidebar) not found.");
    }
  });
  
// Toggle sidebar
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    //const links = document.getElementById('navbarLinks');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    //links.classList.toggle('active');
  }
  
  // Close sidebar when clicking outside
  document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if (!sidebar.contains(event.target) && !event.target.matches('.menu-toggle')) {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
    }
  });
  
  // Email copy function
  function copyEmail(e) {
    e.preventDefault();
    navigator.clipboard.writeText("your.email@example.com")
      .then(() => {
        const link = e.currentTarget;
        link.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
          link.innerHTML = '<i class="fas fa-envelope"></i>';
        }, 2000);
      });
  }
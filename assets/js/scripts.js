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
    const link = e.currentTarget;
    navigator.clipboard.writeText("thptha003@myuct.ac.za")
      .then(() => {
        link.classList.add('copied');
        const icon = link.querySelector('i');
        // link.innerHTML = '<i class="fas fa-check"></i>';
        icon.classList.replace('fa-envelope', 'fa-check');
        setTimeout(() => {
          link.classList.remove('copied');
          // link.innerHTML = '<i class="fas fa-envelope"></i>';
          icon.classList.replace('fa-check', 'fa-envelope');
        }, 2000);
      });
  }
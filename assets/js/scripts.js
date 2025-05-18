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
        // Add 'copied' class to show tooltip
        link.classList.add('copied');
        
        // Change icon to checkmark
        const icon = link.querySelector('i');
        icon.classList.replace('fa-envelope', 'fa-check');
        
        // Reset after 2 seconds
        setTimeout(() => {
          link.classList.remove('copied');
          icon.classList.replace('fa-check', 'fa-envelope');
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy email: ', err);
        // Optional: Show error feedback
        link.classList.add('error');
        setTimeout(() => link.classList.remove('error'), 2000);
      });
  }
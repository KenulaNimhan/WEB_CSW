// CHANGE HEADER COLOR WHEN SCROLLED
document.addEventListener('scroll',() => {
    const header=document.querySelector('header');
    if(window.scrollY>0){
        header.classList.add('scrolled')

    }
    else{
        header.classList.remove('scrolled')
    }
 }) 

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar ul li a');
    
    // Function to determine if a given URL matches the current page's URL
    function isCurrentPage(url) {
        return window.location.href === url;
    }
    
    navLinks.forEach(function(link) {
        // Add 'active' class to the link if it corresponds to the current page
        if (isCurrentPage(link.href)) {
            link.parentNode.classList.add('active');
        }
    });

    // If no link matches the current page, add 'active' class to the first link (Home)
    if (!document.querySelector('.navbar ul li.active')) {
        document.querySelector('.navbar ul li:first-child').classList.add('active');
    }

    // Event listener for click events on links
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Remove 'active' class from all list items
            navLinks.forEach(function(item) {
                item.parentNode.classList.remove('active');
            });
            
            // Add 'active' class to the clicked list item
            link.parentNode.classList.add('active');
        });
    });
});

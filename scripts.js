
// Toggle mobile navigation menu
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', function() {
    const isOpen = mobileMenu.classList.contains('open');
    if (isOpen) {
        // If closing, set max-height to 0 and remove the open class
        mobileMenu.style.maxHeight = '0';
        mobileMenu.classList.remove('open');
    } else {
        // If opening, calculate the required height and add the open class
        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
        mobileMenu.classList.add('open');
    }
});

// Close menu and scroll smoothly when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        // Only close if the menu is open (on mobile)
        if (mobileMenu.classList.contains('open')) {
            mobileMenu.style.maxHeight = '0';
            mobileMenu.classList.remove('open');
        }
    });
});

// Function to copy email to clipboard (using execCommand for compatibility)
function copyToClipboard(text) {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    
    let success = false;
    try {
        success = document.execCommand('copy');
    } catch (err) {
        console.error('Could not copy text: ', err);
    }
    
    document.body.removeChild(tempInput);

    const msgElement = document.getElementById('copy-message');
    if (success) {
        msgElement.textContent = 'Email copied successfully!';
        msgElement.style.display = 'block';
        msgElement.style.color = 'var(--accent-teal)';
        
        // Hide message after 3 seconds
        setTimeout(() => {
            msgElement.style.display = 'none';
        }, 3000);
    } else {
        msgElement.textContent = 'Copy failed. Please copy manually.';
        msgElement.style.display = 'block';
        msgElement.style.color = '#ef4444';
    }
}

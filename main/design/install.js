// Get the install button element
const installButton = document.querySelector('.install-button button');

// Add a click event listener to the install button
installButton.addEventListener('click', () => {
// Simulate the installation process
installButton.textContent = 'Installing...';
installButton.disabled = true;

// After a short delay, simulate a successful installation
setTimeout(() => {
installButton.textContent = 'Installed';
installButton.style.backgroundColor = '#4CAF50';
}, 2000);
});


// Function to open the app information modal
function openAppInfo(appName) {
var modal = document.getElementById('app-info-modal');
modal.style.display = 'block';
document.getElementById('modal-app-name').textContent = appName;
// Additional code to populate the modal with app-specific information can be added here
}

// Function to close the app information modal
function closeAppInfo() {
document.getElementById('app-info-modal').style.display = 'none';
}

// Function to open the version history modal
function openVersionHistory(appName) {
// Implement the version history functionality here
// For example, you could display a modal with the version history details
console.log('Version history for:', appName);
}

// Event listeners for dynamically generated elements if needed
document.addEventListener('DOMContentLoaded', function() {
var logoContainers = document.querySelectorAll('.icon-container');
logoContainers.forEach(function(container) {
container.addEventListener('click', function(event) {
// Prevent the click event from bubbling up to the install-prompt element
event.stopPropagation();
var appName = this.closest('.install-prompt').querySelector('.app-name').textContent;
openAppInfo(appName);
});
});

// Event listener for the modal close button click
document.querySelector('.modal .close').addEventListener('click', closeAppInfo);

// Event listener to close the modal when clicking outside of it
window.addEventListener('click', (event) => {
if (event.target === document.getElementById('app-info-modal')) {
closeAppInfo();
}
});
});

const searchInput = document.getElementById('search-input');
const categoryDropdown = document.getElementById('category-dropdown');
const installPromptsContainer = document.querySelector('.install-prompts-container');
const organizerBtn = document.getElementById('organizer-btn');
const headerTitle = document.getElementById('header-title'); // Reference to the header title element

// Function to filter prompts based on search input and selected category
function filterPrompts() {
const searchTerm = searchInput.value.toLowerCase();
const selectedCategory = categoryDropdown.value;

installPromptsContainer.querySelectorAll('.install-prompt').forEach((prompt) => {
const appName = prompt.querySelector('.app-name').textContent.toLowerCase();
const category = prompt.dataset.category;

if (
(searchTerm === '' || appName.includes(searchTerm)) &&
(selectedCategory === '' || category === selectedCategory)
) {
prompt.style.display = 'flex';
} else {
prompt.style.display = 'none';
}
});
}

// Event listener for search input changes
searchInput.addEventListener('input', filterPrompts);

// Event listener for category dropdown changes
categoryDropdown.addEventListener('change', (event) => {
filterPrompts();
updateHeaderText();
});

// Function to toggle between grid and row view
function toggleView() {
if (isRowView) {
organizerBtn.textContent = 'View as Grid';
installPromptsContainer.classList.remove('row-view');
installPromptsContainer.style.justifyContent = 'flex-start';
} else {
organizerBtn.textContent = 'View as Rows';
installPromptsContainer.classList.add('row-view');
installPromptsContainer.style.justifyContent = 'center';
}

isRowView = !isRowView;
}

// Event listener for the organizer button click
organizerBtn.addEventListener('click', toggleView);

// Initialize the view mode based on screen width
let isRowView = false;
if (window.innerWidth >= 768) {
organizerBtn.textContent = 'View as Rows';
installPromptsContainer.classList.add('row-view');
installPromptsContainer.style.justifyContent = 'center';
isRowView = true;
}

// Function to update the header title based on the selected category
function updateHeaderText() {
const selectedCategory = categoryDropdown.value;
const headerText = selectedCategory || 'Apps';
headerTitle.textContent = headerText.charAt(0).toUpperCase() + headerText.slice(1);
}

// Initialize the header text
updateHeaderText();

// Event listeners for install buttons
const installButtons = document.querySelectorAll('.install-button button');

installButtons.forEach((button) => {
button.addEventListener('click', (event) => {
// Implement the download increment functionality here
// ... (existing incrementDownloads code)

// The modal is already being opened by the logo click, so this part is commented out
// const appName = event.target.closest('.install-prompt').querySelector('.app-name').textContent;
// openAppInfo(appName);
});
});

// Optional: Add event listeners to dynamically generated elements if needed
document.addEventListener('DOMContentLoaded', function() {
// This part is already covered in the first part of the code for the logo click
});


const searchInput = document.getElementById('search-input');
const categoryDropdown = document.getElementById('category-dropdown');
const installPromptsContainer = document.querySelector('.install-prompts-container');
const organizerBtn = document.getElementById('organizer-btn');
const headerTitle = document.getElementById('header-title'); // Reference to the header title element

let isRowView = false;

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

function updateHeaderText() {
const selectedCategory = categoryDropdown.value;
const headerText = selectedCategory || 'Apps';
headerTitle.textContent = headerText.charAt(0).toUpperCase() + headerText.slice(1);
}

function openVersionHistory(appName) {
// ... (same as before)
}

function incrementDownloads(event) {
// ... (same as before)
}

searchInput.addEventListener('input', filterPrompts);
categoryDropdown.addEventListener('change', (event) => {
filterPrompts();
updateHeaderText();
});

organizerBtn.addEventListener('click', toggleView);

const installButtons = document.querySelectorAll('.install-button button');

installButtons.forEach((button) => {
button.addEventListener('click', (event) => {
incrementDownloads(event);
const appName = event.target.closest('.install-prompt').querySelector('.app-name').textContent;
openVersionHistory(appName);
});
});

// Initialize the view mode
if (window.innerWidth >= 768) {
organizerBtn.textContent = 'View as Rows';
installPromptsContainer.classList.add('row-view');
installPromptsContainer.style.justifyContent = 'center';
isRowView = true;
}

// Initialize the header text
updateHeaderText();

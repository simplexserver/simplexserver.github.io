const searchInput = document.getElementById('search-input');
const categoryDropdown = document.getElementById('category-dropdown');
const installPrompts = document.querySelectorAll('.install-prompt');
const organizerBtn = document.getElementById('organizer-btn');
const installButtons = document.querySelectorAll('.install-button button');

let isRowView = false;

function filterPrompts() {
const searchTerm = searchInput.value.toLowerCase();
const selectedCategory = categoryDropdown.value;

installPrompts.forEach((prompt) => {
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
const installPromptsContainer = document.querySelector('.install-prompts-container');
installPromptsContainer.classList.toggle('row-view');

if (isRowView) {
organizerBtn.textContent = 'View as Grid';
} else {
organizerBtn.textContent = 'View as Rows';
}

isRowView = !isRowView;
}

function incrementDownloads(event) {
const installPrompt = event.target.closest('.install-prompt');
const downloadCount = parseInt(installPrompt.dataset.downloads);
installPrompt.dataset.downloads = downloadCount + 1;
installPrompt.querySelector('.app-downloads').textContent = `${downloadCount + 1}+ downloads`;
}

searchInput.addEventListener('input', filterPrompts);
categoryDropdown.addEventListener('change', filterPrompts);
organizerBtn.addEventListener('click', toggleView);
installButtons.forEach((button) => {
button.addEventListener('click', incrementDownloads);
});

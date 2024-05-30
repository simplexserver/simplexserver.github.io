const searchInput = document.getElementById('search-input');
const categoryDropdown = document.getElementById('category-dropdown');
const installPrompts = document.querySelectorAll('.install-prompt');
const organizerBtn = document.getElementById('organizer-btn');

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

searchInput.addEventListener('input', filterPrompts);
categoryDropdown.addEventListener('change', filterPrompts);

organizerBtn.addEventListener('click', () => {
const installPromptsContainer = document.querySelector('.install-prompts-container');

if (!isRowView) {
installPromptsContainer.classList.add('row-view');
organizerBtn.textContent = 'View as Grid';
} else {
installPromptsContainer.classList.remove('row-view');
organizerBtn.textContent = 'View as Rows';
}

isRowView = !isRowView;
});

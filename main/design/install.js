const searchInput = document.getElementById('search-input');
const categoryDropdown = document.getElementById('category-dropdown');
const installPrompts = document.querySelectorAll('.install-prompt');
const organizerBtn = document.getElementById('organizer-btn');
const postButton = document.querySelector('.post-button');
const postModal = document.querySelector('.post-modal');
const postPasswordInput = document.getElementById('post-password');
const closeButton = postModal.querySelector('.close-button');

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

function showPostModal() {
postModal.style.display = 'block';
}

function closePostModal() {
postModal.style.display = 'none';
}

function submitPost() {
const postPassword = postPasswordInput.value;

// Check if the entered password matches the environment variable
if (postPassword === process.env.BETA_POST_PASSWORD) {
// Allow the post to be submitted
console.log('Post submitted successfully!');
closePostModal();
} else {
alert('Incorrect password. Please try again.');
}
}

searchInput.addEventListener('input', filterPrompts);
categoryDropdown.addEventListener('change', filterPrompts);
organizerBtn.addEventListener('click', toggleView);
postButton.addEventListener('click', showPostModal);
closeButton.addEventListener('click', closePostModal);

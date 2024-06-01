const searchInput = document.getElementById('search-input');
const categoryDropdown = document.getElementById('category-dropdown');
const installPrompts = document.querySelectorAll('.install-prompt');
const organizerBtn = document.getElementById('organizer-btn');
const postButton = document.querySelector('.post-button');
const postModal = document.querySelector('.post-modal');
const postPasswordInput = document.getElementById('post-password');
const closeButton = postModal.querySelector('.close-button');
const postAppName = document.getElementById('app-name');
const postAppCategory = document.getElementById('app-category');
const postAppLink = document.getElementById('app-link');
const postModalButton = document.querySelector('.post-modal-button');

let isRowView = false;

function filterPrompts() {
const searchTerm = searchInput.value.toLowerCase();
const selectedCategory = categoryDropdown.value;

installPrompts.forEach((prompt) => {
const appName = prompt.querySelector('.app-name').textContent.toLowerCase();
const category = prompt.dataset.category;

if ((searchTerm === '' || appName.includes(searchTerm)) && (selectedCategory === '' || category === selectedCategory)) {
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
const appName = postAppName.value;
const appCategory = postAppCategory.value;
const appLink = postAppLink.value;

if (postPassword === process.env.BETA_POST_PASSWORD) {
console.log('Post submitted successfully!');
const newPrompt = document.createElement('div');
newPrompt.classList.add('install-prompt');
newPrompt.dataset.category = appCategory;

newPrompt.innerHTML = `
<div class="icon-container">
<div class="icon"></div>
</div>
<div class="app-info">
<h2 class="app-name ${appCategory}">${appName}</h2>
<p class="app-posted-by">Posted by Admin</p>
</div>
<div class="install-button">
<a href="${appLink}" target="_blank">
<button>Install</button>
</a>
</div>
`;

document.querySelector('.install-prompts-container').appendChild(newPrompt);
filterPrompts();
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
postModalButton.addEventListener('click', submitPost);

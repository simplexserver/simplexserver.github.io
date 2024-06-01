
document.getElementById('postButton').addEventListener('click', function() {
    const appName = document.getElementById('appName').value;
    const appCategory = document.getElementById('appCategory').value;
    const appLink = document.getElementById('appLink').value;

    if (appName && appCategory && appLink) {
        const newPost = document.createElement('div');
        newPost.classList.add('app-prompt');
        newPost.innerHTML = `
            <div class="app-info">
                <span class="new-label">New</span>
                <h3>${appName}</h3>
                <p>${appCategory}</p>
                <a href="${appLink}" target="_blank">Install</a>
            </div>
        `;

        document.getElementById('appPromptsContainer').prepend(newPost);

        // Remove "New" label after 7 days
        setTimeout(() => {
            newPost.querySelector('.new-label').remove();
        }, 7 * 24 * 60 * 60 * 1000); // 7 days in milliseconds
    } else {
        alert('Please fill in all fields.');
    }
});

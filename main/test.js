const modal = document.getElementById("myModal");
const cancelButton = document.getElementById("cancelButton");
const deleteButton = document.getElementById("deleteButton");

// Show the modal
modal.style.display = "block";

cancelButton.onclick = function() {
  modal.style.display = "none";
  window.location.href = "http://your-cancel-link.com";
}

deleteButton.onclick = function() {
  modal.style.display = "none";
  window.location.href = "http://your-delete-link.com";
}

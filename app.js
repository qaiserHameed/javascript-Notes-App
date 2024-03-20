const button = document.getElementById('btn');
const notesContainer = document.querySelector('.notes-container');

// Function to load saved notes from localStorage
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem('notes');
}

// Function to update notes in localStorage
function updateStorage() {
    localStorage.setItem('notes', notesContainer.innerHTML);
}

// Event listener for the button to add a new note
button.addEventListener('click', () => {
    let input = document.createElement('p');
    let img = document.createElement('img');
    input.setAttribute('contenteditable', 'true');
    img.src = 'Assets/delete.webp';
    input.className = 'input-box';
    notesContainer.appendChild(input).appendChild(img);
    updateStorage(); // Update storage when new note is added
});

// Event listener for the notes container to handle delete action
notesContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateStorage(); // Update storage after deleting note
    }
});

// Event listener for editing notes content to update storage
 notesContainer.addEventListener('input', function(e) {
     if (e.target.classList.contains('input-box')) {
         updateStorage(); // Update storage when notes content is edited
    }
});

// // Load saved notes when page loads
showNotes();

// Event listener to handle ENTER key press in notes
document.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
});

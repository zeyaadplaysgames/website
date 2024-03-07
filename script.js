document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get comment text
    var commentText = document.getElementById('commentText').value;
    
    // Create a new comment element
    var commentElement = document.createElement('div');
    commentElement.className = 'comment';
    commentElement.innerHTML = commentText;

    // Append the new comment to the comments section
    document.getElementById('comments').appendChild(commentElement);

    // Clear the comment input field
    document.getElementById('commentText').value = '';
});

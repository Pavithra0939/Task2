const postButton = document.getElementById('postButton');
const postContent = document.getElementById('postContent');
const postList = document.getElementById('postList');
postButton.addEventListener('click', () => {
const content = postContent.value;
if (content.trim() !== '') {
createPost(content);
}
});
async function createPost(content) {
const response = await fetch('http://localhost:3000/posts', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({ content }),
});
if (response.ok) {
postContent.value = '';
fetchPosts();
}
}
async function fetchPosts() {
try {
const response = await fetch('http://localhost:3000/posts');
if (!response.ok) {
throw new Error('Error fetching posts');
}
const data = await response.json();
displayPosts(data);
} catch (error) {
console.error(error);
} }
function displayPosts(postsData) {
postList.innerHTML = '';
postsData.forEach(post => {
const postDiv = document.createElement('div');
postDiv.textContent = post.content;
postList.appendChild(postDiv);
});
}
fetchPosts();
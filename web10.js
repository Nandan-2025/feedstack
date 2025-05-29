document.getElementById("username").innerText = "Jane Smith";
document.getElementById("followers").innerText = "250";
document.getElementById("following").innerText = "300";
document.getElementById("posts").innerText = "42";

const postList = document.getElementById("postList");
const newPost = document.createElement("li");
newPost.textContent = "New blog post coming soon!";
postList.appendChild(newPost);



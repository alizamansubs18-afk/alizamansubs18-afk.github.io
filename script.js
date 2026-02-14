function uploadRecipe(e){
  e.preventDefault();

  let title=document.getElementById("title").value;
  let image=document.getElementById("image").value;
  let desc=document.getElementById("desc").value;

  let container=document.getElementById("recipeContainer");

  container.innerHTML+=`
    <div class="card">
      <img src="images/${image}">
      <h3>${title}</h3>
      <button onclick="viewRecipe('${title}','${image}','${desc}')">View</button>
      <button onclick="removeRecipe(this)" class="danger">Remove</button>
    </div>
  `;
}

function removeRecipe(btn){
  btn.parentElement.remove();
}

function viewRecipe(title,image,desc){
  localStorage.setItem("title",title);
  localStorage.setItem("image",image);
  localStorage.setItem("desc",desc);
  window.location.href="recipe.html";
}

let items = JSON.parse(localStorage.getItem("items")) || [];

function displayItems() {
  const list = document.getElementById("itemList");
  list.innerHTML = "";

  items.forEach((item, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      <strong>${item.title}</strong><br>
      ${item.category} | ${item.status}
      <br>
      <button onclick="deleteItem(${index})">Delete</button>
    `;
    list.appendChild(li);
  });
}

function addItem() {
  const title = document.getElementById("title").value;
  const category = document.getElementById("category").value;
  const status = document.getElementById("status").value;

  if (title === "" || category === "") {
    alert("Please fill all fields!");
    return;
  }

  items.push({ title, category, status });
  localStorage.setItem("items", JSON.stringify(items));

  document.getElementById("title").value = "";
  document.getElementById("category").value = "";

  displayItems();
}

function deleteItem(index) {
  items.splice(index, 1);
  localStorage.setItem("items", JSON.stringify(items));
  displayItems();
}

displayItems();

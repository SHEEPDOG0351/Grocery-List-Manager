addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let search = document.getElementsByClassName("SearchBar");
    let list = document.getElementsByClassName("list");
    let itemSearched = search[0].value;
    let listColumn = document.createElement("li");
    let listItem = (listColumn.innerHTML = itemSearched);
    list[0].append(listItem);
  }
});

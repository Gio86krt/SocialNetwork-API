// async function getPosts() {
//   const result = await fetch("http://localhost:3000/dummy_database");
//   console.log(result, "result");
//   const data = await result.json();
//   console.log(data, "data");

//   const keys = Object.keys(data);

//   const parent = document.querySelector(".container");

//   keys.forEach((key) => {
//     const divRow = document.createElement("div");
//     const divName = document.createElement("div");
//     const divContent = document.createElement("div");

//     divRow.setAttribute("class", "row");
//     divName.setAttribute("class", "col-6 div_author");
//     divContent.setAttribute("class", "col-6 div_content");

//     divName.textContent = data[key].author;
//     divContent.textContent = data[key].content;

//     divRow.appendChild(divName).appendChild(divContent);
//     parent.appendChild(divRow);
//   });
// }

// window.onload = getPosts();

console.log("test");

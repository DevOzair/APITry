// fetch("https://reqres.in/api/users/", {
//   headers: {
//     "Content-Type": "application/json",
//   },
//   method: "POST",
//   body: JSON.stringify({ name: "RandoMc" }),
// }).then((response) => {
//   if (response.ok) {
//     response.json().then((data) => console.log(data));
//   } else {
//     console.log("Request Error");
//   }
// });

//if method post:
//- specify the content type as application/json
//- specify the body as a json object
//- stringify the body object with JSON.stringify()

//practice.
let cat = "films";

fetch(`https://ghibliapi.herokuapp.com/${cat}`)
  .then((res) => res.json())
  .then((obj) => {
    obj.forEach((element) => {
      let item = document.createElement("div");
      item.className = "item";

      let cell = document.createElement("div");
      cell.className = "cell";
      cell.innerHTML = element.title;
      item.appendChild(cell);

      let cell2 = document.createElement("div");
      cell2.className = "cell";
      cell2.innerHTML = `${element.rt_score}%`;
      item.appendChild(cell2);

      document.body.appendChild(item);
      //console.log(`${element.title} -  ${element.rt_score}%`);
    });
  });
//- an object is returned by res.json()
//- an array called data is within the returned object
//- the above 2 statement is actually incorrect
//- all depends on the structure of the data

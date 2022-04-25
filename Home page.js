let apiUrl = 'https://sch-finder-api.herokuapp.com'
//var schoolsList = document.querySelector('container')
var schoolsList = document.getElementById('container')
//var form = document.getElementById('container')

function fetchAllSchools() {
  fetch(`${apiUrl}/api/schools`)
  .then(response => response.json())
  .then(data => renderData(data));
}

fetchAllSchools();

function renderData(schools) {
  //console.log(schools)
  let list = schools
    .map(
      (school, i) =>
        `<div class="col">
        <div class="card shadow-sm">
          <img class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" src = "file:///C:/Users/Taiwo/Desktop/Blog.jpg"></img>

          <div class="card-body">
            <li class = "university">${school.name}</li>
            <li class = "country">${school.country}</li>
            <li class = "city">${school.city}</li>
            <li class = "country">${school.address}</li>
            <li class = "country">${school.type}</li>
            <li class = "country">${school.tuition_fee_range}</li>
            <li class = "country">${school.ownership}</li>
            <li class = "country">${school.founded}</li>
            <li class = "country">${school.total_enrollment}</li>
            <li class="card-text">${school.short_desc}</li>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">More info</button>
                <button type="submit" onclick = "window.localStorage.setItem("name", ${school.name})" class="btn btn-sm btn-outline-secondary"><a href="Update a school.html">Update</a></button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Delete</button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
        </div>`
    )
    .join(" ");

  schoolsList.innerHTML = list;
}

// function reDirect() {
//   window.location.href = "file:///C:/UsersTaiwoDocuments%08ootstrap%08ootstrap-5.1.3-examplesheadersSign%20up.html"
// }

// function saveId(name) {
//   console.log(name)
//   window.localStorage.setItem("name", `${school.name}`);
// }

// function getToken() {
//   return window.localStorage.getItem("id");
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   saveId(id);    
// })
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
          <img class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Student_icon.svg/1024px-Student_icon.svg.png"></img>

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
                <button type="button" onclick = "getASchool(${school.id})" class="btn btn-sm btn-outline-secondary"> <a href="getASchool.html">More info</a></button>
                <button type="submit" class="btn btn-sm btn-outline-secondary"><a href="updateASchool.html">Update</a></button>
                <button type="button" onclick = "deleteASchool(${school.id})" class="btn btn-sm btn-outline-secondary">Delete</button>
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

function getASchool(id) {
  fetch(`${apiUrl}/api/schools/${id}`)
  .then(response => response.json())
  .then(data => bringData(data));
}

//getASchool();

function bringData(schools) {
  //console.log(schools)
  let list = schools
    .map(
      (school, i) =>
        `<div class="col">
        <div class="card shadow-sm">
          <img class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Student_icon.svg/1024px-Student_icon.svg.png"></img>

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
                <button type="submit" class="btn btn-sm btn-outline-secondary"><a href="Update a school.html">Update</a></button>
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


const deleteASchool = (id) => {
  const token = window.localStorage.getItem('token')
    console.log(token)
    fetch(`${apiUrl}/api/schools/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": `Bearer ${token}`
      },
    })
  .then((responseJson) => {
    console.log("School Deleted Successfully")
    fetchAllSchools();
  })
}
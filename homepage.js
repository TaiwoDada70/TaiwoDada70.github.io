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
          <img class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" src = "http://www.universityaffairs.ca/wp-content/uploads/2017/07/FNUniv.jpg"></img>

          <div class="card-body">
            <li class = "university">${school.name}</li>
            ${school.name} is located in ${school.address}, ${school.city}, ${school.country}.
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <a href="school.html?id=${school.id}" class="btn btn-sm btn-outline-secondary">More info</a>
                <a href="updateASchool.html?id=${school.id}" class="btn btn-sm btn-outline-secondary">Update</a>
                <button type="button" onclick = "deleteASchool(${school.id})" class="btn btn-sm btn-outline-secondary">Delete</button>
              </div>
            </div>
          </div>
        </div>
        </div>`
    )
    .join(" ");

  schoolsList.innerHTML = list;
}

{/* <li class = "country">${school.country}</li>
            <li class = "city">${school.city}</li>
            <li class = "country">${school.address}</li>
            <li class = "country">${school.type}</li>
            <li class = "country">${school.tuition_fee_range}</li>
            <li class = "country">${school.ownership}</li>
            <li class = "country">${school.founded}</li>
            <li class = "country">${school.total_enrollment}</li>
            <li class="card-text">${school.short_desc}</li> */}

            //<small class="text-muted">9 mins</small>

const deleteASchool = (id) => {
  const token = window.localStorage.getItem('token')
  console.log(id)
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

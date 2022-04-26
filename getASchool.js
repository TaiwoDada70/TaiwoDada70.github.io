let apiUrl = 'https://sch-finder-api.herokuapp.com'
//var schoolsList = document.querySelector('container')
var schoolsList = document.getElementById('container')
//var form = document.getElementById('container')

function getASchool(id) {
  fetch(`${apiUrl}/api/schools/${id}`)
  .then(response => response.json())
  .then(data => renderData(data));
}

getASchool();

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


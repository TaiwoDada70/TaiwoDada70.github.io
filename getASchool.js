let apiUrl = 'https://sch-finder-api.herokuapp.com'
//var schoolsList = document.querySelector('container')
var schoolsList = document.getElementById('container')
//var form = document.getElementById('container')

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function getASchool() {
    const id = getUrlParameter('id')
    console.log(id)
    fetch(`${apiUrl}/api/schools/${id}`)
        .then(response => response.json())
        .then(data => bringData(data));
}

getASchool();

function bringData(school) {
    console.log(school)
    let list = `<div class="col">
          <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" src = "http://www.universityaffairs.ca/wp-content/uploads/2017/07/FNUniv.jpg"></img>
  
            <div class="card-body">
              <li class = "university">${school.name}</li>
              ${school.name} is located in ${school.address}, ${school.city}, ${school.country}. It is a ${school.type} and has a tuition fee range of ${school.tuition_fee_range}. It was founded in ${school.founded} and has a estimated total enrollment of ${school.total_enrollment} students. Here's a brief description: ${school.short_desc}
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <a href="updateASchool.html?id=${school.id}" class="btn btn-sm btn-outline-secondary">Update</a>
                <button type="button" onclick = "deleteASchool(${school.id})" class="btn btn-sm btn-outline-secondary">Delete</button>
                </div>
              </div>
            </div>
          </div>
          </div>`

    schoolsList.innerHTML = list;
}

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
      reDirect();
    })
  }

  function reDirect() {
    window.location.href = "schools.html"
}

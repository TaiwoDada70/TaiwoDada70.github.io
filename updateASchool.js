let apiUrl = 'https://sch-finder-api.herokuapp.com'
// var name = document.getElementById('name').value
// var country = document.getElementById('country').value
// var city = document.getElementById('city').value
// var address = document.getElementById('address').value
// var type = document.getElementById('type').value
// var tuition_fee_range = document.getElementById('tuition_fee_range').value
// var ownership = document.getElementById('ownership').value
// var founded = document.getElementById('founded').value
// var total_enrollment = document.getElementById('total_enrollment').value
// var short_desc = document.getElementById('short_desc').value
// var id = document.getElementById('id')
var form = document.getElementById('container')
const button = document.getElementById("btn-submit");
var schoolsList = document.getElementById('container')

function updateASchool(newData) {
    const token = window.localStorage.getItem('token')
    console.log(token)
    const id = getUrlParameter('id')
    console.log(id)
    fetch(`${apiUrl}/api/schools/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": `Bearer ${token}`
      },
      body:JSON.stringify(newData)
    })
      .then((response) => {if (response.ok) {
      return response.json()
      }
      throw new Error ("Something went wrong")
    })    
    .then((responseJson) => {
      reDirect()
      console.log(newData)
    })
    .catch((error) => {
    console.log(error)
    })
  }

form.addEventListener("submit", (e) => {
    e.preventDefault();
      
    let newData = {
        name : document.getElementById('name').value,
        country : document.getElementById('country').value,
        city : document.getElementById('city').value,
        address : document.getElementById('address').value,
        type : document.getElementById('type').value,
        tuition_fee_range : document.getElementById('tuition_fee_range').value,
        ownership : document.getElementById('ownership').value,
        founded : document.getElementById('founded').value,
        total_enrollment : document.getElementById('total_enrollment').value,
        short_desc : document.getElementById('short_desc').value
    }
      updateASchool(newData);    
})

function reDirect() {
    window.location.href = "schools.html"
    console.log("school updated successfully")
}

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
  let list = `<form id = "container">
  <h1 class="update">Update a school</h1>
  <input type = "text" class = "input-box" placeholder = "${school.name}" id = "name"> 
  <input type = "text" class = "input-box" placeholder = "${school.country}" id = "country">
  <input type = "text" class = "input-box" placeholder = "${school.city}" id = "city">
  <input type = "text" class = "input-box" placeholder = "${school.address}" id = "address">
  <input type = "text" class = "input-box" placeholder = "${school.type}" id = "type">
  <input type = "text" class = "input-box" placeholder = "${school.tuition_fee_range}" id = "tuition_fee_range">
  <input type = "text" class = "input-box" placeholder = "${school.ownership}" id = "ownership">
  <input type = "text" class = "input-box" placeholder = "${school.founded}" id = "founded">
  <input type = "text" class = "input-box" placeholder = "${school.total_enrollment}" id = "total_enrollment">
  <textarea class = "input-box" id="short_desc" placeholder="${school.short_desc}"></textarea>
  <button id = "btn_submit" type="submit" class = "sign-btn">Update</button>
  </form>`

  schoolsList.innerHTML = list;
}
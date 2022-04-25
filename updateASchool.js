let apiUrl = 'https://sch-finder-api.herokuapp.com'
var name = document.getElementById('name').value
var country = document.getElementById('country').value
var city = document.getElementById('city').value
var address = document.getElementById('address').value
var type = document.getElementById('type').value
var tuition_fee_range = document.getElementById('tuition_fee_range').value
var ownership = document.getElementById('ownership').value
var founded = document.getElementById('founded').value
var total_enrollment = document.getElementById('total_enrollment').value
var short_desc = document.getElementById('short_desc').value
//var id = document.getElementById('id')
var form = document.getElementById('container')
const button = document.getElementById("btn-submit");

function updateASchool(newData) {
    const token = window.localStorage.getItem('token')
    const id = window.localStorage.getItem(school.id)
    console.log (id)
    console.log(token)
    //console.log(document.getElementById('id'))
    fetch(`${apiUrl}/api/schools/${school.id}`, {
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

//   function addASchool(newData) {
//     fetch(`${apiUrl}/api/schools/add`, {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//         "Authotisation": `Bearer ${token}`
//       },
//       body: JSON.stringify(newData)
//     })
//       .then((response) => response.json())
//       .then((responseJson) => {
//          reDirect()
//     })
// }
    
//     function saveToken(token) {
//       console.log(token)
//       window.localStorage.setItem("token", token);
//   }

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
    window.location.href = "HomepageAfterSignin.html"
}

function saveToken(token) {
    console.log(token)
    window.localStorage.setItem("token", token);
}

// function saveId(identification) {
//     console.log(document.getElementById('id'))
//     window.localStorage.setItem("identication", document.getElementById('id'))
// }

// saveId(identification)
  
  function getToken() {
    return window.localStorage.getItem("id");
}
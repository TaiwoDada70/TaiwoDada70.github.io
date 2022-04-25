let apiUrl = 'https://sch-finder-api.herokuapp.com'
var firstName = document.getElementById('firstName').value
var lastName = document.getElementById('lastName').value
var email = document.getElementById('email').value
var password = document.getElementById('password').value
var confirmPassword = document.getElementById('confirmPassword').value
var form = document.getElementById('container')
const button = document.getElementById("btn-submit");

// function signUp(data) {
//     fetch(`${apiUrl}/api/users/signup`, {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8"
//       },
//     })
//       .then((response) => response.json())
//       .then((json) => saveToken(json.token));
// }

function signUp(data) {
  fetch(`${apiUrl}/api/users/signup`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
  })
    .then((response) => {if (response.ok) {
    return response.json()
    .then((json) => saveToken(json.token))
    }
    throw new Error ("Something went wrong")
  })    
  .then((responseJson) => {
    reDirect()
  })
  .catch((error) => {
  console.log(error)
  })
}
  
  function saveToken(token) {
    console.log(token)
    window.localStorage.setItem("token", token);
}
  
  function getToken() {
    return window.localStorage.getItem("token");
}
  
form.addEventListener("submit", (e) => {
e.preventDefault();
  
let data = {
firstName: document.getElementById('firstName').value,
lastName: document.getElementById('lastName').value,
email: document.getElementById('email').value,
password: document.getElementById('password').value,
confirmPassword: document.getElementById('confirmPassword').value,
}
  signUp(data);
  
})

function reDirect() {
  window.location.href = "Sign In.html"
}


// const token = getToken()
// console.log(token)
//onclick = "reDirect()"


//Sign In Code


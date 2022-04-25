let apiUrl = 'https://sch-finder-api.herokuapp.com'
var email = document.getElementById('email').value
var password = document.getElementById('password').value
var form = document.getElementById('container')

function signIn(userData) {
    fetch(`${apiUrl}/api/users/signin`, {
      method: "POST",
      body: JSON.stringify(userData),
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
      reDirectSignIn()
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

  function reDirectSignIn() {
    window.location.href = "HomepageAfterSignin.html"
  }
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
      
    let userData = {
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
    }
      signIn(userData);
    })
const btn = document.querySelector('#btn');
const image = document.querySelector('#avatar');
const fullName = document.querySelector('#fullname');
const userName = document.querySelector('#username');
const email = document.querySelector('#email');
const city = document.querySelector('#city');

btn.addEventListener('click', function() {
  let url = "https://randomuser.me/api"
  
  fetch(url)
  .then(handleErrors) 
  .then(parseJSON)
  .then(updateProfile)
  .catch(displayErrors)
})

const handleErrors = (res) => {
  if (!res.ok) {
    throw Error(res.status);
  }
  return res;
}

const parseJSON = (res) => {
  return res.json().then((data) => {
    return data.results[0];
  })
}

const updateProfile = (data) => {

  let fullname = data.name.first + " " + data.name.last;
  fullName.textContent = fullname
  console.log(data);

  let username = data.login.username;
  userName.textContent = username

  let userEmail = data.email
  email.textContent = userEmail

  let userCity = data.location.city;
  city.textContent = userCity

  image.src = data.picture.large;
}

const displayErrors = (err) => {
  console.log(err)
}



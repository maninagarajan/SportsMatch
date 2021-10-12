// Routing Handler

const routes = {
  '/': login,
  '/login': login,
  '/home': home,
  '/players': players
};

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  )
  rootDiv.innerHTML = routes[pathname]
}

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname]
}


// Login Handler

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  const username = loginForm.username.value;
  const password = loginForm.password.value;

  console.log(username, password);


  if (username.toLowerCase() === "admin" && password.toLowerCase() === "admin@123") {
    // alert("You have successfully logged in.");
    loginErrorMsg.style.opacity = 0;
    onNavigate('/home');
  } else {
    loginErrorMsg.style.opacity = 1;
    console.log('Error');
  }
});



// Home screen eventHandler

const addForm = document.getElementById("player-add-form");
const addButton = document.getElementById("player-add-form-submit");
const closeModal = document.getElementById("close-modal");
const openModal = document.getElementById("add-player");
const modalContainer = document.getElementsByClassName("modal-container")[0];

document.getElementsByTagName('span')[0].innerHTML = JSON.parse(localStorage.getItem('Players'))?.length || 0;

addButton.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(addForm.playerName.value, addForm.location.value, addForm.sports.value, addForm.playerPicture.value);

  let newPlayer = {
    name: addForm.playerName.value,
    location: addForm.location.value,
    sports: addForm.sports.value,
    profilePic: addForm.playerPicture.value
  };

  let playersList = JSON.parse(localStorage.getItem('Players')) || [];

  playersList.push(newPlayer);
  console.log(playersList);
  localStorage.setItem('Players', JSON.stringify(playersList));

  document.getElementsByTagName('span')[0].innerHTML = playersList.length;
  modalContainer.style.display = 'none';
});


openModal.addEventListener("click", (e) => {
  e.preventDefault();
  modalContainer.style.display = 'block';
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  modalContainer.style.display = 'none';
});



// Players List screen eventHandler

const savedPlayers = JSON.parse(localStorage.getItem('Players'));

const columnHeader = ['Profile', 'Name','Sports', 'Location'];
const columnData = ['profilePic','name','sports','location'];


// Create a table element
var table = document.createElement("table");

var tr = table.insertRow(-1);

for (var i = 0; i < columnHeader.length; i++) {
  var theader = document.createElement("th");
  theader.innerHTML = columnHeader[i];
  tr.appendChild(theader);
}

for (var i = 0; i < savedPlayers.length; i++) {
  // Create new rows
  trow = table.insertRow(-1);
  for (var j = 0; j < columnData.length; j++) {
    var cell = trow.insertCell(-1);
    if(j === 0){
      let profileImage = `<img src="./src/profiles/${savedPlayers[i][columnData[j]]}" id="profile-img"/>`
      cell.innerHTML = profileImage;
    }
    else {
     cell.innerHTML = savedPlayers[i][columnData[j]];
    }
  }
}

// Add the newly created table containing json data
var el = document.getElementById("playersTable");
el.innerHTML = "";
el.appendChild(table);



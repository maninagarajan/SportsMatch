let home = `
<!DOCTYPE html>
<html>
<head>
  <script defer src="app.js"></script>
  <link rel="stylesheet" href="home.css">
</head>
<body>
    <div class="navbar">
      <a class="navtext" href="#" onclick="onNavigate('/login'); return false;">Logout</a>
    </div>

    <div class="home-container">
      <h2>Welcome Admin!</h2>
      <div class="home-tile">
        <p>No of Players</p>
        <span style="font-size: 2.8rem;"></span>
      </div>

      <div class="home-tile" style="background-color: #f3aeae;" id="add-player">
        <p>Add a Player</p>
      </div>

      <div class="home-tile" style="background-color: #a2d7ed;" onclick="onNavigate('/players'); return false;">
        <p>View Players List</p>
      </div>


      <div class="modal-container">
        <div class="player-form">
          <img src="./src/cancel.png" id="close-modal"/>
          <form id="player-add-form">
            <label for="playerName"><b>Player Name</b></label>
            <input type="text" name="playerName" id="playerName-field" class="player-add-form-field" placeholder="Enter Player Name" required>
            
            <label for="location"><b>Location</b></label>
            <input type="text" name="location" id="location-field" class="player-add-form-field" placeholder="Location" required>

            <label for="sports"><b>Choose Favorite Sport</b></label>
            <select name="sports" id="sports" class="player-add-form-field">
              <option value="cricket">Cricket</option>
              <option value="basketball">Basketball</option>
              <option value="football">Football</option>
              <option value="badminton">Badminton</option>
            </select>

            <label for="playerPicture"><b>Choose Player Image</b></label>
            <input type="file" id="playerPicture" name="playerPicture" class="player-add-form-field">

            <input type="submit" value="Add Player" id="player-add-form-submit">

          </form>
        </div>
      </div>
    </div>
  <script src="app.js"></script>
</body>
</html>
`
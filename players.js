let players = `
<!DOCTYPE html>
<html>
<head>
  <script defer src="app.js"></script>
  <link rel="stylesheet" href="players.css">
</head>
<body>
  <div class="navbar">
    <a class="navtext" href="#" onclick="onNavigate('/home'); return false;">Home</a>
    <a class="navtext" href="#" onclick="onNavigate('/login'); return false;">Logout</a>
  </div>

  <div class="left-container">
    <h2>List of Players</h2>
    <table id="playersTable" align = "left" border="1px"></table>
  </div>
  <div class="left-container">
    <h2>Your Matches</h2>
  </div>
  <script src="app.js"></script>
</body>
</html>
`
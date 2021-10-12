let login = `
<!DOCTYPE html>
<html>
<head>
  <script defer src="app.js"></script>
  <link rel="stylesheet" href="login.css">
</head>
<body>
  <div id="container">
    <img src="./src/login-bg.jpg" id="img-background"/>
    <form id="login-form">
    <label for="username"><b>Username</b></label>
      <input type="text" name="username" id="username-field" class="login-form-field" placeholder="Enter Username" required>
    <label for="password"><b>Password</b></label>

      <input type="password" name="password" id="password-field" class="login-form-field" placeholder="Password" required>

      <p id="login-error-msg">Invalid username and/or password</p>

      <input type="submit" value="Login" id="login-form-submit">

    </form>
  </div>

</body>
</html>
`
<html>
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    <h1>Message Encoder</h1>
    <p>This simple page lets you securely encrypt a message with a password. Your message will not leave your computer, and will not be sent over the Internet.</p>
    <p>Once it's encoded, you'll be able to share your message with anyone else who has the password.</p>
    <textarea id="message" rows="6" cols="60"></textarea>
    <br>
    <button id="encrypt">Lock Down</button>
    <button id="decrypt">Unlock</button>

    <script src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/aes.js"></script>

    <script>
      var encoder = {
        setMessage: function() {
          setMessage = document.getElementById("message").value;

        },
        getPassword: function() {
          this.password = prompt("Enter password");

        },
        setUrl: function() {
          this.url = "file://" + window.location.pathname + "#" + this.encrypt();

        },
        replaceMessageWithUrl: function () {
          document.getElementById("message").value = this.url;

        },
        encrypt: function() {
          vault = CryptoJS.AES.encrypt(this.message, this.password)
          console.log("Verified: " +
            CryptoJS.AES.decrypt(vault, this.password).toString(CryptoJS.enc.Utf8))
          return vault
        },
        protect: function() {
          this.setMessage()
          this.getPassword()
          this.setUrl()
          this.replaceMessageWithUrl()
        }
      }

        document.getElementById("encrypt").onclick = function() {
          encoder.protect();
        }

        document.getElementById("decrypt").onclick = function() {
          var sauce = window.location.hash.substring(1);

          if (sauce != ""){
            var password = prompt ("Whats the sauce.")

            if (password != null) {
              var message = CryptoJS.AES.decrypt(sauce, password).toString(CryptoJS.enc.Utf8)
              alert(message)
            }
          }
        }

    </script>
  </body>
</html>

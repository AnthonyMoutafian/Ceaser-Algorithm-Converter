var express = require("express");
var router = express.Router();

function caesarEncrypt(text, shift = 3) {
  return text
    .split("")
    .map((char) => {
      let code = char.charCodeAt(0);

      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }

      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }

      return char;
    })
    .join("");
}

router.post("/text-to-algo", (req, res) => {
  const text = req.body.text;
  const result = caesarEncrypt(text);

  res.render("index", { result });
});

module.exports = router;

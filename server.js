const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


let app = express();

app.use(bodyParser.json());
app.set('port', process.env.PORT || 8080);
app.use(cors());
app.use(express.static("dist"));
app.listen(app.get('port'), () => {
  console.log("You're a wizard, Harry. I'm a what? Yes, a wizard, on port", app.get('port'));
});

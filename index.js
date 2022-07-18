const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const mongoose = require('mongoose');

const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api', routes);
const localUrl = "mongodb://localhost:27017/superIdeaDB";
mongoose.connect(localUrl, {useNewUrlParser: true, useUnifiedTopology: true}
).then(() => {
    app.listen(5000, () => {
        console.log('application listen on port 5000');
    })
});





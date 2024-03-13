var express = require('express');
var application = express();

var bodyparser = require('body-parser');



entity = () => {
    var post = require('./Models/Post');
    var category = require('./Models/Category');

    post.sync({ force: true });
    category.sync({ force: true });
}

middleware = () => {
    application.use(bodyparser.json());
    application.use(bodyparser.urlencoded({ extended: true }));
    //router start
    var categoryRouter = require('./Router/Category');
    var postRouter = require('./Router/Post');
    //router end
    application.use(categoryRouter);
    application.use(postRouter);
}

(() => {
    entity();
    middleware();
})();

application.get('', (req, res) => {
    res.send("hello");
})
application.listen(3000, () => {

    console.log("3000 dinlemede");
})
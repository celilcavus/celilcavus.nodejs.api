const category = require("./Category");
const post = require("./Post");

// has-one
post.hasOne(director);
category.belongsTo(post);
// has-one
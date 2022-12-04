const express = require('express');
const app = express();
const static = express.static(__dirname + '/public');
const configRoutes = require('./routes');
const session = require('express-session');
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars');
const bodyParser = require("body-parser");
const data = require('../cs546_group13_final_project-master/data/');
const Puzzle = data.puzzle;
const Action = data.action;
const Racing = data.racing;
const Strategy = data.strategy;
const Sports = data.sports;
const reviews = data.reviews;
const users = data.users;

const handlebarsInstance = exphbs.create({
  defaultLayout: 'main',
  // Specify helpers which are only registered on this instance.
  helpers: {
    asJSON: (obj, spacing) => {
      if (typeof spacing === 'number')
        return new Handlebars.SafeString(JSON.stringify(obj, null, spacing));

      return new Handlebars.SafeString(JSON.stringify(obj));
    }
  },
  partialsDir: ['views/templates/partials/']
});

Handlebars.registerHelper('ifFirst', function (index, options) {
  if (index == 0) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }

});
Handlebars.registerHelper('ifBusiness', function (user, options) {
  if (user.roleId == 2) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }

});
Handlebars.registerHelper('ifAdmin', function (user, options) {
  if (user.roleId == 1) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});
Handlebars.registerHelper('ifSelected', function (v1, v2, options) {
  if (v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});
Handlebars.registerHelper('ifMSelected', function (v1, v2, options) {
  if (v1.includes(v2)) {
    return options.fn(this);
  }
  return options.inverse(this);
});

app.use('/public', static);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', handlebarsInstance.engine);
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(
  session({
    name: "AuthCookie",
    secret: 'CS546BGroup13',
    resave: false,
    saveUninitialized: true
  })
);

configRoutes(app);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log('Your routes will be running on http://localhost:3000');
});

// async function main() {
//   let datas = await users.getAllUsers();
//   const u11_id = datas[datas.length - 1]._id;
//   datas = await Puzzle.getAllPuzzles();
//   const p11_id = datas[datas.length - 1]._id;
//   try {
//     const RE1 = await reviews.createReview(
//       /*user id*/u11_id,
//       /*game id*/ p11_id,
//       /*title*/ 'Good world',
//       /*description*/ "The Talos Principle is a good world to get lost in. The strong, heady philosophical focus isn't as integrated into the puzzles as it initially suggested, but for those of you who like to flex your minds by action rather than heavy reading or contemplation, the puzzle sections deliver just as well. Much like Portal, The Talos Principle makes you feel smart just by playing it, as the bulk of the puzzles hit that sweet spot between too easy and near-impossible.",
//       /*rating*/ '4',
//       /*date od review*/ '12/01/2022'
//     );
  // } catch (error) {
  //   console.log(error)
  // }


  
// }

// main()
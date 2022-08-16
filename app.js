const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const error404 = require('./controllers/404page');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

/*
app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});
*/

// write above code using controller
app.use(error404.get404);

app.listen(3000);

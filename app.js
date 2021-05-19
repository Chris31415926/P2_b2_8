const express = require('express');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();


// To support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// To parse cookies from the HTTP Request
app.use(cookieParser());


app.engine('html', exphbs({
    extname: '.html'
}));

app.set('view engine', 'html');


app.use((req, res, next) => {
    // Get auth token from the cookies
    const authToken = req.cookies['AuthToken'];

    // Inject the user to the request
    req.user = authTokens[authToken];

    next();
});

// Our requests handlers will be implemented here...
app.get('/', function (req, res) {
    res.render('home');
});


app.get('/flagUK.png', function(req, res) {
    res.sendFile(path.join(__dirname, '/flagUK.png'));
});
app.get('/flagDK.jpg', function(req, res) {
    res.sendFile(path.join(__dirname, '/flagDK.jpg'));
});
app.get('/baggrund.jpg', function(req, res) {
    res.sendFile(path.join(__dirname, '/baggrund.jpg'));
});


app.get('/frontpage.html', function(req, res) {
    res.sendFile(path.join(__dirname, '/frontpage.html'));
});
app.get('/startside.html', function(req, res) {
    res.sendFile(path.join(__dirname, '/startside.html'));
});

app.get('/Doc_login.html', function(req, res) {
    res.sendFile(path.join(__dirname, '/Doc_login.html'));
});
app.get('/Doc_login_dk.html', function(req, res) {
    res.sendFile(path.join(__dirname, '/Doc_login_dk.html'));
});

app.get('/infoUK.html', function(req, res) {
    res.sendFile(path.join(__dirname, '/infoUK.html'));
});
app.get('/infoDK.html', function(req, res) {
    res.sendFile(path.join(__dirname, '/infoDK.html'));
});


app.get('/Doc_info_page.html', function(req, res) {
    res.sendFile(path.join(__dirname, '/Doc_info_page.html'));
});
app.get('/Doc_info_side.html', function(req, res) {
    res.sendFile(path.join(__dirname, '/Doc_info_side.html'));
});


app.get('/register', (req, res) => {
    res.render('register');
});

const crypto = require('crypto');

const getHashedPassword = (password) => {
    const sha256 = crypto.createHash('sha256');
    const hash = sha256.update(password).digest('base64');
    return hash;
}

const users = [
    // This user is added to the array to avoid creating a new user on each restart
    {
        userName: 'johndoe',
        // This is the SHA256 hash for value of `password`
        password: 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg='
    }
];

app.post('/register', (req, res) => {
    const { userName, password, confirmPassword } = req.body;

    // Check if the password and confirm password fields match
    if (password === confirmPassword) {

        // Check if user with the same email is also registered
        if (users.find(user => user.userName === userName)) {

            res.render('register', {
                message: 'User already registered.',
                messageClass: 'alert-danger'
            });

            return;
        }

        const hashedPassword = getHashedPassword(password);

        // Store user into the database if you are using one
        users.push({
            userName,
            password: hashedPassword
        });

        res.render('login', {
            message: 'Registration Complete. Please login to continue.',
            messageClass: 'alert-success'
        });
    } else {
        res.render('register', {
            message: 'Password does not match.',
            messageClass: 'alert-danger'
        });
    }
});


app.get('/login', (req, res) => {
    res.render('login');
});

const generateAuthToken = () => {
    return crypto.randomBytes(30).toString('hex');
}

// This will hold the users and authToken related to users
const authTokens = {};

app.post('/login', (req, res) => {
    const { userName, password } = req.body;
    const hashedPassword = getHashedPassword(password);

    const user = users.find(u => {
        return u.userName === userName && hashedPassword === u.password
    });

    if (user) {
        const authToken = generateAuthToken();

        // Store authentication token
        authTokens[authToken] = user;

        // Setting the auth token in cookies
        res.cookie('AuthToken', authToken);

        // Redirect user to the protected page
        res.redirect('/protected');
    } else {
        res.render('login', {
            message: 'Invalid username or password',
            messageClass: 'alert-danger'
        });
    }
});


app.get('/protected', (req, res) => {
    if (req.user) {
        res.render('protected');
    } else {
        res.render('login', {
            message: 'Please login to continue',
            messageClass: 'alert-danger'
        });
    }
});


app.get('/Questionaire.html', function(req, res) {
    res.sendFile(path.join(__dirname, '/questionaire.html'));
});

app.get('/Questionaire.js', function(req, res) {
    res.sendFile(path.join(__dirname, '/Questionaire.js'));
});


app.get('/end.html', function(req, res) {
    res.sendFile(path.join(__dirname, '/end.html'));
});




app.listen('3000', () => {
    console.log("server started");
});

require('dotenv').config();
const express = require('express'),
    userCtrl = require('./controllers/user'),
    tasks = require('./controllers/tasks.js');
const session = require('express-session');
const massive = require('massive');

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;

const app = express();
app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 604800000
    }
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false,
    }
}).then(dbInstance => {
    app.set('db', dbInstance);
    console.log('Database Connected!')
})

app.post('/api/auth/login', userCtrl.login);
app.post('/api/auth/register', userCtrl.register);
app.get('/api/tasks/tasks', tasks.getTasks);
app.get('/api/tasks/activeTasks', tasks.getActiveTasks);
app.get('/api/tasks/closedTasks', tasks.getClosedTasks);
app.post('/api/tasks/tasks', tasks.createTask);
app.delete('/api/tasks/delete/:task_key', tasks.deleteTask);
app.patch('/api/tasks/update/:task_key', tasks.editTask);
app.patch('/api/tasks/complete/:task_key', tasks.completeTask);
app.patch('/api/tasks/reopen/:task_key', tasks.reopenTask);

app.listen(SERVER_PORT, () => console.log(`running on ${SERVER_PORT}`))
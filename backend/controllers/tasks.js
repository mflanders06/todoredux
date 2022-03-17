module.exports = {
    getTasks: async (req, res) => {

        const db = req.app.get('db');

        const tasklist = await db.tasks.tasklist();
        
        return res.status(200).send(tasklist);
    },

    getActiveTasks: async (req, res) => {

        const db = req.app.get('db');

        const tasklist = await db.tasks.activeTaskList();
        
        return res.status(200).send(tasklist);
    },

    getClosedTasks: async (req, res) => {

        const db = req.app.get('db');

        const tasklist = await db.tasks.closedTaskList();
        
        return res.status(200).send(tasklist);
    },

    createTask: async (req, res) => {
        const db = req.app.get('db');
        const {titleInput, taskInput, dueDateInput} = req.body;

        await db.tasks.addTask(titleInput, taskInput, dueDateInput)
            .then(() => {
                res.status(200).send('task created');
            })
            .catch((e) => {
                console.log(e);
            });
    },

    deleteTask: async (req, res) => {
        
        const db = req.app.get('db');
        const {task_key} = req.params;

        await db.tasks.delTask(task_key)
            .then(() => {
                //console.log('hit')
                res.writeHead(200);
                res.end();
            })
            .catch((error) => {
                console.log(error)
            })
    },

    editTask: async (req, res) => {
        const db = req.app.get('db');
        const {task_key} = req.params;
        const {titleUpdate, taskUpdate, dueDateInput} = req.body;

        await db.tasks.updateTask(titleUpdate, taskUpdate, dueDateInput, task_key)
            .then(() => {
                res.writeHead(200);
                res.end();
            })
            .catch((error) => {console.log(error)})

    },

    completeTask: async(req, res) => {
        const db = req.app.get('db');
        const {task_key} = req.params;
        await db.tasks.completeTask()
            .then(() => {
                res.sendstatus(201);
            })
            .catch((error) => {console.log(error)});
    },

    reopenTask: async(req, res) => {
        const db = req.app.get('db');
        const {task_key} = req.params;
        await db.tasks.reopenTask()
            .then(() => {
                res.sendstatus(201);
            })
            .catch((error) => {console.log(error)})
    }

}
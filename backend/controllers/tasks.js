module.exports = {
    getTasks: async (req, res) => {

        const db = req.app.get('db');

        const tasklist = await db.tasks.tasklist();
        
        return res.status(200).send(tasklist);
    },

    createTask: async (req, res) => {
        const db = req.app.get('db');
        const {titleInput, taskInput, dueDateInput} = req.body;

        await db.tasks.addTask(titleInput, taskInput, dueDateInput)
            .then(() => {
                res.sendstatus(200);
            })
            .catch((e) => {
                console.log(e);
            });
    }
}
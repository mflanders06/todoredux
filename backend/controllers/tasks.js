module.exports = {
    getTasks: (req, res) => {

        const db = req.app.get('db');

        const tasks = db
            .tasks
            .tasklist()
            .then (() => {
                res.status(200).send(tasks);
            })

    }
}
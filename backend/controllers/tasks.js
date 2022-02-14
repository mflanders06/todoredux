module.exports = {
    getTasks: async (req, res) => {

        const db = req.app.get('db');

        const tasklist = await db.tasks.tasklist();
        
        return res.status(200).send(tasklist);
    }
}
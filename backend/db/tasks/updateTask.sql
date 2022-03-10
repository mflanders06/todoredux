UPDATE tasks
SET task_name = $1, task_description = $2, due_date = $3
where task_key = $4;
import { useState } from 'react';
import PropTypes from 'prop-types';
import Task from '../Task';
import styles from './TasksList.module.scss';

const TasksList = ({ tasks, setIsDone, deleteTask }) => {
  const [tasksIsDoneFilterValue, setTasksIsDoneFilterValue] = useState('All');

  // Обробник зміни значення у фільтрі тасків
  const handleTasksIsDoneFilterValueChange = ({ target: { value } }) => {
    setTasksIsDoneFilterValue(value);
  };

  // Функція, яка відображає таски
  const showTasks = (task) => {
    if (
      tasksIsDoneFilterValue === task.isDone.toString() ||
      tasksIsDoneFilterValue === 'All'
    ) {
      return (
        <Task
          key={task.id}
          task={task}
          setIsDone={setIsDone}
          deleteTask={deleteTask}
        />
      );
    }
  };

  return (
    <div className={styles['todo__tasklist-container']}>
      <h3>Task list</h3>

      <span> Task status filter:</span>

      <select
        className={styles['todo__tasksIsDoneFilter']}
        value={tasksIsDoneFilterValue}
        onChange={handleTasksIsDoneFilterValueChange}
      >
        <option value="All">All</option>
        <option value="true">Done</option>
        <option value="false">Undone</option>
      </select>

      <div className={styles['tasklist__tasks-container']}>
        {/* Відображаємо таски, якщо є хоч 1 таска, а інакше пишем що список порожній */}
        {tasks.length === 0 ? (
          <p>Empty list</p>
        ) : (
          <ol>{tasks.map(showTasks)}</ol>
        )}
      </div>
    </div>
  );
};

TasksList.propTypes = {
  tasks: PropTypes.array,
  setIsDone: PropTypes.func,
  deleteTask: PropTypes.func,
};

export default TasksList;

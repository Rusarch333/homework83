import PropTypes from 'prop-types';
import Task from '../Task';
import styles from './TasksList.module.scss';

const TasksList = ({ tasks, setIsDone, deleteTask }) => {
  // Функція, яка відображає таски
  const showTasks = (task) => (
    <Task
      key={task.id}
      task={task}
      setIsDone={setIsDone}
      deleteTask={deleteTask}
    />
  );
  return (
    <div className={styles['todo__tasklist-container']}>
      <h3>Task list</h3>
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

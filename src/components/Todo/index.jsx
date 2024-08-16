import useTodo from '../../hooks/useTodo';
import TaskForm from '../TaskForm';
import TasksList from '../TasksList';
import styles from './Todo.module.scss';

function Todo() {
  // Використовуємо користувацький хук toDo, який генерує список тасок (по-замовчуванню порожній)
  // а також функції для роботи з цим списком тасок
  const { tasks, addTask, setIsDone, deleteTask } = useTodo([]);

  // При натисканні кнопки Add виконується субміт - створення нової таски та очищення форми
  const onSubmit = (values, formikBag) => {
    addTask(values);
    formikBag.resetForm();
  };

  return (
    <section>
      <h2 className={styles['todo__title']}>Todo List</h2>
      <h3 className={styles['todo__new-task-title']}>New Task</h3>
      <TaskForm onSubmit={onSubmit} />
      <TasksList tasks={tasks} setIsDone={setIsDone} deleteTask={deleteTask} />
    </section>
  );
}

export default Todo;

import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Task.module.scss';

const Task = ({ task: { id, content, isDone }, setIsDone, deleteTask }) => {
  // Якщо таска виконана, змінюємо її колір з чорного на сірий та перекреслюємо
  const spanClasses = cx(styles['task__content'], { [styles['is-done']]: isDone });
  return (
    // Таска складається з:
    <li className={styles['tasklist__task']}>
      <div className={styles['task__checkbox-and-content']}>
        {/* Чекбоксу isDone */}
        <input
          type="checkbox"
          checked={isDone}
          onChange={() => setIsDone(id)}
        />
        {/* Тексту таски */}
        <span className={spanClasses}>{content}</span>
      </div>
      {/* Кнопки видалення таски */}
      <button
        className={styles['task__delete-button']}
        onClick={() => {
          deleteTask(id);
        }}
      >
        X
      </button>
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }),
  setIsDone: PropTypes.func,
  deleteTask: PropTypes.func,
};

export default Task;

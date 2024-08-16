import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
// Схема валідації
import { taskSchema } from '../../utils/validationSchemas';
import styles from './TaskForm.module.scss';
import Input from './Input';

const TaskForm = ({ onSubmit }) => {
  return (
    <div className={styles.container}>
      <Formik
        // Початкові значення форми
        initialValues={{ content: '' }}
        onSubmit={onSubmit}
        // Схема валідації
        validationSchema={taskSchema}
      >
        {/* Рендер форми з 1 текстовим імпутом, куди пишему таску та кнопкою Add, для додавання таски у туДу список */}
        <Form className={styles.form}>
          {/* Звернути увагу, що для таски використовується користувацький компонент Input, а не елемент input */}
          <Input name="content" placeholder="Enter task" />
          <input className={styles['task-form__add-button']} type="submit" value="Add" />
        </Form>
      </Formik>
    </div>
  );
};

TaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TaskForm;

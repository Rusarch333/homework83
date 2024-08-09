import { Formik, Form, Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { taskSchema } from '../../utils/validationSchemas';
import styles from './TaskForm.module.scss';

const TaskForm = ({onSubmit}) => {
  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ content: '' }}
        onSubmit={onSubmit}
        validationSchema={taskSchema}
      >
        <Form className={styles.form}>
          <Field name="content" />
          <ErrorMessage name="content" component="div" />
          <input type="submit" value="Add" />
        </Form>
      </Formik>
    </div>
  );
};

TaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TaskForm;

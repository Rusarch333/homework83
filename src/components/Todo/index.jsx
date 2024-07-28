import { Formik, Form, Field } from 'formik';
import useTodo from '../../hooks/useTodo';

function Todo() {
  const { tasks, addTask } = useTodo([
    { id: 1, content: 'test task', isDone: false },
  ]);
  return (
    <section>
      <h2>Todo</h2>
      <div>
        <Formik initialValues={{content: ''}} onSubmit={addTask}>
          <Form>
            <Field name="content" />
            <input type="submit" value="Add" />
          </Form>
        </Formik>
      </div>
      <div>
        <h3>List tasks</h3>
        <ol>
          {tasks.map((task) => (
            <li key={task.id}>{task.content}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Todo;

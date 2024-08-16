import { ErrorMessage, useField } from 'formik';
import cx from 'classnames';
import styles from './TaskForm.module.scss';

// Field - це об'єкт, що повертається хуком useField з Formik. Він містить всі властивості та методи, необхідні для управління станом поля введення у формі, включаючи:

//     name: ім'я поля форми, яке використовується для зв'язку із Formik.
//     value: Поточне значення поля.
//     onChange: обробник зміни значення поля.
//     onBlur: обробник втрати фокусу поля.

// Props - всі інші додаткові пропси

// meta – це об'єкт, який містить метадані про поле форми, такі як статус його торкання (touched), помилки та інші властивості, пов'язані з його станом.. 

const Input = (props) => {
  const [field, meta] = useField(props);
  // Додає CSS клас styles.invalid, якщо поле touched (meta.touched) та має помилку (meta.error).
  const inputClasses = cx(styles['task-form__task-input'], { [styles.invalid]: meta.touched && meta.error });
  return (
    <div className="task-form__custom-input-container">
      <input className={inputClasses} {...field} {...props} />
      {/* Компонент форміка, куди будуть виводитись помилки валідації */}
      <ErrorMessage name="content" component="div" className={styles['custom-input__error-message']}/>
    </div>
  );
};

export default Input;

import * as Yup from 'yup';

export const taskSchema = Yup.object({
  content: Yup.string()
    .trim()
    .min(2, 'Must be more 2 symbols')
    .max(64, 'Must be less 64 symbols')
    .matches(
      /^[-0-9A-Za-zА-ЯІЇЄҐа-яіїєґ ,.!?]{2,64}/,
      'You can write numbers, little and big letters, and next symbols: ",", ".", "!", "?"'
    )
    .required('Field is required'),
});

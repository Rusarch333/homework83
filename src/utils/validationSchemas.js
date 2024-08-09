import * as Yup from 'yup';

export const taskSchema = Yup.object({
  content: Yup.string()
    .trim()
    .min(3, 'must be more 3 symbols')
    .max(255, 'must be less 255 symbols')
    .matches(/[-0-9a-zA-ZА-ЯЇЄҐа-яїєґ ,.!?]{3,255}/, 'you can write numbers, little and big letters and next symbols: ",", ".", "!", "?"')
    .required('field is required'),
});

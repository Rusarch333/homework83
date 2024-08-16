import { useState } from 'react';
// Використовуємо бібліотечку для генерації унікального ідентифікатора uuid
import {v4 as uuidv4 } from 'uuid';

const useTodo = (initialTasks) => {
  // Якщо будуть якісь початкові таски - додамо їх у стейт! (у нас немає)
  const [tasks, setTasks] = useState([...initialTasks]);

  // Функція створення нової таски, та додавання її у стейт тасок
  const addTask = (task) => {
    const newTask = {
      id: uuidv4(),
      content: task.content,
      isDone: false,
    };
    // При цьому передаємо спочатку всі таски що були, інакше буде тільки нова
    setTasks([...tasks, newTask]);
  }
  // Функція, яка знаходить таску по айді, та змінює її стан на - "Виконаний"
  const setIsDone = (id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? {...task, isDone: !task.isDone }: task);
    setTasks(newTasks);
  }
  // Функція, яка видаляє таску по айді
  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }
  return { tasks, setTasks, addTask, setIsDone, deleteTask };
};

export default useTodo;

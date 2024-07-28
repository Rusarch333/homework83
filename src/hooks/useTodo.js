import { useState } from 'react';
import {v4 as uuidv4 } from 'uuid';

const useTodo = (initialTasks) => {
  const [tasks, setTasks] = useState([...initialTasks]);

  const addTask = (task) => {
    const newTask = {
      id: uuidv4(),
      content: task.content,
      isDone: false,
    };
    // Передаем сначала все таски, иначе наша новая таска просто сотрет прошлые таски, и потом уже новую таску
    setTasks([...tasks, newTask]);
  }
  const setIsDone = (id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? {...task, isDone: !task.isDone }: task);
    setTasks(newTasks);
  }
  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }
  return { tasks, setTasks, addTask, setIsDone, deleteTask };
};

export default useTodo;

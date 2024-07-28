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

  return { tasks, setTasks, addTask };
};

export default useTodo;

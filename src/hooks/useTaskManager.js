import { useState, useEffect } from 'react';

const useTaskManager = (initialTasks) => {
  const [tasks, setTasks] = useState([]);

  // Add the deleteTask function using the functional update
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Set up the tasks array using the useEffect
  useEffect(() => {
    const mappedTasks = initialTasks.map((task) => {
      return {
        // adding method to the objects
        deleteTask,
        ...task,
      };
    });
    setTasks(mappedTasks);
  }, []);

  return { tasks, deleteTask };
};

export default useTaskManager;
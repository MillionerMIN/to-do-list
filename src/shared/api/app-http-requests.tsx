import {
  CreateTaskResponseSchema,
  CreateTodolistResponseSchema,
  DeleteTodolistResponseSchema,
  GetTasksResponseSchema,
  TaskType,
  TasksType,
  TodolistType,
  TodolistsDtoSchema,
  TodolistsType,
  UpdateTaskResponseSchema,
  UpdateTodolistResponseSchema,
} from '../types';
import React, { ChangeEvent, useEffect, useState } from 'react';

import Checkbox from '@mui/material/Checkbox';
import { UiAddItemForm } from '../ui/ui-add-item-form';
import { UiEditableSpan } from '../ui/ui-editable-span';
import { tasksApi } from '../../entities/task/api';
import { todolistsApi } from '../../entities';

export const AppHttpRequests = () => {
  const [todolists, setTodolists] = useState<TodolistsType>([]);
  const [tasks, setTasks] = useState<TasksType>({});

  useEffect(() => {
    // get todolists
    todolistsApi
      .getTodolists()
      .then((res) => {
        return res.data;
      })
      .then(TodolistsDtoSchema.parse)
      .then((res) => {
        const getTodolists = res;
        setTodolists(getTodolists);
        let tasksAll: TasksType = {};
        getTodolists.map((tl) => {
          tasksApi.getTasks(tl.id).then((res) => {
            GetTasksResponseSchema.parse(res.data);
            tasksAll = { ...tasksAll, [tl.id]: res.data.items } as TasksType;
            setTasks(tasksAll);
          });
        });
      });
  }, []);

  const createTodolistHandler = (title: string) => {
    todolistsApi
      .createTodolist(title)
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .then(CreateTodolistResponseSchema.parse)
      .then((res) => {
        const newTodolist = res.data.item as TodolistType;
        setTodolists([newTodolist, ...todolists]);
      });
  };

  const removeTodolistHandler = (id: string) => {
    todolistsApi
      .removeTodolist(id)
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .then(DeleteTodolistResponseSchema.parse)
      .then(() => {
        const newTodolists = todolists.filter((tl) => tl.id !== id);
        setTodolists(newTodolists);
      });
  };

  const updateTodolistHandler = (id: string, title: string) => {
    todolistsApi
      .updateTodolistTitle({ id, title })
      .then((res) => UpdateTodolistResponseSchema.parse(res.data))
      .then(() => {
        const newTodolists = todolists.map((tl) =>
          tl.id === id ? { ...tl, title } : tl
        );
        setTodolists(newTodolists);
      });
  };

  const createTaskHandler = (title: string, todolistId: string) => {
    tasksApi
      .createTask({ title, todolistId })
      .then((res) => CreateTaskResponseSchema.parse(res.data))
      .then((res) => {
        setTasks({
          ...tasks,
          [todolistId]: [res.data.item, ...tasks[todolistId]],
        } as TasksType);
        console.log('Create', tasks);
      });
  };

  const removeTaskHandler = (todolistId: string, taskId: string) => {
    tasksApi
      .deleteTask({ todolistId, taskId })
      .then((res) => DeleteTodolistResponseSchema.parse(res.data))
      .then(() => {
        setTasks({
          ...tasks,
          [todolistId]: tasks[todolistId].filter((t) => t.id !== taskId),
        });
      });
  };

  const changeTaskStatusHandler = (
    e: ChangeEvent<HTMLInputElement>,
    task: TaskType
  ) => {
    const { todoListId, id } = task;
    tasksApi
      .changeStatusTask({ task, isDone: e.target.checked })
      .then((res) => {
        console.log(res.data);
        UpdateTaskResponseSchema.parse(res.data);
        return res.data;
      })
      .then((res) => {
        setTasks({
          ...tasks,
          [todoListId]: tasks[todoListId].map((t) =>
            t.id === id ? { ...t, status: res.data.item.status } : t
          ),
        });
      });
  };

  const changeTaskTitleHandler = (task: TaskType, title: string) => {
    const { todoListId } = task;
    tasksApi
      .changeTitleTask({ task, title })
      .then((res) => {
        UpdateTaskResponseSchema.parse(res.data);
        return res.data;
      })
      .then((res) => {
        setTasks({
          ...tasks,
          [todoListId]: tasks[todoListId].map((t) =>
            t.id === task.id ? { ...t, title: res.data.item.title } : t
          ),
        } as TasksType);
      });
  };

  return (
    <div style={{ margin: '20px' }}>
      <UiAddItemForm addItem={createTodolistHandler} />

      {/* Todolists */}
      {todolists.map((tl) => {
        return (
          <div key={tl.id} style={todolist}>
            <div>
              <UiEditableSpan
                value={tl.title}
                onChange={(title: string) =>
                  updateTodolistHandler(tl.id, title)
                }
              />
              <button onClick={() => removeTodolistHandler(tl.id)}>x</button>
            </div>
            <UiAddItemForm
              addItem={(title) => createTaskHandler(title, tl.id)}
            />

            {/* Tasks */}
            {!!tasks[tl.id] &&
              tasks[tl.id].map((task) => {
                return (
                  <div key={task.id}>
                    <Checkbox
                      checked={!!task.status}
                      onChange={(e) => changeTaskStatusHandler(e, task)}
                    />
                    <UiEditableSpan
                      value={task.title}
                      onChange={(title) => changeTaskTitleHandler(task, title)}
                    />
                    <button onClick={() => removeTaskHandler(tl.id, task.id)}>
                      x
                    </button>
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
};

// Styles
const todolist: React.CSSProperties = {
  border: '1px solid black',
  margin: '20px 0',
  padding: '10px',
  width: '300px',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
};

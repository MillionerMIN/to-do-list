import {
  CreateTodolistResponseSchema,
  DeleteTodolistResponseSchema,
  GetTodolistsSchemaDto,
  TodolistType,
  TodolistsType,
  UpdateTodolistResponseSchema,
} from '../../entities/todolists/types';
import React, { ChangeEvent, useEffect, useState } from 'react';

import Checkbox from '@mui/material/Checkbox';
import { CreateTaskResponseSchema } from '../../entities/task/types/create-task-response.types';
import { TaskType } from '../../entities/task/types/taskSchema.types';
import { TasksType } from '../../entities/task/types';
import { UiAddItemForm } from '../ui/ui-add-item-form';
import { UiEditableSpan } from '../ui/ui-editable-span';
import { UpdateTaskResponseSchema } from '../../entities/task/types/update-task-response.types';
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
        console.log(res.data);
        return res.data;
      })
      .then(GetTodolistsSchemaDto.parse)
      .then((res) => {
        const getTodolists = res;
        setTodolists(getTodolists);
        let tasksAll: TasksType = {};
        getTodolists.map((tl) => {
          tasksApi.getTasks(tl.id).then((res) => {
            tasksAll = { ...tasksAll, [tl.id]: res.data.items };
            console.log('TasksAll', tasksAll);
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
      .updateTodolistTitle(id, title)
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .then(() => {
        UpdateTodolistResponseSchema.parse;
        const newTodolists = todolists.map((tl) =>
          tl.id === id ? { ...tl, title } : tl
        );
        setTodolists(newTodolists);
      });
  };

  const createTaskHandler = (title: string, todolistId: string) => {
    tasksApi
      .createTask(title, todolistId)
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
      .deleteTask(todolistId, taskId)
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
      .changeStatusTask(todoListId, id, e.target.checked)
      .then((res) => UpdateTaskResponseSchema.parse(res.data))
      .then((res) => {
        setTasks({
          ...tasks,
          [todoListId]: tasks[todoListId].map((t) =>
            t.id === id ? { ...t, completed: res.data?.item.completed } : t
          ),
        });
      });
  };

  const changeTaskTitleHandler = (task: TaskType, title: string) => {
    const { todoListId, id } = task;
    tasksApi
      .changeTitleTask(todoListId, id, title)
      .then((res) => UpdateTaskResponseSchema.parse(res.data))
      .then((res) => {
        setTasks({
          ...tasks,
          [todoListId]: tasks[todoListId].map((t) =>
            t.id === task.id ? { ...t, title: res.data?.item.title } : t
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
                      checked={task.completed}
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

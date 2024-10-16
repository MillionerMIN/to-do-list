import React, { ChangeEvent, useEffect, useState } from 'react';

import Checkbox from '@mui/material/Checkbox';
import { UiAddItemForm } from '../ui/ui-add-item-form';
import { UiEditableSpan } from '../ui/ui-editable-span';
import axios from 'axios';
import { z } from 'zod';

const TodolistSchema = z.object({
  id: z.string(),
  title: z.string(),
  addedDate: z.string(),
  order: z.number(),
});

const FieldErrorSchema = z.object({
  error: z.string(),
  field: z.string(),
});

const CreateTodolistResponseSchema = z.object({
  resultCode: z.number(),
  messages: z.array(z.string()),
  fieldsErrors: z.array(FieldErrorSchema),
  data: z.object({
    item: z.optional(TodolistSchema),
  }),
});

const DeleteTodolistResponseSchema = z.object({
  resultCode: z.number(),
  messages: z.array(z.string()),
  fieldsErrors: z.array(FieldErrorSchema),
  data: z.object({}),
});

const UpdateTodolistResponseSchema = z.object({
  resultCode: z.number(),
  messages: z.array(z.string()),
  fieldsErrors: z.array(FieldErrorSchema),
  data: z.object({}),
});

const ApiTodolistsSchema = z.array(TodolistSchema);

export type TodolistType = z.infer<typeof TodolistSchema>;
export type TodolistsType = z.infer<typeof ApiTodolistsSchema>;

export const AppHttpRequests = () => {
  const [todolists, setTodolists] = useState<TodolistsType>([]);
  const [tasks, setTasks] = useState<any>({});

  useEffect(() => {
    // get todolists
    axios
      .get('https://social-network.samuraijs.com/api/1.1/todo-lists', {
        headers: {
          Authorization: 'Bearer 64f6dc92-a60b-4bfb-b6eb-07fff1337a9d',
        },
      })
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .then(ApiTodolistsSchema.parse)
      .then((res) => {
        setTodolists(res);
      });
  }, []);

  const createTodolistHandler = (title: string) => {
    axios
      .post(
        'https://social-network.samuraijs.com/api/1.1/todo-lists',
        { title },
        {
          headers: {
            Authorization: 'Bearer 64f6dc92-a60b-4bfb-b6eb-07fff1337a9d',
            'API-KEY': 'c776464e-9336-49f9-96f6-6e3857c87294',
          },
        }
      )
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
    axios
      .delete(
        `https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`,

        {
          headers: {
            Authorization: 'Bearer 64f6dc92-a60b-4bfb-b6eb-07fff1337a9d',
            'API-KEY': 'c776464e-9336-49f9-96f6-6e3857c87294',
          },
        }
      )
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
    axios
      .put(
        `https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`,
        { title },

        {
          headers: {
            Authorization: 'Bearer 64f6dc92-a60b-4bfb-b6eb-07fff1337a9d',
            'API-KEY': 'c776464e-9336-49f9-96f6-6e3857c87294',
          },
        }
      )
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
    // create task
  };

  const removeTaskHandler = (taskId: string, todolistId: string) => {
    // remove task
  };

  const changeTaskStatusHandler = (
    e: ChangeEvent<HTMLInputElement>,
    task: any
  ) => {
    // update task status
  };

  const changeTaskTitleHandler = (title: string, task: any) => {
    // update task title
  };

  return (
    <div style={{ margin: '20px' }}>
      <UiAddItemForm addItem={createTodolistHandler} />

      {/* Todolists */}
      {todolists.map((tl: any) => {
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
              tasks[tl.id].map((task: any) => {
                return (
                  <div key={task.id}>
                    <Checkbox
                      checked={task.isDone}
                      onChange={(e) => changeTaskStatusHandler(e, task)}
                    />
                    <UiEditableSpan
                      value={task.title}
                      onChange={(title) => changeTaskTitleHandler(title, task)}
                    />
                    <button onClick={() => removeTaskHandler(task.id, tl.id)}>
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

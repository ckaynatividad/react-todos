import { client, checkError } from './client';

export async function createTodo(task_info) {
  const resp = await client.from('todos').insert([{ task_info, user_id: client.auth.user().id }]);
  return checkError(resp);
}

export async function fetchTodos() {
  const resp = await client.from('todos').select('*');
  return checkError(resp);
}

export async function updateTodo({ id, task_info, is_complete }) {
  const resp = await client.from('todos').update({ task_info, is_complete }).eq('id', id);
  return checkError(resp);
}

export async function fetchTodoId(id) {
  const resp = await client.from('todos').select('*').match({ id });
  return checkError(resp);
}

export async function deleteTodo(id) {
  const resp = await client.from('todos').delete().match({ id });
  return checkError(resp);
}
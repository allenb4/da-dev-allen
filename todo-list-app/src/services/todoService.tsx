import { http } from "../utils/http";



export const getAll = async () => {

    try {
        const {data} = await http.get('/api/todos');

        return data;
      } catch (err) {
        console.error(err);
      }

}

export const createList = async (description: string, isDone: boolean) => {

    try {
        const response = await http.post(`/api/todo`, {description, isDone});

        return response.data;

      } catch (err) {
        console.error(err);
      }

}


export const updateList = async (id: number, isDone: boolean) => {

    try {
        const response = await http.patch(`/api/todo/update`, {id, isDone});

        return response.data;

      } catch (err) {
        console.error(err);
      }

}


export const deleteList = async (id: number) => {

    try {
        const response = await http.post('/api/todo/delete', {id});

        return response.data;

      } catch (err) {
        console.error(err);
      }

}
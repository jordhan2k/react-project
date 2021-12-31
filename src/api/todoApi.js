import axiosClient from "./axiosClient";

const url = "/todos";

class TodoApi {

    getAll() {
        return axiosClient.get(url);
    }

    addTodo(todo) {
        return axiosClient.post(url, todo);
    }

    editTodo(editedTodo) {
        return axiosClient.put(`${url}/${editedTodo._id}`, editedTodo)
    }

    deleteTodo(id) {
        return axiosClient.delete(`${url}/${id}`)
    }
}

const todoApi = new TodoApi();
export default todoApi;
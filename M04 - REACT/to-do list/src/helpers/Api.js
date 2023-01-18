import axios from "axios";
import { response } from "express";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.headers.patch["Content-Type"] = "application/json";

export const todoService = {
	getTodoList: async () => {
		return await axios
			.get("/tasks")
			.then((response) => response.data)
			.catch((e) => console.log(e));
	},

	createTodo: async (todo) =>
		await axios.post("/tasks", todo).then((response) => response),

	// getById: async () => {
	// 	const data = await this.getTodoList();
	// 	console.log(data);
	// 	// data.map((item) => {
	// 	// 	if (item.id === id) {
	// 	// 		return item;
	// 	// 	}
	// 	// });
	// },

	// updateTodo: async (todo) => {
	// 	// const task = await this.getById(id);
	// 	// const taskEdit = Object.assign(task, todo);
	// 	// return await axios.patch("/tasks", taskEdit);
	// },
	// deleteTodo: async (id) => await axios.delete("/tasks"),
};

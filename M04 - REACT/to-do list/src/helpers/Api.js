const TodoContext = {
	todoEndpoint: () => `${Api.baseUrl}`,
	todoListAll: () => `${TodoContext.todoEndpoint}/tasks`,
	createTodo: (task) => `${TodoContext.todoEndpoint}/tasks`,
	updateTodo: (id) => `${TodoContext.todoEndpoint}/tasks`,
	deleteTodo: (id) => `${TodoContext.todoEndpoint}/tasks`,
};

const Api = {
	baseUrl: `http://localhost:3000/`,
	...TodoContext,
};

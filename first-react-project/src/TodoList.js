import React from "react"
import Todo from "./Todo.js"

export default function TodoList({ todos }) {
	// const todos = props.todos
	return todos.map((todo) => {
		return <Todo key={todo.id} todo={todo} />
	})
}

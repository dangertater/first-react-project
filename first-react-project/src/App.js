//https://www.youtube.com/watch?v=hQAHSlTtcmY&t=310s
//----react project walkthrough abouve
//https://www.youtube.com/watch?v=O6P86uwfdR0
//----react hooks explination above
import React, { useState } from "react"
import TodoList from "./TodoList.js"

//last thing i did was piece together string todo 1 and todo 2 on line 13 gets passed to TodoList.js and in turn Todo.js eventually populating the webpage with both strings
//q4e, wtf is the '={todos}' on line 16?

function App() {
	//todos below is every one of the todos in the useState, second variable is function we call to update the todos
	const [myTodos, setTodos] = useState(["Todo 1", "Todo 2"])
	return (
		<>
			<TodoList todos={myTodos} />
			{/* React.render(Todolist, {todos: myTodos}) */}
			<input type="text" />
			<button>add todo </button>
			<button>clear complete</button>
			<div>number left todo</div>
		</>
	)
}

export default App

//refer to 22:20ish if fixing mikey vs input value doesnt work
//https://www.youtube.com/watch?v=hQAHSlTtcmY&t=310s
//----react project walkthrough abouve
//https://www.youtube.com/watch?v=O6P86uwfdR0
//----react hooks explination above
import React, { useState, useRef, useEffect } from "react"
import TodoList from "./TodoList.js"
import { v4 as uuidv4 } from "uuid"

//last thing i did was piece together string todo 1 and todo 2 on line 13 gets passed to TodoList.js and in turn Todo.js eventually populating the webpage with both strings
//q4e, wtf is the '={todos}' on line 16?
let localStorageKey = "todosApp.myTodos"
function App() {
	//todos below is every one of the todos in the useState, second variable is function we call to update the todos
	let todoNameRef = useRef()
	const [inputValue, setInputValue] = useState("")
	const [myTodos, setTodos] = useState([])

	//this use effect is only called once when component loads
	//----empty array as second argument never changes, so it won't ever reload, just loads on initiaton
	useEffect(() => {
		let storedTodos = JSON.parse(localStorage.getItem(localStorageKey))
		if (storedTodos) {
			setTodos(storedTodos)
		}
	}, [])
	//use effect is at the top so everytime something changes on page, this is called first, two paramaters first being a function, second being an array of properties that decides when to implement first argument
	//----the second argument should be all the dependencies
	useEffect(() => {
		localStorage.setItem(localStorageKey, JSON.stringify(myTodos))
	}, [myTodos])

	//establish a new variable as a copy of myTodos as to not fuck the original
	let toggleCheckBox = (id) => {
		let newMyTodos = [...myTodos]
		let newTodo = newMyTodos.find((todo) => {
			return todo.id === id
		})
	}

	let handleAddTodo = (e) => {
		// let nameRef = todoNameRef.current.value
		if (inputValue === "") return
		setTodos((prevTodo) => {
			return [
				...prevTodo,
				{ id: uuidv4(), name: inputValue, age: 30, complete: false },
			]
		})
		// todoNameRef.current.value = null
		setInputValue("")
	}
	return (
		<>
			<TodoList todos={myTodos} />
			{/* React.render(Todolist, {todos: myTodos}) */}
			<input
				value={inputValue}
				onChange={(e) => {
					setInputValue(e.target.value)
				}}
				ref={todoNameRef}
				type="text"
			/>
			<div>{inputValue}</div>
			<button onClick={handleAddTodo}>add todo </button>
			<button>clear complete</button>
			<div>number left todo</div>
		</>
	)
}

export default App

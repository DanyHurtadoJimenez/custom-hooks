import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"


export const useTodo = () => {

    const initialState = [];
    const init = () =>{
        return JSON.parse(localStorage.getItem('todos')) || [];//obtenga lo que este en el local storage y setee el estado
    }
    const [todos, dispatch] = useReducer(todoReducer, initialState,init)

    const pendingTodos =  todos.filter( todo => todo.done === false);

    const handleNewToDo = (todo) =>{
        const action = {
            type:'[Todo] add todo',
            payload:todo,
        }
        dispatch(action);
    }

    const handleDeleteToDo = (id) =>{
        const action = {
            type:'[Todo] delete todo',
            payload:id,
        }
        dispatch(action);
    }

    const handleToggleToDo = (id) =>{
        const action = {
            type:'[Todo] toggle todo',
            payload:id,
        }
        dispatch(action);
    }

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos])


    return{
        todos,
        pendingTodos,
        handleNewToDo,
        handleDeleteToDo,
        handleToggleToDo
    }
}


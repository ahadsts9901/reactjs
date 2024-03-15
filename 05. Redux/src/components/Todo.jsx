import React, { memo } from 'react'

const Todo = ({ todos,addTodoHandler }) => {
    console.log("TODO COMP")
    return (
        <>
            {
                todos.map((todo, index) => <div key={index}>{todo}</div>)
            }
            <button onClick={addTodoHandler}>Add Todo</button>
        </>
    )
}

export default memo(Todo)
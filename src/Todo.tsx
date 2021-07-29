import React from 'react'

import { TodoType } from './types/todo'



const Todo = (props: Pick<TodoType, 'userId' | 'completed' | 'title'>) => {
    const { title, userId, completed = true } = props
    const isCompleted = completed ? '[完了]' : '[未完了]'
    return (
        <>
            <p>{`${isCompleted} ${title}(ユーザーID: ${userId})`}</p>
        </>
    )
}

export default Todo

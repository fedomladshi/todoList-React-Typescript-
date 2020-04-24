import React, { Component } from 'react'

// import TodoListItem from '../todo-list-item/'
import './TodoList.css'
import { ITodoListItem } from '../../interfaces'
import TodoListItem from '../todo-list-item'

interface IProps {
    onRemove: (id: number) => void
    onCompleted: (id: number) => void
    onImportant: (id: number) => void
    todoList: ITodoListItem[]
}

export default class TodoList extends Component<IProps> {

    render() {
        const list = this.props.todoList.map((item: ITodoListItem) => {
            return <TodoListItem
                key={item.id}
                    id={item.id}
                        item={item}
                            onRemove={this.props.onRemove}
                                onCompleted={this.props.onCompleted}
                                    onImportant={this.props.onImportant}
                                        completed={item.completed} 
                                            important={item.important} 
                    />
        })
        return <ul className="todoList">
            {list.length ? list : 'Здесь пусто'}
        </ul>
    }
}
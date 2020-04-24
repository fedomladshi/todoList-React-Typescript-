import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons'

import './TodoListItem.css'
import { ITodoListItem } from '../../interfaces'

interface IProps {
    id: number
    completed: boolean
    important: boolean
    item: ITodoListItem
    onRemove: (id: number) => void,
    onCompleted: (id: number) => void,
    onImportant: (id: number) => void,
}

export default class TodoListItem extends Component<IProps, {}> {

    render() {
        const { id, onCompleted, onRemove, onImportant, completed, important } = this.props;

        const CompletedStyle = completed ? "completed" : '';
        const ImportantStyle = important ? ' important' : '';
        const taskStyle = CompletedStyle + ImportantStyle;
        return (
            <li className="todoListItem" >
                <div className="todoListItem__label">
                    <p className={taskStyle} onClick={() => onImportant(id)}>{this.props.item.taskText}</p>
                </div>
                <button
                    type="button"
                        className="btn btn-outline-success btn-size"
                            onClick={() => onCompleted(id)}
                ><FontAwesomeIcon icon={faCheck} />
                </button>
                <button
                    type="button"
                        className="btn btn-outline-danger btn-size"
                            onClick={() => onRemove(id)}
                ><FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </li>
        );
    }
}
import React, { Component } from 'react'
import './TodoPanel.css'
import TodoSearch from '../todo-search/TodoSearch';
import TodoButtons from '../todo-buttons/TodoButtons';

interface IProps {
    leftToDo: number
    alreadyDone: number
    onButtonClick: (name: string) => void
    filter: string
    search: string
    onInput: (term: string) => void
}
export default class TodoPanel extends Component<IProps, {}> {
    render() {
        const { leftToDo, alreadyDone, filter, onInput, onButtonClick, search } = this.props;
        return (
            <div className="todo-panel">
                <div className="title">
                    <h1>Список дел</h1>
                    <p>Осталось сделать {leftToDo}, сделано {alreadyDone}</p>
                </div>
                <div className="panel-wrapper">
                    <TodoSearch onInput={(term) => onInput(term)} search={search} />
                    <TodoButtons
                        onButtonClick={(name) => onButtonClick(name)}
                        filter={filter}
                    />
                </div>
            </div>
        );
    }
}
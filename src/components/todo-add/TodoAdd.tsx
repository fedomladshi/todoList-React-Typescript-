import React, { Component } from 'react'

import './TodoAdd.css'

interface ToDoAddProps {
    onAdd(text: string): void
}
interface IState {
    inputText: string
}

export default class ToDoAdd extends Component<ToDoAddProps, IState> {

    state = {
        inputText: ''
    }

    toAdd = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && this.state.inputText !== '') {
            this.props.onAdd(this.state.inputText)
            this.setState({ inputText: '' })
        }
    }

    render() {
        return (
            <input
                onKeyPress={this.toAdd}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.setState({ inputText: event.target.value })}
                        value={this.state.inputText}
                            className="form-control"
                                type="text"
                                    placeholder="Введите название дела" 
            />
        );
    }
}
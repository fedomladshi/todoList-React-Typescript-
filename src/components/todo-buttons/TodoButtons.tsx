import React, { Component } from 'react'

import './TodoButtons.css'

interface IProps {
    onButtonClick: (name: string) => void
    filter: string
}
export default class TodoButtons extends Component<IProps, {}> {

    buttons = [
        { id: 1, name: 'All', text: 'Все' },
        { id: 2, name: 'Active', text: 'Осталось' },
        { id: 3, name: 'Done', text: 'Сделанные' },
    ]

    render() {
        const buttons = this.buttons.map(btn => {
            const clazz = btn.name === this.props.filter ? ' active btn-outline-secondary' : 'btn-outline-secondary';
            return <button
                key={btn.id}
                className={`btn ${clazz}`}
                onClick={() => this.props.onButtonClick(btn.name)}
            >{btn.text}</button>
        })
        return (
            <div className="btn-group" role="group">
                {buttons}
            </div>
        )
    }
}
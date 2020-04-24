import React, { Component } from 'react'

import './TodoSearch.css'

interface IProps {
    onInput: (term: string) => void
    search: string
}

interface IState {
    term: string
}

export default class ToDoSearch extends Component<IProps, IState> {

    state = {
        term: ''
    }
    // onPress = (event: React.KeyboardEvent) => {
    //     this.setState((state) => {
    //         return {
    //             term: state.term + 
    //         }
    //     })
    // }
    onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onInput(term)
    }

    render() {
        return (
            <input
                className="form-control mr-sm-2 searchbox"
                type="search"
                placeholder="Поиск плана по названию"
                aria-label="Search"
                onChange={this.onSearchChange}
                value={this.state.term}
            />
        );
    }
}
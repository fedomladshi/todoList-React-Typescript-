import React, { Component } from 'react';
import './App.css'
import TodoPanel from '../todo-panel';
import TodoAdd from '../todo-add';
import TodoList from '../todo-list';
import { ITodoList, ITodoListItem } from '../../interfaces'

declare var confirm: (question: string) => boolean;

export default class App extends Component<any, ITodoList> {

  state = {
    todoList: [
      {
        id: 1,
        taskText: 'Сделать зарядку',
        completed: false,
        important: false
      },
      {
        id: 2,
        taskText: 'Приготовить завтрак',
        completed: false,
        important: false
      },
      {
        id: 3,
        taskText: 'Умереть',
        completed: false,
        important: true
      }
    ],
    search: '',
    filter: 'All'
  }

  onAdd = (text: string) => {
    const newItem: ITodoListItem = {
      id: Date.now(),
      taskText: text,
      completed: false,
      important: false
    }

    this.setState(({ todoList }) => {
      return {
        todoList: [...todoList, newItem]
      }
    })
  }

  onRemove = (id: number) => {
    const shouldRemove = confirm('Вы уверены, что хотите удалить элемент?');
    if (shouldRemove) {
      this.setState(({ todoList }) => {
        return {
          todoList: todoList.filter((item) => item.id !== id)
        }
      })
    }

  }

  onCompleted = (id: number) => {
    this.setState((state) => {
      const newList = this.onAttChange(state, 'completed', id);
      return {
        todoList: newList
      }
    })
  }
  onImportant = (id: number) => {
    this.setState((state) => {
      const newList = this.onAttChange(state, 'important', id);
      return {
        todoList: newList
      }
    })
  }


  onAttChange = (state: any, attribute: string, id: number) => {
    return state.todoList.map((item: any) => {
      if (item.id === id) {
        return {
          ...item,
          [attribute]: !item[attribute]
        }
      }
      return item
    })
  }

  onButtonClick = (name: string) => {
    this.setState({ filter: name })
  }

  renderList = (state: ITodoList) => {
    switch (state.filter) {
      case 'Active': return state.todoList.filter(item => !item.completed)
      case 'Done': return state.todoList.filter(item => item.completed)
      default: return state.todoList
    }
  }

  searchFilter = (itemList: any) => {
    if (this.state.search === '') {
      return itemList
    }
    return itemList.filter((item: any) => {
      const itemText = item.taskText.toUpperCase();
      return itemText.indexOf(this.state.search.toUpperCase()) > -1;
    })
  }

  onInput = (term: string) => {
    this.setState({ search: term })

  }
  render() {
    const { todoList, filter, search } = this.state;
    const { onAdd, state, renderList, searchFilter } = this;
    const displayedList = searchFilter(renderList(state));
    const leftToDo = todoList.filter((item: ITodoListItem) => !item.completed).length;
    const alreadyDone = todoList.length - leftToDo;
    return (
      <div className="app">
        <TodoPanel
          onInput={this.onInput}
          leftToDo={leftToDo}
          alreadyDone={alreadyDone}
          onButtonClick={this.onButtonClick}
          filter={filter}
          search={search}
        />
        <TodoList todoList={displayedList} onRemove={this.onRemove} onCompleted={this.onCompleted} onImportant={this.onImportant} />
        <TodoAdd onAdd={onAdd} />
      </div>
    );
  }
}


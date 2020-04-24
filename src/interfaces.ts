export interface ITodoList {
     todoList: ITodoListItem[]
     search: string
     filter: string
}

export interface ITodoListItem {
     id: number
     taskText: string
     completed: boolean
     important: boolean
}

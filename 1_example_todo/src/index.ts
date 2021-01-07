interface ITodo {
    id: number;
    title: string;
    done: boolean;
}

let todoItems: ITodo[];

// api
function fetchTodoItems() {
    const todos = [
        {id: 1, title: '안녕', done: false},
        {id: 2, title: '타입', done: false},
        {id: 3, title: '스크립트', done: false},
    ];
    return todos;
}

// crud methods
function fetchTodos(): ITodo[] {
    const todos = fetchTodoItems();
    return todos;
}

function addTodo(todo: ITodo): void {
    todoItems.push(todo);
}

function deleteTodo(index: number) {
    todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: ITodo) {
    todo.done = true;
    todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): {} {
    return todoItems[0];
}

function showCompleted(): ITodo[] {
    return todoItems.filter(item => item.done);
}

function addTwoTodoItems(): void {
    addTodo({id: 4, title: 'todo4', done: false})
    addTodo({id: 5, title: 'todo5', done: false})
}

// NOTE: 유틸 함수
function log(): void {
    console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();

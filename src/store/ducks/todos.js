export const Types = {
    ADD: 'ADD_TODO',
    COMPLETE: 'COMPLETE_TODO',
};

const INITIAL_STATE = {
    todos: [],
};

export default function Todos(state = INITIAL_STATE, action) {
    switch (action.type) {

        case Types.ADD:
            return { ...state, todos: [...state.todos, action.payload.todo] };

        case Types.COMPLETE:
            return { ...state, todos: state.todos.filter(todo => todo !== action.payload.todo) };

        default:
            return state;
    }
}

export const Creators = {
    addTodo: todo => ({
        type: Types.ADD, payload: { todo }
    }),

    completeTodo: todo => ({
        type: Types.COMPLETE, payload: { todo }
    }),
};

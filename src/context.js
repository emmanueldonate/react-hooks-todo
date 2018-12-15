import React from 'react';

const TodosContext = React.createContext({
    todos: [ 
        { id: 1, text: "Eat breakfast", complete: false },
        { id: 2, text: "Go for a run", complete: false },
        { id: 3, text: "Go to the movies", complete: true }
    ],
        currentTodo: {}
});

export default TodosContext;

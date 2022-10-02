let id = 0;

const Todo = ({todo, onToggle, onDelete}) => (
        <li className = "todo-list">
            <input className = "todo-checkbox" type="checkbox" checked={todo.checked} onChange={onToggle} />
            <span>{todo.text}</span>
            <button className = "todo-delete" onClick={onDelete}>delete</button>
        </li>
    )

function App() {

    const [todos, setTodos] = React.useState([]);

    function addTodo() {
        const text = prompt('Enter task to do:');
        const todo = { id: id++, text, checked: false };
        setTodos([...todos, todo]);
        console.log(todos);
    }

    function deleteTodo(id) {
        setTodos([...todos.filter(todo => todo.id !== id)])
    }

    function toggleTodo(id){

        setTodos([...todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo)]);
      
        render();
      }

    return (
        <div>
            <h1 className = "title">My TODO App</h1>
            <div className = "title">
                <span>Item count: <span>{todos.length}</span></span> <br />
                <span>Unchecked count: <span>{todos.filter(todo => todo.checked == false).length}</span></span>
            </div>
            <div className = "title">
                <button className = "button" onClick={addTodo}>New TODO</button>
            </div>
            
            <ul>
                {todos.map(todo => <Todo key={todo.id} todo={todo} 
                onDelete={() => { deleteTodo(todo.id) }} 
                onToggle={() => {toggleTodo(todo.id)}} 
                />)}
            </ul>
        </div>
    )
}

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />);
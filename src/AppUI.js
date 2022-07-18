import React from "react";

//Components
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import TodoButton from './components/TodoButton';
import TodoImage from './components/TodoImage';
import CreateTodoBtn from "./components/CreateTodoBtn";
import Modal from "./modal";
import TodoForm from "./modal/TodoForm";
import { TodoContext } from "./todocontext";

function AppUI() {

    const { error, loading, searchedTodos, toggleCompleted, deleteTodo, openModal, setOpenModal } = React.useContext(TodoContext)
    return (
        <React.Fragment>
            <section className="container">
                <section className='add-todo__section'>
                    <TodoSearch />
                    <TodoButton />
                    <TodoImage />
                </section>

                <section className='list__section'>
                    <TodoCounter />
                    <TodoList>
                        {error && <p>Error...</p>}
                        {loading && <p>Cargando...</p>}
                        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
                        {searchedTodos.map(todo => (
                            <TodoItem
                                key={todo.text}
                                text={todo.text}
                                onComplete={() => toggleCompleted(todo.text)}
                                onDelete={() => deleteTodo(todo.text)}
                            />
                        ))}
                    </TodoList>
                </section>
                {!!openModal && (
                    <Modal>
                        <TodoForm/>
                    </Modal>
                )}

                <CreateTodoBtn 
                    setOpenModal={ setOpenModal }
                />
            </section>
        </React.Fragment>
    );
}

export default AppUI;
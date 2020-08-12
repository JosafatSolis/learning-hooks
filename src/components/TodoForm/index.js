import React, { useState, useContext } from "react";
import { createTodo } from "../../services/todoService";
import UIkit from "uikit";
import { AppContext } from '../../AppContext';

const TodoForm = () => {

    const [todo, setTodo] = useState({});
    const { setTodos } = useContext(AppContext);

    const handleChange = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setTodo( prevState => ({...prevState, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createTodo(todo).then((res) => {
            setTodos((prevState) => [...prevState, res.data]);
            setTodo({}); // Para limpiar los campos al final
            UIkit.notification({
                status: "success",
                message: "<span uk-icon='icon: check'></span> TODO added"
            })
        }).catch(err => console.log("Error: ", err));
    }

  return (
    <div>
        {JSON.stringify(todo)}
      <form className="uk-form-stacked" onSubmit={handleSubmit}>
        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="title">
            Title:
          </label>
          <div className="uk-form-controls">
            <input
              onInput={handleChange}
              className="uk-input"
              id="title"
              value={todo.title || ""}
              type="text"
              name="title"
              placeholder="Learn node"
            />
          </div>
        </div>
        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="body">
            Body:
          </label>
          <div className="uk-form-controls">
            <textarea
              onChange={handleChange}
              className="uk-input"
              id="body"
              value={todo.body || ""}
              type="text"
              name="body"
            ></textarea>
          </div>
        </div>
        <button type="submit" className="uk-button uk-button-primary">Add task</button>
      </form>
    </div>
  );
};

export default TodoForm;

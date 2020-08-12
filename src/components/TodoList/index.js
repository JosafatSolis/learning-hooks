import React, { useContext } from "react";
import { AppContext } from "../../AppContext";

const TodoList = () => {
    const { todos } = useContext(AppContext);

   // const [todos, setTodos] = useState([]);

  // Equivalente a ComponentDidMount
    // En el 2do parámetro se mandan los elementos que se tienen que estar monitoreando
    // para determinar si se velve a ejecutar el useEffect. Si se manda un arreglo vacío
    // sólo se ejecuta una vez, y en la práctica se vuelve lo mismo que ComponentDidMount
    // Según la documentación de useEffect, si se uiliza alguna suscripción o algo similar,
    // se debe regresar una función que "limpia" lo que se pueda convertir en memory leak
    // o crear basura.
    // Cuidado porque se puede estar disparando una suscripción en cada render, utilizar el
    // 2do parámetro.
    // Pasar [] como segundo parámetro, hace que se ejecute sólo al montar y al desmontar.
    // https://reactjs.org/docs/hooks-reference.html#useeffect

//   useEffect(() => {
//     console.log("Effect");
//     getTodos().then((res) => {
//       console.log(res.data);
//       setTodos(res.data);
//     });
//   }, []);


  return (
    <div>
      <ul className="uk-list uk-list-divider">
          {todos.map((todo, index) => (
              <li key={index}><strong>{todo.title} :</strong> {todo.body}</li>
          ))}
      </ul>
    </div>
  );
};

export default TodoList;

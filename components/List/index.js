import React, { useState, useEffect } from "react";
import styles from "./list.module.scss";
import { inject, observer } from "mobx-react";
import todoList from "../../constants/todoStore";

const List = (props) => {
  const store = props.todoStore;

  return (
    <div className={styles.todoWrapper}>
      <h2>To-do List ({store.todoCount})</h2>
      <hr></hr>
      <ol className={styles.todoList}>
        {store.todos.map((todo, ind) => {
          return (
            <li key={ind}>
              {todo.status ? (
                <p className={styles.uncompleted}>
                  {todo.task}
                  <span className={styles.todoDate}>({todo.date})</span>
                </p>
              ) : (
                <p>
                  {todo.task}
                  <span className={styles.todoDate}>({todo.date})</span>
                </p>
              )}

              <div className={styles.todoAction}>
                {todo.status ? (
                  <button onClick={() => (todo.status = !todo.status)}>
                    Undo
                  </button>
                ) : (
                  <button onClick={() => (todo.status = !todo.status)}>
                    Finish
                  </button>
                )}
                <button onClick={store.deleteTodo}>Delete</button>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default inject("todoStore")(observer(List));

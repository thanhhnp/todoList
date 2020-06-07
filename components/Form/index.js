import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./todoForm.module.scss";
import { inject, observer } from "mobx-react";
// import todoList from "../../constants/todoStore";

const TodoForm = (props) => {
  const store = props.todoStore;

  var todayDate = new Date().getDate();
  var todayMonth = new Date().getMonth() + 1;
  var todayYear = new Date().getFullYear();
  const today = todayDate + "-" + todayMonth + "-" + todayYear;

  const { register, handleSubmit, errors, watch, reset } = useForm();
  const onSubmit = (data) => {
    const newTodo = {
      id: Date.now(),
      task: data.task,
      date: data.day,
      status: false,
    };
    store.addTodo(newTodo);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <label>Add new task *</label>
      <input
        name="task"
        placeholder="Ex:Learning"
        ref={register({ required: true })}
        className={styles.input}
      />
      <input
        name="day"
        value={today}
        ref={register}
        className={styles.hidden}
        readOnly
      />
      {errors.task && <span className={styles.errorText}>(*) is required</span>}

      <input type="submit" value="Add New" className={styles.submit} />
    </form>
  );
};

export default inject("todoStore")(observer(TodoForm));

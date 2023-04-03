import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack} = props;
  return (
    <div className='complete_area'>
      <p className='title'>完了のtodo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className='list_row'>
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}

      </ul>
    </div>
  );
};
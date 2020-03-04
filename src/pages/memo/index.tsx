import * as React from 'react';
import TodoListContainer from '../../container/TodoListContainer';

const MemoPage: React.FC = () => {
  return (
    <div className="container">
        <TodoListContainer></TodoListContainer>
    </div>
  )
}

export default MemoPage;
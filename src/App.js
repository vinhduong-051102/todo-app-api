import './views/Todo/styles.scss'
import './styles/index.scss';
import TodoHeader from './views/Todo/components/TodoHeader'
import TodoBody from './views/Todo/components/TodoBody'
function App() {
  return (
    <div className="todo">
      <div className="todo__title">Todos</div>
      <TodoHeader />
      <TodoBody />
    </div>
  );
}

export default App;

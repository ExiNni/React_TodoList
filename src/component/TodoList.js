import React, {useState, useEffect} from 'react';
import '../css/App.css';


//class App extends Components {

//const App = () => {
function App() {
  //  todos 초기값을 빈 배열로 생성하겠다는 의미
  //todos 는 할 일 목록 들을 저장하는 공간
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log('todos가 변경됨:', todos);
  }, [todos]);

  //newTodo 새로운 할 일을 추가 작성할 수 있는 공간
  const [newTodo, setNewTodo] = useState('');

  // 할 일 추가될 때마다 추가할 수 있는 const 생성
  const addTodo = () => {
    if(newTodo.trim() !== ''){
      // setTodos([...todos, newTodo]) 현재 입력되어있는 할 일 목록
      //배열인 todos를 복사해서 복사한 todos에 새로운 할일인
      // newTodo를 배열에 추가한 후 
      //할 일 목록 설정에 newTodo가 
      //추가된 목록으로 최종 설정해주기 위한 setTodos
      setTodos([...todos, newTodo]);

      //저장된 할일 목록을 초기화 시켜주기 위해 setNetTodo를 초기화 시켜줌
      setNewTodo('');
    }
  };

  // 할 일을 삭제할 때마다 삭제할 수 있는 const 생성
  const removeTodo = (index) => {
    const updateTodos = [...todos];
    updateTodos.splice(index, 1);
    setTodos(updateTodos);
  }

  return (
    <div>
      <h2>useState를 활용한 To do List</h2>
      
      <div>
        <input 
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>할 일 추가하기</button>

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => removeTodo(index)}>삭제하기</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

/*
  예제 코드:
  const newArray = array.map((value, index, array) => {});

  value: 현재 배열 안에 있는 배열의 요소
  index: 배열 안에 있는 자리값
  array: 배열의 원본
  반환값{}: 새로운 배열에서 해당하는 인덱스에 들어갈 값

  {todos.map(todo, index) =>(
    <li key = {index}>
      {todo}
      <button onClick={()=>removeTodo(index)}>삭제하기</button>
    </li>
  )}

  array.map((요소, 자리값, 만약에 새로운  배열이 필요하다면 배열 값 넣어줌)=>{
    리턴값으로 새로운 배열을 구성

  key={index} map 함수로 요소를 생성할 때 각 요소에 고유한 key값을 지정 
  react 각 값에 대한 번호를 부여함으로써 목록을 부여된 번호로 추적하기 위해 사용됨

  });
*/
import  {useSelector, useDispatch} from 'react-redux';
import './App.css';
import {actions} from './store/index'

function App() {
  const counter = useSelector((state)=>state.counter);
  const dispatch = useDispatch();
  const increment = () => {
  dispatch(actions.increment());
  }
  const decrement = () => {
    dispatch(actions.decrement());
  }
  const addBy = () => {
    dispatch(actions.addBy(10));
  }
  const minusBy = () => {
    dispatch(actions.minusBy(10));
  }
  return (
    <div>
      <h1>
        Counter App
      </h1>
      <h2>
        {counter}
      </h2>

      <button onClick={increment}>
        Increment
      </button>
      <button onClick = {decrement}>
        Decrement
      </button>
      <button onClick = {addBy}>
        Add By 10
      </button>
      <button onClick = {minusBy}>
        Minus By 10
      </button>


    </div>
  );
}

export default App;

//BEFORE NPM INSTALL TOOLKIT
// function App() {
//   const counter = useSelector((state)=>state.counter);
//   const dispatch = useDispatch();
//   const increment = () => {
//   dispatch({type:'INC'});
//   }
//   const decrement = () => {
//     dispatch({type:"DEC"});
//   }
//   const addBy = () => {
//     dispatch({type:"ADD", payload: 10});
//   }
//   const minusBy = () => {
//     dispatch({type:"MIN", payload: 10});
//   }
//   return (
//     <div>
//       <h1>
//         Counter App
//       </h1>
//       <h2>
//         {counter}
//       </h2>

//       <button onClick={increment}>
//         Increment
//       </button>
//       <button onClick = {decrement}>
//         Decrement
//       </button>
//       <button onClick = {addBy}>
//         Add By 10
//       </button>
//       <button onClick = {minusBy}>
//         Minus By 10
//       </button>


//     </div>
//   );
// }

// export default App;
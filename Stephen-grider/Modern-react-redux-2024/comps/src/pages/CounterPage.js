// import useCounter from "../hooks/use-Counter";
import { useReducer } from "react";
import { Button } from "../components/Button";

const INCREMENT_COUNT = "increment";
const SET_VALUE_TO_ADD = "change_value_to_add";
const DECREMENT_COUNT = "decrement";
const ADD_VALUE_TO_COUNT = "add_value_to_count";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1
      };
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1
      };
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0
      };
    default:
      return state;
  }
};

const CounterPage = ({ initialCount }) => {
  // const { count, handleClick } = useCounter(initialCount);
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);

  const intialState = {
    count: initialCount,
    valueToAdd: 0
  };

  const [state, dispatch] = useReducer(reducer, intialState);

  const IncrementHandler = () => {
    // setCount(count + 1);
    dispatch({
      type: "increment"
    });
  };
  const DecrementHandler = () => {
    // setCount(count - 1);
    dispatch({
      type: "decrement"
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: "change-value-to-add",
      payload: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "add_value_to_count"
    });
  };

  return (
    <>
      <div>
        <h1>Count is {state.count}</h1>
        <Button onClick={IncrementHandler}>Increment</Button>
        <Button onClick={DecrementHandler}>Decrement</Button>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Add a lot!</label>
          <input
            type="number"
            value={state.valueToAdd || ""}
            onChange={handleChange}
          />
          <Button>Add it </Button>
        </form>
      </div>
    </>
  );
};

export default CounterPage;

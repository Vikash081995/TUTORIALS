import { createContext, ReactNode, useContext, useReducer } from "react";

//=======================
//type for timer ==================
//=======================
export type Timer = {
  name: string;
  duration: number;
};

//=======================
//type for timerState ==================
//=======================
type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

//=======================
//type for timerContext value  ==================
//=======================
type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

//=======================
//creating context  ==================
//=======================
export const TimersContext = createContext<TimersContextValue | null>(null);

//=======================
//creating custom hook  ==================
//=======================
export function useTimersContext() {
  const timersCtx = useContext(TimersContext);

  if (timersCtx === null) {
    throw new Error("Timer context is null");
  }
  return timersCtx;
}

//=======================
//type for provider ==================
//=======================
type TimersContextProviderProps = {
  children: ReactNode;
};
//=======================
//context provider and Reducer
//=======================
const initialState: TimersState = {
  isRunning: true,
  timers: []
};

type StartTimersAction = {
  type: "START_TIMERS";
};
type StopTimersAction = {
  type: "STOP_TIMERS";
};

type AddTimerAction = {
  type: "ADD_TIMERS";
  payload: Timer;
};

type Action = StartTimersAction | StopTimersAction | AddTimerAction;

function timersReducer(state: TimersState, action: Action): TimersState {
  if (action.type === "START_TIMERS") {
    return {
      ...state,
      isRunning: true
    };
  }
  if (action.type === "STOP_TIMERS") {
    return {
      ...state,
      isRunning: false
    };
  }
  if (action.type === "ADD_TIMERS") {
    return {
      ...state,
      timers: [
        ...state.timers,
        {
          name: action.payload!.name,
          duration: action.payload.duration
        }
      ]
    };
  }
  return state;
}

export default function TimersContextProvider({
  children
}: TimersContextProviderProps) {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const ctx: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData) {
      dispatch({ type: "ADD_TIMERS", payload: timerData });
    },
    startTimers() {
      dispatch({ type: "START_TIMERS" });
    },
    stopTimers() {
      dispatch({ type: "STOP_TIMERS" });
    }
  };
  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}

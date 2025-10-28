import { actions } from "./App"

//renders a button that displays an operation symbol
export default function OperationButton({ dispatch, operation}) {
    return <button onClick={() => dispatch({ type: actions.choose_operation,
        payload: { operation }
    })}>{operation}</button>
}
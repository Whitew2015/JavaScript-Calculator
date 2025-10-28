import { actions } from "./App"

//renders a button that display a numerical value
export default function DigitButton({ dispatch, digit}) {
    return <button onClick={() => dispatch({ type: actions.add_digit,
        payload: { digit }
    })}>{digit}</button>
}
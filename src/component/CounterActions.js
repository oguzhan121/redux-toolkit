import { increment,decrement } from "../stores/counter";
import { useDispatch } from "react-redux";

function CounterActions(){
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() =>dispatch(decrement())}>Azalt (-)</button>
            <button onClick={() =>dispatch(increment())}>Artır (+)</button>
        </div>
    )
}

export default CounterActions;
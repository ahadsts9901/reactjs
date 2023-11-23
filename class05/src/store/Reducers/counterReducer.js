const INITIAL_STATE = {
    counter: 0
}

const CounterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'PLUS_COUNTER':
            // state.counter = state.counter + 1
            return {
                ...state,
                counter: state.counter + 1
            }

        case 'MINUS_COUNTER':
            return {
                ...state,
                counter: state.counter - 1
            }

        default:
            return {
                ...state
            }

    }
}

export default CounterReducer


import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddCounterAction, SubtractCounterAction } from './store/Actions/counter'

const Counter = () => {
    const dispatch = useDispatch();
    const {counter} = useSelector(state => state);
    // console.log('selector:- ',selector)

    // const [counter,setCounter] = useState(0)
    const plus = ()=>{
        dispatch(AddCounterAction())
        // setCounter(counter => counter + 1 )
    }
    const minus = ()=>{
        dispatch(SubtractCounterAction())
        // setCounter(counter => counter - 1 )
    }
    return (
        <>
            <div className="counter d-flex align-items-center w-25 m-auto mt-5">
                <button className='btn btn-primary' onClick={plus}>+</button>
                <div className="screen p-4">{counter}</div>
                <button className='btn btn-primary' onClick={minus}>-</button>
            </div>
        </>
    )
}

export default Counter
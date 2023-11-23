import React, { useState,memo } from 'react'
import CompC from './CompC'

const CompB = () => {
    console.log("COMP B")
    return (
        <>
            <h1> I AM COMP B</h1>
        </>
    )
}

export default memo(CompB)
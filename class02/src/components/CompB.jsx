import React, { useState } from 'react'
import CompC from './CompC'

const CompB = ({title}) => {
    return (
        <>
            <div className='heading' >CompB</div>
            <CompC title={title} />
        </>
    )
}

export default CompB
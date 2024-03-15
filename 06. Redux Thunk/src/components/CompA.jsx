import React, { useState,memo } from 'react';

const CompA = () => {
  console.log("COMP A")
    
  return (
    <h1 >I AM COMP A</h1>
  )
}

export default memo(CompA)
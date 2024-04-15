import React from 'react'

function Title ({ turn, className }) {
  return (
    <p
      className={`font-bold text-2xl text ${className}`}
      style={{ fontSize: '2rem', marginBottom: '2rem', color: '#76ABAE' }}
    >
      {turn} دور
    </p>
  )
}
export default Title

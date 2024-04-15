import React, { useState } from 'react'
import LensOutlinedIcon from '@mui/icons-material/LensOutlined'
import CloseIcon from '@mui/icons-material/Close'
import { Close } from '@mui/icons-material'

function Block (props) {
  const [animate, setAnimate] = useState(false)
  // const [innerText, setInnerText] = useState("");
  return (
    <div
      className='w-24 h-24 
        border-2 border-blue2 border-opacity-50 rounded-lg
      bg-blue2 bg-opacity-50
            flex justify-center items-center'
      //      border-2 border-blue1 border-indigo-500/100
      onClick={() => {
        props.onUpdate(props.index)
        setAnimate(true)
      }}
    >
      <div
        className={`
            block ${props.animate ? 'animate-pulse' : ''} 
            w-full h-full
            flex items-center justify-center

            `}
      >
        {(() => {
          if (props.element !== '') {
            return props.element === 'X' ? (
              <CloseIcon
                // fontSize='inherit'
                style={{ color: '#76ABAE', width: '90%', height: '90%' }}
              />
            ) : (
              <LensOutlinedIcon //fontSize='large'
                style={{ color: '#76ABAE', width: '90%', height: '90%' }}
              />
            )
          }
        })()}
      </div>
    </div>
  )
}

export default Block

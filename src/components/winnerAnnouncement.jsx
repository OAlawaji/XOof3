import React from 'react'
function WinnerAnnouncement ({ winner }) {
  return (
    <div className='bg-blue2 absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <button
        className='text p-4 rounded-2xl shadow bg-blue2'
        onClick={() => window.location.reload()}
      >
        <h2 className='text-2xl'>إنتهت اللعبة</h2>
        <p className='mt-2'>
          الفائز هو
          <h1 className='text-2xl'>{winner}</h1>
          إضغط للإعادة
        </p>
      </button>
    </div>
  )
}
export default WinnerAnnouncement

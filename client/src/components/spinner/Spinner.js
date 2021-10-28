import React from 'react'

const Spinner = () => {
  return (
    <div className='text-center my-2'>
      <div className='spinner-border text-success' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  )
}

export default Spinner

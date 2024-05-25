import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err= useRouteError()
    console.log(err)
  return (
    <div>
      something went wrong:{err.data}
      {err.
status
}
    </div>
  )
}

export default Error

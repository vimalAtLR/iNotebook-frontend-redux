import React from 'react'

function Alert(props) {
  return (
    <div>
        <div class="alert alert-success" role="alert">
            {props.message}
        </div>
    </div>
  )
}

export default Alert

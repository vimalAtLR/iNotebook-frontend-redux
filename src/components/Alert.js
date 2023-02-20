import React from 'react'

function Alert(props) {
  return (
    <div style={{height: '50px'}}>
        <div className="alert alert-success" role="alert">
            {props.message}
        </div>
    </div>
  )
}

export default Alert

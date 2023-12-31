import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div>
        <div className="alert alert-success" role="alert">
        <strong>{props.alert}</strong> 
        </div>
    </div>
  )
}

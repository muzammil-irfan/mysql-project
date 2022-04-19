import React from 'react'

const TextArea = ({title,type }) => {
  return (
    <div>
        <textarea type={type}  name={title}    placeholder={`Enter your {title}`} rows="4" cols="70">
        </textarea>
    </div>
  )
}

export default TextArea
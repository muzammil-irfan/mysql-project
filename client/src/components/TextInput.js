import React from 'react'

const TextInput = ({title, type, value, onchange}) => {
  return (
    <div className="col-span-12 py-3 mx-3 sm:col-span-12">
        <label htmlFor={title} className="block text-lg py-1 font-semibold text-gray-300">
            {title}
        </label>
        <input
            type={type}
            name={title}
            id={title}
            value={value}
            onChange={(e)=>onchange(e.target.value)}
            // placeholder={`Enter  {title}`}
            className="mt-1 px-3 py-2 border focus:ring-indigo-500 bg-inherit focus:border-indigo-500 block w-full shadow-sm sm:text-sm   border-gray-800 rounded-md"
        />
    </div>
  )
}

export default TextInput
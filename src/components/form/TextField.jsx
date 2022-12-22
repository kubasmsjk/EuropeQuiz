import React from 'react'
import { useDispatch } from 'react-redux'
import { handleAmountChange } from '../../redux/actions'

const TextField = () => {
    const dispatch = useDispatch()
    const handleChange = (e) => {
      dispatch(handleAmountChange(e.target.value));
    };

  return (
    <div>
            <input type="number" onChange={handleChange}></input>
    </div>
  )
}

export default TextField
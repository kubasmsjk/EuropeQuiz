import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { handleCategoryChange, handleDifficultyChange, handleTypeChange } from '../../redux/actions';

const SelectField = props => {
    const { label, options } = props;
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    
    const handleChange = (e) => {
      setValue(e.target.value);
      switch(label){
        case "Category":
          dispatch(handleCategoryChange(e.target.value));
          break;
          case "Difficulty":
          dispatch(handleDifficultyChange(e.target.value));
          break;
          case "Type":
          dispatch(handleTypeChange(e.target.value));
          break;
          default:
            return;
      }
    }

  return (
    <div>
        <label htmlFor = {label}>{label}</label>
        <select name = {label} value ={value} label = {label} onChange={handleChange}>
            {options.map(({ id, name}) =>(
              <option value ={id} key={id} defaultValue={props.defaultValue || 'Select'}>
                {name}
              </option>
            ))}
            
        </select>
    </div>
  )
}

export default SelectField
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import styles from './selectField.module.scss'

const SelectField = ({ label, options, className, defaultOption }) => {
  const [selectValue, setSelectValue] = useState('Show All')
  const [isSelectOpen, setIsSelectOpen] = useState(false)
  const selectionChangedHandler = (value, label) => {
    setSelectValue(label)
    setIsSelectOpen(!isSelectOpen)
    console.log(value)
  }
  const buttonClickHandler = () => {
    setIsSelectOpen(!isSelectOpen)
  }
  return (
    <div className={styles.selectContainer + ' py-1 ' + className}>
      <button className={styles.selectButton} onClick={buttonClickHandler}>
        <span className={styles.selectLabel}>{label}</span>
        <div className={styles.buttonContent}>
          <span className={styles.selectValue}>{selectValue}</span>
          <div className={styles.buttonAngle}>
            {isSelectOpen ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
          </div>
        </div>
      </button>
      <div className={isSelectOpen ? styles.selectOptions + ' ' + styles.active : styles.selectOptions}>
        <div id={defaultOption} onClick={() => selectionChangedHandler(defaultOption, defaultOption)}>
          {defaultOption}
        </div>
        {options.map((option, index) => {
          return (
            <div id={option.value} key={index} onClick={() => selectionChangedHandler(option.value, option.field)}>
              {option.field}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SelectField

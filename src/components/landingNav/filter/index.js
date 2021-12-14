import SelectField from 'components/fields/selectField'
import React from 'react'
import { filterSelects } from 'store/dummyStore'
import styles from './filter.module.scss'

const LoanFilter = ({ className }) => {
  return (
    <div className={className}>
      <div className={styles.filterWrapper}>
        <h3 className="pt-1">Choose the loan that is right for you</h3>
        <div className={styles.filterBody}>
          {filterSelects.map((select) => {
            return (
              <SelectField
                label={select.label}
                options={select.options}
                className={select.className}
                defaultOption={select.default}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default LoanFilter

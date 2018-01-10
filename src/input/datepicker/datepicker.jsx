import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'
import { getDaysInMonth, startOfMonth, endOfMonth, getISODay, addDays, format, isSameMonth, isSameDay } from 'date-fns'
import Day from './day'
import styles from './datepicker.styles.scss'

const Datepicker = ({ input, placeholder, type, meta }) => {
  const curr = new Date()
  const daysInMonth = getDaysInMonth(curr)
  const start = startOfMonth(curr)
  const end = endOfMonth(curr)
  const daysToFillBefore = getISODay(start) - 1 /* monday is 1 and we start calendar to monday */

  const month = []
  let week = []

  const addDate = (date) => {
    if (getISODay(date) === 1 /* monday */) {
      week = []
      month.push(week)
    }
    week.push({ date, sameMonth: isSameMonth(date, curr) })
  }

  // fills previous month to begin ISO date
  for (let i = -1 * daysToFillBefore; i < 0; i += 1) {
    addDate(addDays(start, i))
  }

  // fills month
  let lastDate
  for (let i = 0; i < daysInMonth; i += 1) {
    lastDate = addDays(start, i)
    addDate(lastDate)
  }

  // fills next month to complete week
  while (getISODay(lastDate) !== 7 /* sunday */) {
    lastDate = addDays(lastDate, 1)
    addDate(lastDate)
  }

  console.log({ month })

  return (
    <div>
      <input {...input} />
      {meta.active || true &&
        <div className={styles.datepicker}>
          <h2>{format(curr, 'dddd D MMMM YYYY')}</h2>
          <table className={styles.days}>
            <tbody>
              {month.map(week => (
                <tr key={week[0].date}>
                  {week.map(day => <td key={day.date}><Day selected={isSameDay(curr, day.date)} secondary={!day.sameMonth}>{day.date}</Day></td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
    </div>
  )
}

Datepicker.propTypes = {
  input: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
    submitFailed: PropTypes.bool,
  }).isRequired,
}

Datepicker.defaultProps = {
  placeholder: undefined,
}

export default onlyUpdateForPropTypes(Datepicker)

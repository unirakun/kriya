import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'
import router from 'hoc-little-router'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import Input from '../../../src/input'
import Button from '../../../src/button'
import { numberOptions, stringOptions } from '../../constant'
import validate from './input.validate'
import styles from './input.styles.scss'

const formName = 'INPUT'

const Form = ({ style, className }) => {
  const classes = classnames(
    styles.form,
    className,
  )

  return (
    <form
      className={classes}
      style={style}
      id={formName}
    >
      <h1>Examples INPUT</h1>
      {/* form input */}
      <div>
        <Input placeholder="input" name="input" required label="Input label" />
        <Input type="text" placeholder="input2" name="input2" />
        <Input type="textarea" placeholder="textarea" name="textArea" />
        <Input type="select" placeholder="select" name="select" options={stringOptions} />
      </div>
      <div>
        <Input type="selectbox" placeholder="selectbox" name="selectbox" options={numberOptions} required />
        <Input type="selectbox" placeholder="selectbox multi" name="selectbox_multi_string" options={stringOptions} multi />
        <Input type="selectbox" placeholder="selectbox multi" name="selectbox_multi_number" options={numberOptions} multi />
        <Input type="checkbox" name="checkbox" />
      </div>
      <div>
        <Input type="selectbox" placeholder="selectbox creatable" name="selectbox_creatable" options={stringOptions} creatable promptTextCreator={e => `Add ${e}`} />
        <Input type="selectbox" placeholder="selectbox creatable" name="selectbox_creatable_multi" options={stringOptions} creatable promptTextCreator={e => `"${e}" add to family`} multi />
      </div>
      <Button type="submit" primary name="SUBMIT">Submit</Button>
    </form>
  )
}

Form.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
}

Form.defaultProps = {
  style: {},
  className: '',
}

export default router('INPUT')(reduxForm({ form: formName, validate })(onlyUpdateForPropTypes(Form)))

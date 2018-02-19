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

  const inputValidate = [value => (value ? undefined : 'You don\'t really have a brain, do you?')]
  const textAreaValidate = [value => (value ? undefined : 'Rethorical question, don\'t answer it.')]

  return (
    <form
      className={classes}
      style={style}
      id={formName}
    >
      <h1>Examples INPUT</h1>
      {/* form input */}
      <h2>General examples</h2>
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
      <h2>Required INPUT</h2>
      <div>
        <Input name="defaultRequiredInput" label="Default required input" placeholder="Any idea?" required />
        <Input name="customRequiredInput" label="Custom required input" placeholder="Thoughts??" required validate={inputValidate} />
        <Input name="defaultRequiredTextarea" label="Default required Text area" placeholder="Anything???" type="textarea" required />
        <Input name="customRequiredTextarea" label="Custom required Text area" placeholder="Can you even think???!" type="textarea" required validate={textAreaValidate} />
      </div>
      <div>
        <Input name="customRequiredSelectbox" label="Custom required Select box" placeholder="Can you even think???!" type="selectbox" required validate={[console.log]} options={stringOptions} />
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

import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'
import classnames from 'classnames'
import Input from '../../../src/input'
import Group from '../../../src/group'
import Button from '../../../src/button'
import { options } from '../../constant'
import styles from './group.styles.scss'

const formName = 'GROUP'

const Form = ({ style, className }) => {
  const classes = classnames(
    styles.form,
    className,
  )

  return (
    <form id="navbar-form" style={style} className={styles.form}>
      <h1>Examples GROUP HORIZONTAL</h1>
      <Group>
        <Input type="input" name="INPUT" placeholder="input" />
        <Input type="selectbox" options={options} name="SELECTBOX" placeholder="selectbox" clearable={false} />
        <Button name="BUTTON" primary submit>Button</Button>
      </Group>
      <h1>Examples GROUP VERTICAL</h1>
      <Group vertical>
        <Button name="BUTTON" primary submit>Button</Button>
        <Input type="input" name="INPUT" placeholder="input" />
        <Input type="selectbox" options={options} name="SELECTBOX" placeholder="selectbox" clearable={false} />
      </Group>
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

export default reduxForm({ form: formName })(Form)

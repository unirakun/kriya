import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'
import router from 'hoc-little-router'
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
    <form id="navbar-form" style={style} className={classes}>
      <h1>Examples GROUP HORIZONTAL</h1>
      <Group>
        <Input type="input" name="INPUT" placeholder="input" />
        <Input type="selectbox" options={options} name="SELECTBOX" placeholder="selectbox" clearable={false} />
        <Button name="BUTTON" primary submit>Button</Button>
      </Group>
      <h1>Examples GROUP VERTICAL</h1>
      <Group vertical>
        <Input type="input" name="INPUT" placeholder="input" />
        <Input type="selectbox" options={options} name="SELECTBOX" placeholder="selectbox" clearable={false} />
        <Button name="BUTTON" primary submit>Button</Button>
      </Group>

      <div className={styles.separator} />
      <Group vertical className={styles.group2}>
        <Input type="selectbox" options={options} name="SELECTBOX" placeholder="selectbox" clearable={false} />
        <Input type="selectbox" options={options} name="SELECTBOX" placeholder="selectbox" clearable={false} />
      </Group>
      <Button className={styles.buttongroup2} name="BUTTON" primary submit>Button</Button>
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

export default router('GROUP')(reduxForm({ form: formName })(Form))

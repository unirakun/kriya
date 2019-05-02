import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'
import classnames from 'classnames'
import forRoute from '../../helpers/router'
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
        <Input name="INPUT" placeholder="input" form={formName} />
        <Input type="selectbox" options={options} name="SELECTBOX" placeholder="selectbox" clearable={false} form={formName} />
        <Button name="BUTTON" primary submit>Button</Button>
      </Group>
      <h1>Examples GROUP VERTICAL</h1>
      <Group vertical>
        <Input name="INPUT" placeholder="input" form={formName} />
        <Input type="selectbox" options={options} name="SELECTBOX" placeholder="selectbox" clearable={false} form={formName} />
        <Button name="BUTTON" primary submit>Button</Button>
      </Group>

      <div className={styles.separator} />
      <Group vertical className={styles.group2}>
        <Input type="selectbox" options={options} name="SELECTBOX" placeholder="selectbox" clearable={false} form={formName} />
        <Input type="selectbox" options={options} name="SELECTBOX" placeholder="selectbox" clearable={false} form={formName} />
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

export default forRoute('GROUP')(reduxForm({ form: formName })(Form))

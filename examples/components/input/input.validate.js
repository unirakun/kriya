export default (values) => {
  const errors = {}
  if (!values.input2) {
    errors.input2 = 'input2 is required'
  }

  if (values.textArea && values.textArea.includes('l')) {
    errors.textArea = 'input2 is required'
  }

  if (values.selectbox && values.selectbox.label.includes('R')) {
    errors.selectbox = 'input2 is required'
  }
  console.log(values.select)
  if (values.select && values.select.includes('value1')) {
    errors.select = 'input2 is required'
  }

  return errors
}

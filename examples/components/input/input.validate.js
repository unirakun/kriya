export default (values) => {
  const errors = {}
  if (!values.input2) {
    errors.input2 = 'input2 is required'
  }

  if (values.textArea && values.textArea.includes('l')) {
    errors.textArea = 'l is for lol'
  }

  if (values.selectbox && values.selectbox.label.includes('R')) {
    errors.selectbox = 'Rick is bad !'
  }

  if (values.select && values.select.includes('value1')) {
    errors.select = 'Rick is bad !'
  }

  return errors
}

import React from 'react'

function useForm(intialFormState = {}, submitFn, submitParams = null, onSubmitSuccess = () => { }) {

  const [formData, setFormData] = React.useState(intialFormState)
  const [formErrors, setFormErrors] = React.useState({})

  const handleChange = ({ target: { name, value, type, checked } }) => {
    const newValue = type === 'checkbox' ? checked : value
    const updatedFormData = { ...formData, [name]: newValue }
    const updatedErrors = { ...formErrors, [name]: '' }
    console.log(updatedFormData)
    setFormData(updatedFormData)
    setFormErrors(updatedErrors)
  }

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      console.log(formData)
      const response = await submitFn(formData, submitParams)
      console.log('initial res', response)
      onSubmitSuccess(response)
    } catch (err) {
      console.log(err.response)
      // setFormErrors(err.response.data.errors)
    }
  }

  return { formData, handleChange, setFormData, formErrors, setFormErrors, handleSubmit }
}

export default useForm
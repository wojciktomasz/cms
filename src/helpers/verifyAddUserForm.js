import { displayErrorMessagesAddUSer } from '../helpers/displayErrorMessagesAddUser'
import { errors } from '../helpers/errorMessages'
import { displayErrorFor } from '../helpers/displayErrorFor'
import users from '../data/users.json'

export const verifyAddUserForm = (dispatchGetFormData, dispatchGetFormError, dispatchGetDoubleUsers, formData) => {

  const allFieldsFilledIn = formData.name.length > 0 &&
    formData.lastName.length > 0 &&
    formData.email.length > 0 &&
    formData.phone.length > 0

  const emailValidationRegexp = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/gi
  const emailValidation = formData.email.match(emailValidationRegexp)

  const phoneVelidationRegexp = /[0-9]+$/gi
  const phoneValidation = formData.phone.match(phoneVelidationRegexp)

  const doubleUserValidation = users.filter(user => user.email === formData.email)
  console.log(doubleUserValidation.length)

  const doubleUserValidationInput = dispatchGetDoubleUsers.length !== undefined ? dispatchGetDoubleUsers.filter(user => user.email === formData.email) : 0
  console.log(dispatchGetDoubleUsers.filter(user => user.email === formData.email))


  if (allFieldsFilledIn && emailValidation !== null && phoneValidation !== null && doubleUserValidation.length === 0 && doubleUserValidationInput.length === 0) {
    dispatchGetFormError(errors.userAdded) && displayErrorFor(dispatchGetFormError, 5000)
    return dispatchGetFormData(formData)
  }

  displayErrorMessagesAddUSer(allFieldsFilledIn, emailValidation, phoneValidation, doubleUserValidation, doubleUserValidationInput, dispatchGetFormError, formData, dispatchGetFormError)
}
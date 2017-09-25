import { displayErrorMessagesAddUSer } from '../helpers/displayErrorMessagesAddUser'
import { errors } from '../helpers/errorMessages'
import { displayErrorFor } from '../helpers/displayErrorFor'

export const verifyAddUserForm = (dispatchGetFormData, dispatchGetFormError, formData) => {

  const allFieldsFilledIn = formData.name.length > 0 &&
    formData.lastName.length > 0 &&
    formData.email.length > 0 &&
    formData.phone.length > 0

  const emailValidationRegexp = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/gi
  const emailValidation = formData.email.match(emailValidationRegexp)

  const phoneVelidationRegexp = /[0-9]+$/gi
  const phoneValidation = formData.phone.match(phoneVelidationRegexp)

  if (allFieldsFilledIn && emailValidation !== null && phoneValidation !== null) {
    dispatchGetFormError(errors.userAdded) && displayErrorFor(dispatchGetFormError, 5000)
    return dispatchGetFormData(formData)
  }

  displayErrorMessagesAddUSer(allFieldsFilledIn, emailValidation, phoneValidation, dispatchGetFormError, formData, dispatchGetFormError)
}
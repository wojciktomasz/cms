import { errors } from '../helpers/errorMessages'
import { displayErrorFor } from '../helpers/displayErrorFor'

export const displayErrorMessagesAddUSer = (allFieldsFilledIn, emailValidation, phoneValidation, doubleUserValidation, dispatchGetFormError, formData) => {

  const emptyField = allFieldsFilledIn === false ? errors.errorNotAllFieldsAreFilledIn : null
  emptyField && dispatchGetFormError(emptyField) && displayErrorFor(dispatchGetFormError, 5000)

  const emailIsValid = formData.name.length > 0 && formData.lastName.length > 0 && formData.phone.length > 0 && emailValidation === null ? errors.errorEmailIsNotValid : null
  emailIsValid && dispatchGetFormError(emailIsValid) && displayErrorFor(dispatchGetFormError, 5000)

  const phoneIsValid = formData.name.length > 0 && formData.lastName.length > 0 && emailValidation !== null && phoneValidation === null ? errors.errorPhoneIsNotValid : null
  phoneIsValid && dispatchGetFormError(phoneIsValid) && displayErrorFor(dispatchGetFormError, 5000)

  const allDataIsValid = formData.name.length > 0 && formData.lastName.length > 0 && emailValidation !== null && phoneValidation !== null ? errors.userAdded : null
  allDataIsValid && dispatchGetFormError(allDataIsValid) && displayErrorFor(dispatchGetFormError, 5000)

  const doubleUser = doubleUserValidation.length > 0 ? errors.userExists : null
  doubleUser && dispatchGetFormError(doubleUser) && displayErrorFor(dispatchGetFormError, 5000)
}
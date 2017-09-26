import { errors } from '../helpers/errorMessages'
import { errorHandle } from './errorMessageHandle'

export const displayErrorMessagesAddUSer = (allFieldsFilledIn, emailValidation, phoneValidation, doubleUserValidation, doubleUserValidationInput, dispatchGetFormError, formData) => {

  const emptyField = allFieldsFilledIn === false ? errors.errorNotAllFieldsAreFilledIn : null
  errorHandle(emptyField, dispatchGetFormError)

  const emailIsValid = formData.name.length > 0 && formData.lastName.length > 0 && formData.phone.length > 0 && emailValidation === null ? errors.errorEmailIsNotValid : null
  errorHandle(emailIsValid, dispatchGetFormError)

  const phoneIsValid = formData.name.length > 0 && formData.lastName.length > 0 && emailValidation !== null && phoneValidation === null ? errors.errorPhoneIsNotValid : null
  errorHandle(phoneIsValid, dispatchGetFormError)

  const allDataIsValid = formData.name.length > 0 && formData.lastName.length > 0 && emailValidation !== null && phoneValidation !== null ? errors.userAdded : null
  errorHandle(allDataIsValid, dispatchGetFormError)

  const doubleUser = doubleUserValidation.length > 0 ? errors.userExists : null
  errorHandle(doubleUser, dispatchGetFormError)

  const doubleUserInput = doubleUserValidationInput.length > 0 ? errors.userExists : null
  errorHandle(doubleUserInput, dispatchGetFormError)
}
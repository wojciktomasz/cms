import { errors } from '../helpers/errorMessages'

export const displayErrorMessagesAddUSer = (allFieldsFilledIn, emailValidation, phoneValidation, dispatchGetFormError, formData) => {

  const displayErrorFor = ms => setTimeout(() => dispatchGetFormError(null), ms)

  const emptyField = allFieldsFilledIn === false ? errors.errorNotAllFieldsAreFilledIn : null
  emptyField && dispatchGetFormError(emptyField) && displayErrorFor(5000)

  const emailIsValid = formData.name.length > 0 && formData.lastName.length > 0 && formData.phone.length > 0 && emailValidation === null ? errors.errorEmailIsNotValid : null
  emailIsValid && dispatchGetFormError(emailIsValid) && displayErrorFor(5000)

  const phoneIsValid = formData.name.length > 0 && formData.lastName.length > 0 && emailValidation !== null && phoneValidation === null ? errors.errorPhoneIsNotValid : null
  phoneIsValid && dispatchGetFormError(phoneIsValid) && displayErrorFor(5000)

  const allDataIsValid = formData.name.length > 0 && formData.lastName.length > 0 && emailValidation !== null && phoneValidation !== null ? errors.userAdded : null
  allDataIsValid && dispatchGetFormError(allDataIsValid) && displayErrorFor(5000)
}
import { displayErrorMessagesAddUSer } from '../helpers/displayErrorMessagesAddUser'

export const verifyAddUserForm = (dispatchGetFormData, dispatchGetFormError, formData) => {

  const allFieldsFilledIn = formData.name.length > 0 &&
    formData.lastName.length > 0 &&
    formData.email.length > 0 &&
    formData.phone.length > 0

  const emailValidationRegexp = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/gi
  const emailValidation = formData.email.match(emailValidationRegexp)

  const phoneVelidationRegexp = /[0-9]+$/gi
  const phoneValidation = formData.phone.match(phoneVelidationRegexp)

    allFieldsFilledIn && emailValidation !== null && phoneValidation !== null ? dispatchGetFormData(formData) : null
    displayErrorMessagesAddUSer(allFieldsFilledIn, emailValidation, phoneValidation, dispatchGetFormError, formData)
}
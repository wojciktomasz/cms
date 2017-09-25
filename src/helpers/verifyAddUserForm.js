import { displayErrorMessagesAddUSer } from '../helpers/displayErrorMessagesAddUser'

export const verifyAddUserForm = (dispatchGetFormData, dispatchGetFormError, formData) => {

  const allFieldsFilledIn = formData.name.length > 0 &&
    formData.lastName.length > 0 &&
    formData.email.length > 0 &&
    formData.phone.length > 0

    allFieldsFilledIn ? dispatchGetFormData(formData) : null
    displayErrorMessagesAddUSer(allFieldsFilledIn, dispatchGetFormError, formData)
}
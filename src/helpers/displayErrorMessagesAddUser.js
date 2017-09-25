import { errors } from '../helpers/errorMessages'

export const displayErrorMessagesAddUSer = (allFieldsFilledIn, dispatchGetFormError, formData) => {

  const displayErrorFor = ms => setTimeout(() => dispatchGetFormError(null), ms)

  const emptyField = allFieldsFilledIn === false ? errors.errorNotAllFieldsAreFilledIn : null
  emptyField && dispatchGetFormError(emptyField) && displayErrorFor(5000)

}
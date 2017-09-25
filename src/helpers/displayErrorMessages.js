import { errors } from '../helpers/errorMessages'
import { displayErrorFor } from '../helpers/displayErrorFor'

export const displayErrorMessages = (userEmailVerification, userPasswordVerification, userTypeVerification, dispatchGetError, formData) => {

  const errorMessage = userEmailVerification === [] || (userEmailVerification.length > 0 && !userPasswordVerification) || !userPasswordVerification || !userTypeVerification ? errors.errorInvalidCredentials : null
  errorMessage && dispatchGetError(errorMessage) && displayErrorFor(dispatchGetError, 5000)

  const errorMessageEmailFieldEmpty = formData.email === "" && formData.password !== "" ? errors.errorNoEmail : null
  errorMessageEmailFieldEmpty && dispatchGetError(errorMessageEmailFieldEmpty) && displayErrorFor(dispatchGetError, 5000)

  const errorMessagePasswordFieldEmpty = formData.password === "" && formData.email !== "" ? errors.errorNoPassword : null
  errorMessagePasswordFieldEmpty && dispatchGetError(errorMessagePasswordFieldEmpty) && displayErrorFor(dispatchGetError, 5000)

  const errorMessageEmailAndPasswordFieldEmpty = formData.password === "" && formData.email === "" ? errors.errorNoEmailAndPassword : null
  errorMessageEmailAndPasswordFieldEmpty && dispatchGetError(errorMessageEmailAndPasswordFieldEmpty) && displayErrorFor(dispatchGetError, 5000)

}
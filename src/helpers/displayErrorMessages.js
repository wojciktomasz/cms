import { errors } from '../helpers/errorMessages'

export const displayErrorMessages = (userEmailVerification, userPasswordVerification, userTypeVerification, dispatchGetError, formData) => {

  const displayErrorFor = ms => setTimeout(() => dispatchGetError(null), ms)

  const errorMessage = userEmailVerification === [] || (userEmailVerification.length > 0 && !userPasswordVerification) || !userPasswordVerification || !userTypeVerification ? errors.errorInvalidCredentials : null
  errorMessage && dispatchGetError(errorMessage) && displayErrorFor(5000)

  const errorMessageEmailFieldEmpty = formData.email === "" && formData.password !== "" ? errors.errorNoEmail : null
  errorMessageEmailFieldEmpty && dispatchGetError(errorMessageEmailFieldEmpty) && displayErrorFor(5000)

  const errorMessagePasswordFieldEmpty = formData.password === "" && formData.email !== "" ? errors.errorNoPassword : null
  errorMessagePasswordFieldEmpty && dispatchGetError(errorMessagePasswordFieldEmpty) && displayErrorFor(5000)

  const errorMessageEmailAndPasswordFieldEmpty = formData.password === "" && formData.email === "" ? errors.errorNoEmailAndPassword : null
  errorMessageEmailAndPasswordFieldEmpty && dispatchGetError(errorMessageEmailAndPasswordFieldEmpty) && displayErrorFor(5000)

}
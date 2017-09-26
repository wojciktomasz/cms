import { errors } from '../helpers/errorMessages'
import { errorHandle } from './errorMessageHandle'

export const displayErrorMessages = (userEmailVerification, userPasswordVerification, userTypeVerification, dispatchGetError, formData) => {

  const errorMessage = userEmailVerification === [] || (userEmailVerification.length > 0 && !userPasswordVerification) || !userPasswordVerification || !userTypeVerification ? errors.errorInvalidCredentials : null
  errorHandle(errorMessage, dispatchGetError)

  const errorMessageEmailFieldEmpty = formData.email === "" && formData.password !== "" ? errors.errorNoEmail : null
  errorHandle(errorMessageEmailFieldEmpty, dispatchGetError)

  const errorMessagePasswordFieldEmpty = formData.password === "" && formData.email !== "" ? errors.errorNoPassword : null
  errorHandle(errorMessagePasswordFieldEmpty, dispatchGetError)

  const errorMessageEmailAndPasswordFieldEmpty = formData.password === "" && formData.email === "" ? errors.errorNoEmailAndPassword : null
  errorHandle(errorMessageEmailAndPasswordFieldEmpty, dispatchGetError)

}
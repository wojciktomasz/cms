import { errors } from '../helpers/errorMessages'

export const errorOnEmailField = (errorMessage) => {
  const errorCheck = (error) => checker(error, errorMessage)
  const invalidBothFields = errorCheck(errors.errorNoEmailAndPassword) || errorCheck(errors.errorInvalidCredentials)
  return (errorCheck(errors.errorNoEmail) || invalidBothFields)
}

export const errorOnPasswordField  = (errorMessage) => {
  const errorCheck = (error) => checker(error, errorMessage)
  const invalidBothFields = errorCheck(errors.errorNoEmailAndPassword) || errorCheck(errors.errorInvalidCredentials)
  return (errorCheck(errors.errorNoPassword) || invalidBothFields)
}

const checker = (error, errorMessage) => errorMessage === error
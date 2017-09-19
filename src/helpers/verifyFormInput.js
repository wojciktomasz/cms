import users from '../data/users.json'
import { displayErrorMessages } from '../helpers/displayErrorMessages'

export const verifyFormInput = (dispatchGetUser, dispatchGetError, loadMain, formData) => {
  const userEmailVerification = users.filter(user => user.email === formData.email)
  const userPasswordVerification = userEmailVerification[0] && (userEmailVerification[0].password === formData.password)
  const userTypeVerification = userPasswordVerification && userEmailVerification[0].type === 'admin'

  userPasswordVerification && userTypeVerification ? dispatchGetUser(formData) : dispatchGetUser(null)
  userPasswordVerification && userTypeVerification && loadMain()

  displayErrorMessages(userEmailVerification, userPasswordVerification, userTypeVerification, dispatchGetError, formData)
}
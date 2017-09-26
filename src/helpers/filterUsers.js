export const filteredUsers = (users, query) => {

  const lowQuery = query.toLowerCase()
  const objectCheck = (key, object) => object[key].toLowerCase().includes(lowQuery)

  return users.filter(user =>
    objectCheck('email', user)  ||
    objectCheck('name', user) ||
    objectCheck('lastName', user) ||
    objectCheck('type', user))
}


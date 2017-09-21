export const filteredUsers = (data, query) => data.filter(user => user.email.includes(query) ||
  user.name.includes(query) ||
  user.name.toLowerCase().includes(query) ||
  user.lastName.includes(query) ||
  user.lastName.toLowerCase().includes(query) ||
  user.type.includes(query))


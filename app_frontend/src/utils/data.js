export const userQuery = (userId) => {
  let query = `*[_type=="user" && _id=="${userId}"]`
  return query
}
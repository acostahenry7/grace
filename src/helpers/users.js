const users = []

//User Joins
function joinUser(id, username, email, room){

    const user = {id, username, email, room}
    users.push(user)

    return user
}

//Get Current User
function getCurrentUser(id) {
   return users.find( user => user.id === id)
}


//User leaves
function userLeaves(id) {
    const index =  users.findIndex(user => user.id === id)

     if (index !== -1) {
        console.log(users.splice(index, 1)[0]);
        return users.splice(index, 1)[0]
     }
}

module.exports = {
   joinUser,
   getCurrentUser,
   userLeaves
}

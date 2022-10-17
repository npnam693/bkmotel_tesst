import Room from '../models/Room.js'

export const getRooms = (req, res) => {
    res.send('THIS WORK')
}



// // [POST] /courses/store
// export const store = (req, res, next) => {
//     const formData = req.body
//     const course = new Course(formData)
//     course
//         .save()
//         .then(() => res.redirect('/me/stored/courses'))
//         .catch(error => {})
// }




export const createRoom = (req, res) => {
    res.send('Create room work cc')
}

export const deleteRoom = (req, res) => {
    res.send('delete room')
}

export const RoomMenu = (req, res) => {
    res.send('menu room')
}
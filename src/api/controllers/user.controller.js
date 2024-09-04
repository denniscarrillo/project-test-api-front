import User from '../models/user-model.js'

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().limit(10)
    res.json(users)
  } catch (error) {
    console.error('Error al obtener los usuarios:', error)
  }
}

export const getUser = async (req, res) => {
  const { id } = req.params
  try {
    const user = await User.findById(id)
    res.json(user)
  } catch (error) {
    console.error('Error al obtener el usuario:', error)
  }
}

import Mongoose from 'mongoose'

// URI de conexión a MongoDB Cloud (MongoDB Atlas)
const URI = 'mongodb+srv://dennisjosecarrillo2018:6eYZCXLfmAc3uiAk@clusteruc.bbcbd.mongodb.net/under_control_data'

export const openConnectionDB = async () => {
    try {
        await Mongoose.connect(URI)
        console.log('MongoDB connection successfully')
    } catch (error) {
        console.error(error.message)
    }
}

export const closeConnectionDB = async () => {
    try {
        await Mongoose.connection.close()
        console.log('MongoDB connection closed successfully')
    } catch (error) {
        console.error(error.message)
    }
}
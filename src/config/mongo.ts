import mongoose from 'mongoose';
const DB_URI = process.env.DB_URI ?? ''

/**
 * Inicializar la base de datos de mongo
 * @returns 
 */
const initDB = async () => {
    try {
        const dbConnection = await mongoose.connect(DB_URI)
        console.log(`👉 Se conecto correctamente`)
        return dbConnection
    } catch (err) {
        return err
    }
}

export { initDB }
import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// // Load environment variables from a .env file into process.env
// dotenv.config();

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@blog-app.fejvt.mongodb.net/?retryWrites=true&w=majority&appName=blog-app`;
    try {
        await mongoose.connect(URL, {});
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database: ', error);
    }
};

export default Connection;
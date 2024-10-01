import user from "../model/user.js";
import bcrypt from 'bcrypt';
export const signupUser = async (request, response) => {
    try {
        // const salt = await bcrypt.genSalt();
        // const hashedPassword = await bcrypt.hash(request.body.password, salt);
        const hashedPassword = await bcrypt.hash(request.body.password, 10);
        const user = { username: request.body.username, name: request.body.name, password: hashedPassword }
        const newUser = new user(userData);
        await newUser.save();

        return response.status(200).json({ msg: 'Signup successful' });
    } catch (error) {
        console.error('Error during signup:', error);
        return response.status(500).json({ msg: 'Signup failed', error: error.message });
    }
};

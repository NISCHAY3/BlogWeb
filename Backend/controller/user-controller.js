import user from "../model/user.js";

export const signupUser = async (request, response) => {
    try {
        const userData = request.body;
        const newUser = new user(userData);
        await newUser.save();

        return response.status(200).json({ msg: 'Signup successful' });
    } catch (error) {
        console.error('Error during signup:', error);
        return response.status(500).json({ msg: 'Signup failed', error: error.message });
    }
};

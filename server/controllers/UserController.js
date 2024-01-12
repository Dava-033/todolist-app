import User from "../models/UserModel.js"

export const getUsers = async(req, res) => {
    try{
        const response = await User.findAll();
        response.status(200).json(response);
    } catch(error){
        console.log(error.message);
    }
}
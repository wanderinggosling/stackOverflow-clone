import User from '../models/auth.js'

export const getAllUsers=async(req,res)=>{
    try {
        const allUsers=await User.find();
        const allUserDetails=[];
        allUsers.forEach((users)=>{allUserDetails.push({_id : users._id, name: users.name, tags: users.tag, about: users.about, joinedOn: users.joinedOn})});
        res.status(200).json(allUserDetails)
    } catch (error) {
        res.status(404).json(error)
    }

}
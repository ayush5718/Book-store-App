import User from "../models/user.model.js";
import bcrypt from "bcrypt";
// user signup 
export const signup=async (req,res)=>{
    try{
        const {name,email,password}=req.body
        const user= await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User already exists"});
        }
       const hashpassword= await bcrypt.hash(password,10);
            const createdUser=new User({
                name:name,
                email:email,
                password:hashpassword
            })
      await  createdUser.save()
        res.status(201).json({message:"User created Successfully",
            user:{
                _id:createdUser._id,
                name:createdUser.name,
                email:createdUser.email
            }
        });
    }
    catch(error){
        console.log("Error:",error)
        res.status(500).json({message:"Internel Server Error"});;
    }
}


// user login
// export const login = async (req,res)=>{
//     try{
//         const {email,password}=req.body;
//         const user= await User.findOne({email})
//         const isMatch= await bcrypt.compare(password,user.password)
//         if(!isMatch){
//             return res.status(400).json({message:"Invalid Credentials"});
//         }
//         else{
//             return res.status(200).json({message:"login Successful",
//             user:{
//                 _id:user._id,
//                 name:user.name,
//                 email:user.email
//             }});
//         }
//     }
//     catch(error){
//         console.log("Internal Server Error",error);
//     }
// }

// user login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Credentials" });
        } else {
            return res.status(200).json({
                message: "Login Successful",
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email
                }
            });
        }
    } catch (error) {
        console.log("Internal Server Error", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
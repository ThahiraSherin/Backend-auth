const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET} = require('../utilis/config')

const authController = {
    register: async (req, res) => {
        try{
            const { name, email, password} = req.body;

            const existingUser = await User.find({ email });

            if(existingUser.length > 0 ){
                 return res.status(400).json({ message: 'User already exists' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = new User({
                name,
                email,
                password: hashedPassword
            });
            await newUser.save();

             res.status(201).json({ message: 'User registered successfully', user: newUser });
            }catch (error) {
                 res.status(500).json({ message: 'Registration failed', error: error.message });
            }
    },
    login: async (req, res) => {
        try {
            const {email, password} = req.body;

            const user = await User.find({ email});

            if(user.length === 0) {
                return res.status(400).json ({message: "User not found"});
            }

            const isPasswordValid = await bcrypt.compare(password, user[0].password);
            
            if(!isPasswordValid) {
                return res.status(400).json ({ message: "Invalid Password"});
            }
            //generate a jwt token
            const token = jwt.sign({ id: user[0]._id}, JWT_SECRET, {expiresIn: '1h'})


            res.status(200).json({message: "Login Successfull", token: token});

        }catch (error) {
            res.status(500).json ({message: "login failed", error: error.message})
        }
    },
    me: async (req,res) => {
        try  {
            //get the user id from the request object
            const userId = req.userId;

            //find the user by id
            const user = await User.findById(userId);

            //if the user does not exist, send an error response
            if(!user){
                return res.status(404).json({message: "User not found"});
            }

            //send the user data as a response
            res.status(200).json({user : {id: user._id, name: user.name, email: user.email}});
        }catch (error)  {
            res.status(500).json ({
                message: "Error fetching user data", error: error.message
            });
        }
    }
}
module.exports = authController
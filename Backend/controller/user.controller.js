const express = require("express");
const ErrorHandler = require("../utils/ErrorHandler");
// const { route } = require("../app");
const path = require("path");
const router = express.Router();
const { upload } = require("../multer")
const User = require("../model/user.model");
const fs = require("fs");
const sendMail = require("../utils/sendMails");
const sendToken = require("../utils/jwtToken");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const jwt = require("jsonwebtoken");
const { isAuthenticated } = require("../middleware/auth");
const { error } = require("console");




router.post("/create-user", upload.single("file"), async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const userEmail = await User.findOne({ email });

        if (userEmail) {
            const filename = req.file.filename;
            const filePath = `uploads/${filename}`;
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({ message: "Error deleting file" });
                }
                else {
                    res.json({ message: "file deleted successfully" })
                }

            })
            return next(new ErrorHandler("User already exists", 400));
        }



        const filename = req.file.filename;
        const fileUrl = path.join(filename);

        const user = {
            name: name,
            email: email,
            password: password,
            avatar: fileUrl
        };

        const activationToken = createActivationToken(user);
        const activationUrl = ` http://localhost:5173/activation/${activationToken}`
        try {
            await sendMail({
                email: user.email,
                subject: "Activate Your Account",
                message: `Hello ${user.name}, please click on link to activate your account:${activationUrl}`
            })
            res.status(201).json({
                success: true,
                message: `please your check your mail`
            })

        } catch (err) {
            return next(new ErrorHandler(err.message, 500))
        }
    } catch (err) {
        return next(new ErrorHandler(err.message, 400));
    }
});

const createActivationToken = (user) => {

    return jwt.sign(user, process.env.ACTIVATION_SECRET, {
        expiresIn: "5m",
    });

};

// acivate user

router.post(
    "/activation",
    catchAsyncErrors(async (req, res, next) => {

        try {


            const { activation_token } = req.body;

            const newUser = jwt.verify(
                activation_token,
                process.env.ACTIVATION_SECRET

            );


            if (!newUser) {
                return next(new ErrorHandler("Invalid token", 400));
            }
            const { name, email, password, avatar } = newUser;

            let user = await User.findOne({ email });

            if (user) {
                return next(new ErrorHandler("User already exists", 400));
            }
            user = await User.create({
                name,
                email,
                avatar,
                password,
            });

            sendToken(user, 201, res);
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);
//Login User
router.post("/login-user", catchAsyncErrors(async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return next(new ErrorHandler("all fields are required", 400))
        }
        const user = await User.findOne({ email }).select("+password")
        if (!user) {
            return next(new ErrorHandler("user doesn't exists!", 400))
        }
        const isPasswordValid = await user.comparePassword(password)
        if (!isPasswordValid) {
            return next(new ErrorHandler("Please provide correct detail", 400))
        }
        sendToken(user, 201, res)
    } catch (err) {
        // console.log(error)
        return next(new ErrorHandler(err.message, 500));


    }
}))


// load user
router.get(
    "/getuser",
    isAuthenticated,
    catchAsyncErrors(async (req, res, next) => {
        try {
            const user = await User.findById(req.user.id);

            if (!user) {
                return next(new ErrorHandler("User doesn't exists", 400));
            }

            res.status(200).json({
                success: true,
                user,
            });
        } catch (error) {
            return next(new ErrorHandler(Error.message, 500));
        }
    })
);

// logout user
router.get(
    "/logout",isAuthenticated,
    catchAsyncErrors(async (req, res, next) => {
      try {
        res.cookie("token", null, {
          expires: new Date(Date.now()),
          httpOnly: true,
          
        });
        res.status(201).json({
          success: true,
          message: "Log out successful!",
        });
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
    })
  );
  // update user info


  router.put(
    "/update-user-info",
    isAuthenticated,
    catchAsyncErrors(async (req, res, next) => {
      try {
        const { name, email, phoneNumber, password } = req.body;
  
        const user = await User.findOne({ email }).select("+password");
  
        if (!user) {
          return next(new ErrorHandler("User not found", 400));
        }
  
        const isPasswordValid = await user.comparePassword(password);
  
        if (!isPasswordValid) {
          return next(
            new ErrorHandler("Please provide the correct information", 400)
          );
        }
  
        user.name = name;
        user.email = email;
        user.phoneNumber = phoneNumber;
  
        await user.save();
  
        res.status(201).json({
          success: true,
          user,
        });
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
    })
  );
  
  // user addresses
 
router.put(
    "/update-user-addresses",
    isAuthenticated,
    catchAsyncErrors(async (req, res, next) => {
      try {
        const user = await User.findById(req.user.id);
  
        const sameTypeAddress = user.addresses.find(
          (address) => address.addressType === req.body.addressType
        );
        if (sameTypeAddress) {
          return next(
            new ErrorHandler(`${req.body.addressType} address already exists`)
          );
        }
  
        const existsAddress = user.addresses.find(
          (address) => address._id === req.body._id
        );
  
        if (existsAddress) {
          Object.assign(existsAddress, req.body);
        } else {
          // add the new address to the array
          user.addresses.push(req.body);
        }
  
        await user.save();
  
        res.status(200).json({
          success: true,
          user,
        });
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
    })
  );








module.exports = router;
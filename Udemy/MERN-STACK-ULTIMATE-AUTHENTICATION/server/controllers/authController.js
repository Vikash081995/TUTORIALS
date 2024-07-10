import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";

// export const signup = (req, res) => {
//   const { name, email, password } = req.body;

//   User.findOne({ email }).exec((err, user) => {
//     if (user) {
//       return res.status(400).json({
//         error: "Email is already used"
//       });
//     }
//   });

//   let newUser = new User(req.body);

//   newUser.save((err, success) => {
//     if (err) {
//       console.log("SIGNUP ERROR ", err);
//       return res.status(400).json({
//         error: err
//       });
//     }
//     res.json({
//       message: "Signup success. Please login"
//     });
//   });
// };

//email confimation workflow

export const signup = (req, res) => {
  const { name, email, password } = req.body;

  User.findOne({ email }).exec((err, user) => {
    if (user) {
      return res.status(400).json({
        error: "Email is taken"
      });
    }
  });

  const token = jwt.sign(
    { name, email, password },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: 86400
    }
  );
  const emailData = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: "Account activation link",
    html: `<h1>Please click here to activate your account</h1>
    <p>${process.env.CLIENT_URL}/auth/activate/${token}</p>
    <hr/>
    <p>This email contain sensitive information</p>
    <p>${process.env.CLIENT_URL}</p>
    `
  };
};

export const accountActivation = (req, res) => {
  const { token } = req.body;
  if (!token)
    return res.status(403).json({
      msg: "No token present"
    });

  if (token) {
    jwt.verify(
      token,
      process.env.JWT_ACCOUNT_ACTIVATION,
      function (err, decoded) {
        if (err) {
          console.log("JWT VERIFY FAILED", err);
          return res.status(401).json({
            error: "expired link "
          });
        }

        const { name, email, password } = jwt.decode(token);
        const user = new User({ name, email, password });

        user.save((err, user) => {
          if (err) {
            console.log("SAVE USER ERROR", err);
            return res.status(401).json({
              error: "Error saving user in database "
            });
          }
          return res.json({
            message: "Signup success, please signin"
          });
        });
      }
    );
  }
};

// check if user is trying to signin but have not signup yet
//check if password match with hashed_password that is saved in db
//if yes, generate token with expiry
//if no, return error
//the token will be sent to client/react
//it will be used as jwt based authentication system
// we can allow user to access protected routes later if they have valid token
//so jwt token is like password with expiry
//in succcessfull signin we will send user info and valid token
//this token will be send back to server from client/react to acess protected routes later

export const signin = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }).exec((err, user) => {
    //
    if (err || !user) {
      return res.status(400).json({
        error: "user with that email doesnot exist, please siginup firts"
      });
    }
    //authenticate
    if (!user.authenticate(password)) {
      return res.status(400).json({
        error: "user with that email doesnot exist, please signup"
      });
    }

    //generate  a token and send to client
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d"
    });
    const {_id,name,email,role} = user;
    return res.json({
      token,
      user: { _id, name, email, role }
    });

  });
};

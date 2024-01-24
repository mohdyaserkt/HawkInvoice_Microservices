
import loginController from './loginController'
import signupController from './signupController'
import userVerificationMailController from './userVerificationMailController'
import verifyUserController from './verifyUserController'




export = (dependencies: any) => {
  return {
    
    loginController: loginController(dependencies),
    signUpController:signupController(dependencies),
    verifyUserController:verifyUserController(dependencies),
    userVerificationMailController:userVerificationMailController(dependencies)
  };
};

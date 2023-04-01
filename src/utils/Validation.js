import * as Yup from 'yup'
export const checkBlankUserInput = (value) => {
    return value.trim().length === 0 ? true : false
}

export const authErrorHandler = (message) => {
    if (message.includes("user-not-found")) {
        return "Please register your account"
    }
    else if (message.includes("wrong-password")) {
        return "Please check your password"
    }
    else {
        return "Too Many attempts please reset your password"
    }
}
export const SignInPageSchema = Yup.object({
    email: Yup.string()
        .required('Please enter email')
        .email('Please enter vaild email'),
    password: Yup.string()
        .required('Please enter password')
})

export const SignInWithEmailPageSchema = Yup.object({
    email: Yup.string()
        .required('Please enter email')
        .email('Please enter vaild email'),

})



export const SignUpSchema = Yup.object({
    password: Yup.string()
        .required('Please enter password')
        .min(5, "Please enter minimum 5 characters")
        .max(10, "Please enter maximum 10 characters"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Confirm password must match with password')
        .required('Please enter confirm password')
        .min(5, "Please enter minimum 5 characters")
        .max(10, "Please enter maximum 10 characters"),
    userName: Yup.string()
        .required("please enter user name"),
    email: Yup.string()
        .required('Please enter email')
        .email('Please enter vaild email')
});





export const isPhoneNumberAndOtpValid = (value, label) => {
    let isValid = true;
    value.split('').forEach((character) => {
        if (isNaN(character)) {
            isValid = false
        }
    })

    return { isValid, error: `${label} must be number` }
}
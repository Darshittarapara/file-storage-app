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
        .email('Please enter valid email address'),
    password: Yup.string()
        .required('Please enter password')
        .min(5, "Please enter minimum 5 characters")
        .max(10, "Please enter maximum 10 characters")
})

export const SignInPageWithOtpSchema = Yup.object({
    phoneNumber: Yup.string()
        .required("Please enter your phone number")
        .max(10, "Phone number must be less than 10")
        .min(10, "Phone number must be 10 characters")
})

export const VeriflyOtpSchema = Yup.object({
    otp: Yup.string()
        .required("Please enter otp")
        .max(6, "Phone number must be 6 characters")
        .min(6, "Phone number must be 6 characters")
});

export const AddCategorySchema = Yup.object({
    name: Yup.string()
        .required("Please enter category name"),
    type :Yup.string()
    .required("Please select category type")
});

export const SignUpSchema = Yup.object({
    email: Yup.string()
        .required('Please enter email')
        .email('Please enter valid email address'),
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
        .required("please enter user name")    
});

export const AddIncomeSchema = Yup.object({
    name: Yup.string()
        .required("Please enter income name"),
    categoryName :Yup.string()
    .required("Please select category"),
    income:Yup.string().required("Please enter income"),
    note : Yup.string().optional()
})

export const AddExpenseSchema = Yup.object({
    name: Yup.string()
        .required("Please enter income name"),
    categoryName :Yup.string()
    .required("Please select category"),
    expense:Yup.string().required("Please enter expense"),
    note : Yup.string().optional()
})


export const isPhoneNumberAndOtpValid = (value ,label) => {
    let isValid = true;
    value.split('').forEach((character) => {
        if (isNaN(character)) {
            isValid = false
        }
    })

    return { isValid, error: `${label} must be number` }
}
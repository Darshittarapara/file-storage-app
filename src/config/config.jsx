let config = {
    appName: "Daily expense",
    authEmailVerifyURL: '',
    baseURL: "https://react-daily-expense-app-default-rtdb.firebaseio.com/",
    FIREBASE_API_KEY: "AIzaSyC4G9wvfTvRcHhiknlMvGvuwbg7pmy70YI",
    ICONE_API_KEY: "41OTjAduLVPUcsBt0gZgoxcQzzfEmNYpfEqcxQIE8ARMoG33",
    // iconeBaseURL  :"https://api.iconfinder.com/v4/icons"
    iconeBaseURL: "https://api.flaticon.com/v3/app",
    enviroment: 'produ',
    serchBaseURL: "https://api.flaticon.com/v3/search/icons/added",
    pdfAPIkey: 'daily-income_2f36f698-17fb-4433-8bdb-cf4ecbc13cc4',
    pdfGenratorBaseURL: "https://api.exportsdk.com/v1"
}
const isProdu = config.enviroment === "dev" ? true : false

config = {
    ...config,
    authEmailVerifyURL: isProdu ?
        process.env.REACT_APP_LOCAL_VERIFICATION_EMAIL_URL : process.env.REACT_APP_PRODUCTION_VERIFICATION_EMAIL_URL
}
export { config }
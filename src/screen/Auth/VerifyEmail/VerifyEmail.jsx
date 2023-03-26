import React from 'react'
import { VERIFY_EMAIL } from 'utils/const'
const VerifyEmail = () => {
    const verifiactionEmail = localStorage.getItem(VERIFY_EMAIL);

    alert(verifiactionEmail)
    return (
        <div>VerifyEmail</div>
    )
}

export default VerifyEmail
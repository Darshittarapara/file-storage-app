import Button from 'components/Button/Button'
import React from 'react'
import { useDispatch } from 'react-redux'
import { AuthActions } from 'redux/AuthSlice/AuthSlice'
import { clearStorage } from 'utils/Storage'

const Home = () => {
    const dispatch = useDispatch()
    return (
        <div>Home
            <Button disable={false} type="button" onClick={() => {
                clearStorage()
                dispatch(AuthActions.cancelAuth())
            }}>
                Log out
            </Button>
        </div>
    )
}

export default Home
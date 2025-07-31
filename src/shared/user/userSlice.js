import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            token: '',
            id: '',
            email: '',
            name: '',
            lastName: '',
            position: '',
            birthdate: '',
            roles: []
        }
    },
    reducers: {
        set: (state, action) => {
            state.user.token = action.payload.token

        },
        setUser: (state, action) => {
            state.user = {
                ...state.user,
                id: action.payload.id,
                email: action.payload.email,
                name: action.payload.name,
                lastName: action.payload.lastName,
                position: action.payload.position,
                birthdate: action.payload.birthdate.date,
                roles: action.payload.roles
            }
        },
        unset: (state) => {
            state.user = {
                token: '',
                email: '',
                name: '',
                lastName: '',
                roles: []
            }
        }
    }
})

export const { set, setUser, unset } = userSlice.actions

export default userSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const clockSlice = createSlice({
    name: 'clock',

    initialState: {
        hours        : 0,
        minutes      : 0,
        seconds      : 0,
        milliseconds : 0,
        isRunning    : false
    },

    reducers: {
        setH  : (state, action) => { state.hours        = action.payload },
        setM  : (state, action) => { state.minutes      = action.payload },
        setS  : (state, action) => { state.seconds      = action.payload },
        setMs : (state, action) => { state.milliseconds = action.payload },
        start : (state)         => { state.isRunning    = true           },
        stop  : (state)         => { state.isRunning    = false          },
        reset : (state)         => {
            state.hours         = 0
            state.minutes       = 0
            state.seconds       = 0
            state.milliseconds  = 0
            state.isRunning     = false
        },
        
    }
})

const        { actions, reducer } = clockSlice
export const { start, stop, reset, setH, setM, setS, setMs} = actions
export default reducer
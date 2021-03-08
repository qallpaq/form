import { accepted, reset, stage } from '../../types'

export const changeStage = (payload: number | undefined) => ({type: stage, payload})
export const resetState = () => ({type: reset})
export const accept = () => ({type: accepted})

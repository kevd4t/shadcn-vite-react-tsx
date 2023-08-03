import { FormLoginData } from '../types'
import { fetcher } from '../utils'

export const login = async (data: FormLoginData) => fetcher('/api/login', { body: JSON.stringify({ ...data }) })
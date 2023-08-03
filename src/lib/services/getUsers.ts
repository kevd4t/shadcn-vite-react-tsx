import { User } from '../types'
import { fetcher } from '../utils'

export const getUsers = async () => fetcher<User[]>('https://randomuser.me/api/?results=20')
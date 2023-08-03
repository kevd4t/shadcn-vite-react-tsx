import { useForm } from 'react-hook-form'

import { FormLoginData, User, UserAuthenticated } from '../../lib/types'
import { loginRules } from './rules'

import { Button, Input } from '../../components'
import { useFetch } from '../../lib/hooks'
import { getUsers } from '../../lib/services/getUsers'
import { login } from '../../lib/services/login'

export const FormLogin = () => {
  const { data, loading, error, fetcher } = useFetch<UserAuthenticated>()
  const formUser = useForm<FormLoginData>()

  const handleOnClick = async () => {
    // await fetcher(() => login())

    if (error) {
      console.error('Get Users Error', error)
    }

    console.log(data)
  }

  const onSubmit = async (data: FormLoginData) => {
    await fetcher(await login(data))

    if (error) {
      console.error(error)
      return
    }

    console.log({ data })
  }

  return (
    <form onSubmit={formUser.handleSubmit(onSubmit)} className='max-w-xs h-screen flex space-y-4 flex-col mx-auto justify-center items-center'>
      <h5 className='font-black text-2xl text-left w-full'>Iniciar Sesion</h5>

      <Input
        id='email'
        type='email'
        tabIndex={1}
        label='Título'
        disabled={loading}
        placeholder='user@email.com'
        register={formUser.register}
        inputErrors={loginRules.email}
        messageErrors={formUser.formState.errors}
      />

      <Input
        id='password'
        type='password'
        tabIndex={1}
        label='Contraseña'
        placeholder='*******'
        messageErrors={formUser.formState.errors}
        disabled={loading}
        register={formUser.register}
        inputErrors={loginRules.password}
      />

      <Button 
        disabled={loading}
        tabIndex={1}
        type='submit'
        className='w-full'
      >
        Iniciar Sesion
      </Button>
    </form>
  )
}

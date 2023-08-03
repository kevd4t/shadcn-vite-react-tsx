import * as React from 'react'

import { cn } from '../lib/utils'
import { Label } from './label'
import { Eye, EyeOff } from 'lucide-react'
import { useState, type InputHTMLAttributes } from 'react'
import type { RegisterOptions } from 'react-hook-form'

export interface InputUIProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputUI = React.forwardRef<HTMLInputElement, InputUIProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

InputUI.displayName = 'InputUI'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label?: string
  register?: any
  messageErrors?: any
  classNameContainer?: string
  inputErrors?: RegisterOptions<any>
}

export const Input = ({ children, id, register, messageErrors = null, label, classNameContainer, inputErrors = {}, ...rest }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  if (rest.type === 'password') {
    return (
      <div className={cn('w-full', classNameContainer)}>
        {
          label && (
            <Label htmlFor={id}>
              { label }&nbsp;
            </Label>

          )
        }

        {
          (messageErrors && id && !rest.readOnly)
            ? messageErrors[id] && <span className='text-sm text-red-500'>* {messageErrors[id]?.message}</span>
            : null
        }

        <div className='my-2'></div>

        {
          register
            ? (
              <div className='relative'>
                <InputUI
                  {...rest}
                  {...register(id, inputErrors)}
                  className={cn('pr-14', rest.className)}
                  type={showPassword ? 'text' : 'password'}
                />

                <button
                  type='button'
                  tabIndex={-1}
                  onClick={() => setShowPassword(prevState => !prevState)}
                  className='absolute right-4 mr-0.5 top-2'
                >
                  {
                    showPassword
                      ? <EyeOff />
                      : <Eye />
                  }
                </button>
              </div>
            )
            : (
              <div className='relative'>
                <InputUI
                  {...rest}
                  className={cn('pr-14', rest.className)}
                  type={showPassword ? 'text' : 'password'}
                />

                <button
                  type='button'
                  tabIndex={-1}
                  onClick={() => setShowPassword(prevState => !prevState)}
                  className='absolute right-4 mr-0.5 top-2'
                >
                  {
                    showPassword
                      ? <EyeOff />
                      : <Eye />
                  }
                </button>
              </div>
            )
        }

      </div>
    )
  }

  return (
    <div className={cn('w-full', classNameContainer)}>
      {
        label && (
          <Label htmlFor={id}>
            { label }&nbsp;
          </Label>

        )
      }

      {
        (messageErrors && id && !rest.readOnly)
          ? messageErrors[id] && <span className='text-sm text-red-500'>* {messageErrors[id]?.message}</span>
          : null
      }

      <div className='my-2'></div>
      {
        register
          ? (<InputUI {...register(id, inputErrors)} {...rest} />)
          : (<InputUI {...rest} />)
      }

    </div>
  )
}



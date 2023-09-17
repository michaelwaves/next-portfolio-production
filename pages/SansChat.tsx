'use client'

import { useChat } from 'ai/react'
import PopupCloset from '@/components/popups/PopupCloset'
import { useAppSelector } from '@/redux/hooks'
import { useAppDispatch } from '@/redux/hooks'
import { getInitialMessages, setInitialMessages } from '@/redux/closetSlice'
import { useEffect } from 'react'

export default function SansChat() {

  const dispatch = useAppDispatch()
  const initialMessages = useAppSelector((state) => getInitialMessages(state))
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/sans',
    initialMessages:
      initialMessages
  })

  useEffect(() => {
    dispatch(setInitialMessages(messages))
  }, [messages, dispatch])

  return (
    <PopupCloset reduxProperty='sansChat' >
      <div className=''>
        <label htmlFor="input" className='' />
        <div className='max-h-40 mt-10 overflow-y-scroll md:scrollbar '>
          {messages.slice(1).map(m => (
            <div key={m.id} className={`${m.role === "user" ? "font-body" : "font-pixel"}`}>
              {m.role === "user" ? "human" : "skeleton"}: {m.content}
            </div>
          ))}

        </div>
        <form onSubmit={handleSubmit} className='flex flex-row gap-4'>
          Talk to the skeleton
          <input
            id="input"
            autoComplete='off'
            value={input}
            onChange={handleInputChange}
            className='font-body rounded-xl active:border-s-3 dark:active:border-p-5 border-4 border-s-3 dark:border-p-5 p-2 w-full  '
          />

        </form>
      </div>
    </PopupCloset>
  )
}
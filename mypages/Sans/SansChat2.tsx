'use client'

import PopupCloset from '@/components/popups/PopupCloset'
import { useAppSelector } from '@/redux/hooks'
import { useAppDispatch } from '@/redux/hooks'
import { getInitialMessages, setInitialMessages } from '@/redux/closetSlice'
import { useEffect } from 'react'
import Openai from './openai'

export default function SansChat2() {

  const dispatch = useAppDispatch()
  const initialMessages = useAppSelector((state) => getInitialMessages(state))

  return (
    <PopupCloset reduxProperty='sansChat' >
      <Openai />
    </PopupCloset>
  )
}
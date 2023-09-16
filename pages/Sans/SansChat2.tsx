'use client'

import { useAppSelector } from '@/redux/hooks'
import { useAppDispatch } from '@/redux/hooks'
import { getInitialMessages, setInitialMessages } from '@/redux/closetSlice'
import { useEffect } from 'react'
import Openai from './openai'
import PopupClosetSans from '@/components/popups/PopupClosetSans'

export default function SansChat2() {

  const dispatch = useAppDispatch()
  const initialMessages = useAppSelector((state) => getInitialMessages(state))

  return (
    <PopupClosetSans reduxProperty='sansChat' >
      <Openai />
    </PopupClosetSans>
  )
}
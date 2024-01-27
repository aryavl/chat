'use client'

import {ReactNode, useRef} from 'react'
import {Provider} from 'react-redux'
import {store} from '../lib/store'
import { EnhancedStore } from '@reduxjs/toolkit';

interface StoreProviderProps {
    children: ReactNode;
  }
export default function StoreProvider({children}:StoreProviderProps){
   

    return <Provider store={store}>{children}</Provider>

}
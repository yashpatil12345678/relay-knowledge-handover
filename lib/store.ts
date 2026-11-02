'use client'
import {useEffect,useState} from 'react'
import {AppState} from '@/types'
import {seedState} from './demo-data'
const KEY='relay-demo-v1'
export function useRelayStore(){const [state,setState]=useState<AppState>(()=>seedState()); const [ready,setReady]=useState(false);useEffect(()=>{try{const saved=localStorage.getItem(KEY);if(saved)setState(JSON.parse(saved))}catch{}setReady(true)},[]);useEffect(()=>{if(ready)localStorage.setItem(KEY,JSON.stringify(state))},[state,ready]);return {state,setState,reset:()=>setState(seedState())}}

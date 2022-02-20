import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Pusher from 'pusher-js'
import { useEffect, useRef, useState } from 'react'
import { create, SimpleDrawingBoard } from 'simple-drawing-board'

import {
  exportToCanvas,
  exportToSvg,
  exportToBlob,
} from '@excalidraw/excalidraw'

const isBrowser = () => ![typeof window, typeof document].includes('undefined')

const pusher = new Pusher('38899e1d038bf6abfba6', {
  cluster: 'eu',
  forceTLS: true,
})

const submitMessage = (message: string) =>
  fetch('/api/message', { method: 'POST', body: message }).catch((e) =>
    console.log(e)
  )

const renderTopRightUI = () => {
  return (
    <button onClick={() => alert('This is dummy top right UI')}>
      {' '}
      Click me{' '}
    </button>
  )
}

const renderFooter = () => {
  return (
    <button onClick={() => alert('This is dummy footer')}>
      {' '}
      custom footer{' '}
    </button>
  )
}

const Home: NextPage = () => {
  const excalidrawRef = useRef()
  const initialStatePromiseRef = useRef({ promise: null })

  const [typing, setTyping] = useState('')
  const [messages, setmessages] = useState<string[]>([])
  const [Excalidraw, setExcalidraw] = useState<any>()

  useEffect(() => {
    pusher
      .subscribe('chat')
      .bind('message', (m: string) => setmessages((cm) => cm.concat(m)))

    import('@excalidraw/excalidraw').then((comp) => setExcalidraw(comp.default))

    return () => {
      pusher.unsubscribe('chat')
    }
  }, [])

  return (
    <div>
      <Head>
        <title>Drawlio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <form
          onSubmit={async (e) => {
            e.preventDefault()
            await submitMessage(typing)
            setTyping('')
          }}
        >
          <input
            className="border hover:border-black"
            value={typing}
            onChange={(e) => setTyping(e.target.value)}
          />
        </form>
        <ul>
          {messages.map((msg) => (
            <li key={msg}>{msg}</li>
          ))}
        </ul>
        <div
          style={{
            height: '800px',
            margin: '50px',
          }}
        >
          {Excalidraw ? (
            <Excalidraw
              ref={excalidrawRef}
              onCollabButtonClick={() =>
                window.alert('You clicked on collab button')
              }
              initialData={initialStatePromiseRef.current.promise}
              onChange={(elements: any, state: any) =>
                console.info('Elements :', elements, 'State : ', state)
              }
              viewModeEnabled={true}
              zenModeEnabled={true}
              gridModeEnabled={true}
              theme={'light'}
              name="Custom name of drawing"
              UIOptions={{ canvasActions: { loadScene: false } }}
              onLinkOpen={true}
              renderTopRightUI={renderTopRightUI}
              renderFooter={renderFooter}
            />
          ) : null}
        </div>
      </main>
    </div>
  )
}

export default Home
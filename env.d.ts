declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_PUSHER_APP_ID: string
      PUSHER_APP_KEY: string
      PUSHER_APP_SECRET: string
    }
  }
}

export {}

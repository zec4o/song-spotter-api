// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    songs: {
      id: string
      title: string
      author: string
      duration: string
      uploaded_at: string
      session_id?: string
    }
  }
}

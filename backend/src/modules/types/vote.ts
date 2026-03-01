import type { User } from './user'
import type { Topic } from './topic'

export interface Vote {
  id_vote: number
  user: User
  topic: Topic
  date: Date
}
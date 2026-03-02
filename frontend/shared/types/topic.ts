import type { Category } from './category'

export interface Topic {
    id_topic: number
    title: string
    descripcion: string
    start_date: Date
    end_date: Date
    category: Category
}
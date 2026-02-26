export const Roles = {
  ADMIN: 'ADMINISTRADOR',
  STUDENT: 'ESTUDIANTE',
  PARENTS: 'PADRES',
  TEACHER: 'PROFESOR',
} as const

export type RoleType = typeof Roles[keyof typeof Roles]

export type VocationalFiel = {
  Letters: 'LETRAS',
  Numbers: 'NUMEROS',
  DAW: 'GS DAW',
  DAM: 'GS DAM',
  Sports: 'GS DEPORTES'
  ADE: 'GS ADE',
  FPB: 'FPB',
};
//TODO: preguntar a javi por que cursos hay 

export interface User {
  id_user: number
  name: string
  password: string
  classroom: string
  rol: RoleType
  vocational_field: VocationalFiel
  sex?: 'H' | 'M'
  img?: string
  nie?: string
  email?: string
  created_at: Date
}
//TODO: ecrypt pass
export type Roles = {
  ADMIN: 'ADMINISTRADOR',
  STUDENT: 'ESTUDIANTE',
  PARENTS: 'PADRES',
  TEACHER: 'PROFESOR',
}

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
  rol: Roles
  vocational_field: VocationalFiel
  sex?: 'H' | 'M'
  img?: string
  nie?: string
  email?: string
}
//TODO: ecrypt pass
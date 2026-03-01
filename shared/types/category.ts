export type NameCategory = {
    All: 'Todos',
    Class: 'Solo misma clase',
    Teachers: 'Solo profesores',
    Parents: 'Solo padres',
    Students: 'Solo alumnos'
};

export interface Category {
    id_category: number,
    name_category: NameCategory,
    description: string,
}
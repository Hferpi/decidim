import { Injectable } from "@nestjs/common";
import { Vote } from "../types/vote";
import { NameCategory } from "../types/category";

@Injectable()
export class VotesService {

    getAllVotes(): Partial<Vote> {
        let data = new Date()
        return {
            id_vote: 0,
            topic: {
                id_topic: 0,
                title: 'Delegado',
                descripcion: 'Para el delgado de 2º DAW',
                start_date: data,
                end_date: data,
                category: {

                    id_category: 0,
                    name_category:  NameCategory.Students,
                    description: 'Alumnado',
                },
            },
            date: data
        }
    }

    createVote() {
        return 'creando tarea'
    }

    editVote() {
        return 'editando tarea'
    }

    modifyVote() {
        return 'modificando tarea'
    }

    deleteVote() {
        return 'borrando tarea'
    }
}
import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { VotesService } from './votes.service';


@Controller('votes')
export class VotesController {

    constructor(private votesService: VotesService) { }

    @Get('')
    getVotes() {
        return this.votesService.getAllVotes()
    }

    @Post('')
    createVote() {
        return this.votesService.createVote()
    }

    @Put('')
    editVote() {
        return this.votesService.editVote()
    }

    @Patch('')
    modifyVotePartrial() {
        return this.votesService.modifyVote()
    }

    @Delete('')
    deleteVote() {
        return this.votesService.deleteVote()
    }
}


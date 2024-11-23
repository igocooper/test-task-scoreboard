export interface Team {
    name: string;
    score: number;
}

export class Match {
    awayTeam: Team;
    homeTeam: Team;
    startedAt: number;
    id: string;

    constructor(homeTeamName: string, awayTeam: string) {
        this.awayTeam = {
            name: awayTeam,
            score: 0
        };

        this.homeTeam = {
            name: homeTeamName,
            score: 0
        };
        this.startedAt = Date.now();
        this.id = `${homeTeamName}-${awayTeam}`;
    }

    updateScore(homeTeamScore: number, awayTeamScore: number) {
        this.awayTeam.score = awayTeamScore;
        this.homeTeam.score = homeTeamScore;
    }

    getTotalScore() {
        return this.homeTeam.score + this.awayTeam.score;
    }

    static getTeamsFromId(id: string) {
        const [homeTeamName, awayTeamName] = id.split('-');

        return [homeTeamName, awayTeamName] as const;
    }
}
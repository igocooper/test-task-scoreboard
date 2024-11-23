import { Match, Team } from '../Match';
import { handleScoreInstructionParsing } from './utils';


export class ScoreBoard {
    liveMatches: Map<Match['id'], Match> = new Map();
    finishedMatches: Map<Match['id'], Match> = new Map();
    Match: typeof Match;

    constructor(match?: typeof Match) {
        // we allow users to come with better hashing pattern for match ids as long as he implements Match interface
        this.Match = match || Match;
    }

    startMatch(homeTeamName: Team['name'], awayTeamName: Team['name']) {
        const match = new this.Match(homeTeamName, awayTeamName);

        if (this.liveMatches.has(match.id)) {
            throw new Error('Both Teams: Italy and France are playing already');
        }

        for (const match of this.liveMatches.values()) {
            const [matchHomeTeamName, matchAwayTeamName] = this.Match.getTeamsFromId(match.id);

            if (homeTeamName === matchHomeTeamName || homeTeamName === matchAwayTeamName) {
                throw new Error(`Team: ${homeTeamName} is playing already`);
            }

            if (awayTeamName === matchAwayTeamName || awayTeamName === matchHomeTeamName) {
                throw new Error(`Team: ${awayTeamName} is playing already`);
            }
        }

        this.liveMatches.set(match.id, match);

        return match;
    }

    finishMatch(homeTeamName: Team['name'], awayTeamName: Team['name']) {
        const { id: matchId } = new this.Match(homeTeamName, awayTeamName);

        if (!this.liveMatches.has(matchId)) {
            throw new Error('No match with those teams was started yet.');
        }

        // move match from live to finished
        this.finishedMatches.set(matchId, this.liveMatches.get(matchId));
        this.liveMatches.delete(matchId);
    }

    updateScore(scoreInstruction: string) {

        const { homeTeamName, homeTeamScore, awayTeamName, awayTeamScore } = handleScoreInstructionParsing(scoreInstruction);

        const { id: matchId } = new this.Match(homeTeamName, awayTeamName);
        const match = this.liveMatches.get(matchId);

        if (!match) {
            throw new Error('No match with those teams was started yet.');
        }

        match.updateScore(parseInt(homeTeamScore), parseInt(awayTeamScore));
    }

    getSummary() {

    }
}

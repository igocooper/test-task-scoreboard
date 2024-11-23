export function handleScoreInstructionParsing(scoreInstruction: string) {
    const regExp = /(?<homeTeamName>[a-zA-z]+)?\s?(?<homeTeamScore>\d+)?\s-\s(?<awayTeamName>[a-zA-z]+)?\s?(?<awayTeamScore>\d+)?/;

    const match = regExp.exec(scoreInstruction);

    if (match === null) {
        throw new Error('Score instruction parsing error. Please make sure you are using correct format: "{homeTeamName} {homeTeamScore} - {awayTeamName} {awayTeamScore}')
    }

    const { homeTeamName, homeTeamScore, awayTeamName, awayTeamScore } = match.groups;

    if (!homeTeamName) {
        throwUpdateScoreParsingError('homeTeamName');
    }

    if (!homeTeamScore) {
        throwUpdateScoreParsingError('homeTeamScore');
    }

    if (!awayTeamName) {
        throwUpdateScoreParsingError('awayTeamName');
    }

    if (!awayTeamScore) {
        throwUpdateScoreParsingError('awayTeamScore');
    }

    return { homeTeamName, homeTeamScore, awayTeamName, awayTeamScore };
}

export function throwUpdateScoreParsingError(missingPartName: string) {
    throw new Error(`Cannot parse "${missingPartName}". Please make sure you are using correct format: "{homeTeamName} {homeTeamScore} - {awayTeamName} {awayTeamScore}"`);
}

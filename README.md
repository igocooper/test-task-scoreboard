# ScoreBoard Library

Small library to manage live Football matches 


## Example of usage

```ts
import { ScoreBoard } from 'src';


const scoreBoard = new ScoreBoard;

scoreBoard.startMatch('Italy', 'Spain');
scoreBoard.startMatch('England', 'Argentina');

scoreBoard.getSummary(); /* returns

[
  'Italy 0 - Spain 0',
  'England 0 - Argentina 0'
];

*/

scoreBoard.updateScore('England 1 - Argentina 0');

scoreBoard.getSummary(); 

/* returns

[
  'England 1 - Argentina 0'
  'Italy 0 - Spain 0',

];

*/

scoreBoard.finishMatch('England', 'Argentina');

scoreBoard.getSummary(); // returns ['Italy 0 - Spain 0'];

```

# ScoreBoard Class

This class manages the live and finished matches, updates scores, and provides summaries of the matches.

## Table of Methods

| Method Name         | Description                                                                                       | Parameters                                                                                                                      | Returns                           |
|---------------------|---------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
| `constructor`       | Initializes the ScoreBoard with optional custom Match, SummaryLogger, and MatchFormatter classes. | `{ match?: typeof Match, summaryLogger?: typeof SummaryLogger, matchFormatter?: typeof MatchFormatter }`                       | `void`                            |
| `startMatch`        | Starts a new match between the specified home and away teams.                                      | `homeTeamName: Team['name']`, `awayTeamName: Team['name']`                                                                      | `Match`                           |
| `finishMatch`       | Finishes the match between the specified home and away teams.                                      | `homeTeamName: Team['name']`, `awayTeamName: Team['name']`                                                                      | `void`                            |
| `updateScore`       | Updates the score of the match specified by the score instruction string.                          | `scoreInstruction: string`                                                                                                      | `void`                            |
| `getSummary`        | Returns a summary of all live matches, formatted and sorted.                                       | `none`                                                                                                                          | `string[]` (formatted summaries)  |


# Match Class

This class represents a match between two teams, including their scores and start time.

## Properties

- `awayTeam: Team`
  - The away team in the match, represented by a `Team` object.
- `homeTeam: Team`
  - The home team in the match, represented by a `Team` object.
- `startedAt: number`
  - The timestamp when the match started.
- `id: string`
  - A unique identifier for the match, composed of the home team and away team names.

## Table of Methods

| Method Name               | Description                                      | Parameters                                                                        | Returns             |
|---------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------|---------------------|
| `constructor`             | Initializes a new match between two teams.       | `homeTeamName: string`, `awayTeam: string`                                        | `void`              |
| `updateScore`             | Updates the scores of the home and away teams.   | `homeTeamScore: number`, `awayTeamScore: number`                                  | `void`              |
| `getTotalScore`           | Calculates the total score of the match.         | None                                                                              | `number`            |
| `static getTeamsFromId`   | Extracts the home and away team names from the match ID. | `id: string`                                                                      | `[string, string]`  |

# MatchFormatter Class

This class provides functionality to format match details into a readable string.

## Table of Methods

| Method Name | Description                     | Parameters | Returns  |
|-------------|---------------------------------|------------|----------|
| `format`    | Formats the match details into a readable string. | `match: Match` | `string` |


# SummaryLogger Class

This class provides functionality to sort matches based on their total score and start time.

## Table of Methods

| Method Name | Description                                      | Parameters               | Returns     |
|-------------|--------------------------------------------------|--------------------------|-------------|
| `sort`      | Sorts matches by total score and start time.     | `matches: Array<Match>`  | `Array<Match>` |

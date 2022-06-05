import Game from "./Game";
import GameLabel from "./GameLabel";

const GamesList = ({games, isGameSet}) => {

    if(isGameSet)
    {
        const arr = [];
        Object.keys(games).forEach((key) => {
            arr.push(games[key]);
        });



        return(
        <ul>
            {
                arr.map(game => {
                    return <Game game={game} />})
            }
        </ul>)
    }
    else
    {
        return (
            <label>
            </label>)
    }


}

export default GamesList
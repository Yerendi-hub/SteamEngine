import GameLabel from "./GameLabel";

const Home = ({games}) => {
    if(games === undefined)
    {
        return <li>Waiting for data...</li>
    }

    const arr = [];
    Object.keys(games).forEach((key) => {
        console.log(key)
        arr.push(games[key]);
    });


    return (
                <ul>
                    {
                        arr.map(game => {
                            return <GameLabel game={game} />
                        })
                    }
                </ul>
    )
}

export default Home
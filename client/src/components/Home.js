import GameLabel from "./GameLabel";

const Home = ({games}) => {
    if(games === undefined)
    {
        return <li>Waiting for data...</li>
    }

    const arr = [];
    Object.keys(games).forEach((key) => {
        arr.push(games[key]);
    });


    return (
        <div>
            <h1>Top 20 games by CCU:</h1>
                <ul>
                    {
                        arr.sort((a,b)=> b.ccu - a.ccu).slice(0,20).map(game => {
                            return <GameLabel game={game} />
                        })
                    }
                </ul>
        </div>
    )
}

export default Home
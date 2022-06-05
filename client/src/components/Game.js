const Game = ({game}) => {
    console.log(game)
        return (
            <li>
                {game.data.name}: {game.data.is_free === true ? 'free' : game.data.price_overview.final_formatted}
            </li>)
}

export default Game
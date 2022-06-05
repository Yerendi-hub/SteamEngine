const GameLabel = ({game}) => {
    return (
        <li>
            {game.name}: {game.ccu}
        </li>)
}

export default GameLabel
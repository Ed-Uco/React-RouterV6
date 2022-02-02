import { Link, Outlet } from 'react-router-dom';
const Characters = ({ allCharacters }) => {
    const { characters } = allCharacters;
    return (
        <>
            <div
                className="container"
                style={{ display: 'flex', flexDirection: 'row' }}
            >
                <div>
                    <h1>Characters</h1>
                    {characters.map(character => (
                        <Link
                            key={character.id}
                            to={`/characters/${character.id}`}
                        >
                            <p>{character.name}</p>
                        </Link>
                    ))}
                </div>
                <div classname="container">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Characters;

import {useParams} from 'react-router-dom';

const Character = ({ allCharacters}) => {
      const { characters } = allCharacters;
      const { id } = useParams();
      const currentCharacter = characters.filter((character) => character.id === Number(id))
      return (
            <>
                  <h1> One Character</h1>
                  {
                        <div>
                              <h2>{currentCharacter[0].name}</h2>
                              <h3>Status: {currentCharacter[0].status}</h3>
                              <img src={currentCharacter[0].image} alt={currentCharacter[0].name}/>
                        </div>
                  }
            </>);
};

export default Character;

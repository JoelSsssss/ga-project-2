import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterBio } from '../lib/api'; 
let statusIcon;

const CharacterBio = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  console.log('console logging the ID =>', id);
  useEffect(() => {
    //call api to get single character
    getCharacterBio(id)
      .then((res) => setCharacter(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (character === null) {
    return <p>Loading...</p>;
  }

  if (character.status === 'Alive') {
    statusIcon = '🟢';
  } else if (character.status === 'Dead') {
    statusIcon = '☠️';
  } else {
    statusIcon = '🤷';
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="title has-text-centered">{character.name}</h2>
        <hr />
        <div className="columns">
          <div className="column is-half">
            <figure className="image">
              <img src={character.image} alt={character.name} />
            </figure>
          </div>
          <div className="column is-half">
            <h4 className="title is-4">
              <span role="img" aria-label="status-icon">
              </span>
              Status ❓
            </h4>
            <p>
              {statusIcon}
              {character.status}
            </p>
            <hr />
            <h4 className="title is-4">
              <span role="img" aria-label="specices-icon"></span>
              Species 🔍
            </h4>
            <p>{character.species}</p>
            <hr />
            <h4 className="title is-4">
              <span role="img" aria-label="gender-icon"></span>
              Gender ♀♂
            </h4>
            <p>{character.gender}</p>
            <hr />
            <h4 className="title is-4">
              <span role="img" aria-label="origin-icon"></span>
              Origin 🪐
            </h4>
            <p>{character.origin.name}</p>
            <hr />
            <h4 className="title is-4">
              <span role="img" aria-label="episodes-icon"></span>
              Number of Episodes 📺
            </h4>
            <p>{character.episode.length}</p>
            <hr />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterBio;

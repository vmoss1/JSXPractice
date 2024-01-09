import pokeImg from './images/bulbasaur.jpg'
import './App.css'

const SquirtleChars = {
    type: 'Grass',
    move: 'Vine Whip'
  };

function Showcase() {
    let favPokemon = 'Squirtle'
    return (
      <div>
        <h1>{favPokemon}&apos;s Showcase Component</h1>
        <img src={pokeImg} alt="Squirtle" />
        {/* <h2>Squirtle&apos;s type is <span style = {{backgroundColor: 'green', color: 'white' }}>{SquirtleChars.type}</span> and one of their moves is <span style = {{backgroundColor: 'white' , color: 'green'}}>{SquirtleChars.move}</span></h2> */}
        <h2>Squirtle&apos;s type is <span className = 'background'>{SquirtleChars.type}</span> and one of their moves is <span className='background'>{SquirtleChars.move}</span></h2>

      </div>
    );
  }
  
  export default Showcase;
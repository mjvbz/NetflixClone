import './Navbar.scss'; 

function Navbar() {

  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
        </div>
        <div className="right">

          <span>Home :emojisense:</span>
          <span>Movies</span>
          <span>Web series</span>
          <span>Channels</span>
          <span>Tv Shows</span>

        </div>
      </div>
    </div>
  );
}

export default Navbar
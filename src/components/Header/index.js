import "./style.scss";

const publicURL = process.env.PUBLIC_URL;

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <a className="heading" href="/">
          <img
            alt="logo"
            className="logo"
            src={`${publicURL}/images/pet.png`}
          />
          PetCare
        </a>
      </div>
      <ul className="navbar-container">
        <li>
          <a href="/our-pets">Our pets</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/about">About us</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;

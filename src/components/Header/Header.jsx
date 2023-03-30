
import styles from './Header.module.css';

function Header(props) {
  return (
    <header className={styles.header}>
      <h1>Chat for Photography enthusiasts</h1>
      <p>Welcome {props.name}</p>
    </header>
  );
}

export default Header;



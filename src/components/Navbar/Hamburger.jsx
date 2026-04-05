import { FiMenu } from 'react-icons/fi';
import styles from './hamburger.module.css'

export default function Hamburger({ setDisplay }) {
    return (
        <button className={styles.hamburger}
            onClick={() => {
                setDisplay(true);
            }}>
            <FiMenu size={24} />
        </button>
    )
}
import { FiX } from 'react-icons/fi';
import styles from './hamburger.module.css';

export default function Cross({ setDisplay }) {
    return (
        <button className={styles.hamburger}
            onClick={() => {
                setDisplay(false);
            }}>
            <FiX size={24} color='white' strokeWidth={2} />
        </button>
    );
}

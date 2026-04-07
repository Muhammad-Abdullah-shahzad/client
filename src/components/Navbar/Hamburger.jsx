import { CiMenuFries } from 'react-icons/ci';
import styles from './hamburger.module.css'

export default function Hamburger({ setDisplay }) {
    return (
        <div className={styles.container}>
            <button className={styles.hamburger}
                onClick={() => {
                    setDisplay(true);
                }}>
                <CiMenuFries size={26} color="white" strokeWidth={1} />
            </button>
        </div>

    )
}
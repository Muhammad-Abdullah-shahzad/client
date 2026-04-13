import './LowerNav.css'

export default function LowerNav({ display, onCartClick }) {
    return <div className={`lowerNav ${display ? 'show' : ''}`}>
        <div className='search-bar'>

        </div>
        <ul className="navlinks">
            <li>Spring/collection</li>
            <li>Women</li>
            <li>Men Us</li>
            <li>Kids</li>
            <li>Gifts</li>
        </ul>
        <div className="nav-icons">
            <button className="cart-icon-btn" onClick={onCartClick} aria-label="Open cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 10a4 4 0 01-8 0" />
                </svg>
            </button>
        </div>
    </div>
}
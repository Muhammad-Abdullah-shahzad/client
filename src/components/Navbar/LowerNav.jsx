import './LowerNav.css'
export default function LowerNav({ display }) {
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
        <div>

        </div>
    </div>
}
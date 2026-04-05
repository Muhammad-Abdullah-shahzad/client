import './LowerNav.css'
export default function LowerNav({ display }) {
    return <div className={`lowerNav ${display ? 'show' : ''}`}>
        <div className='search-bar'>

        </div>
        <ul className="navlinks">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Products</li>
            <li>Featured</li>
        </ul>
        <div>

        </div>
    </div>
}
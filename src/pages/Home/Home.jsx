import Crousal from '../../components/Home/Crousal';
import Products from '../../components/Home/Products';

export default function Home() {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Crousal />
            <Products />
        </div>
    );
}

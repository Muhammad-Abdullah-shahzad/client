import Crousal from '../../components/Home/Crousal';
import Products from '../../components/Home/Products';
import MainCategories from '../../components/Home/MainCategories';
import MoreOfUs from '../../components/Home/MoreOfUs';
import Newsletter from '../../components/Home/Newsletter';
import Footer from '../../components/Home/Footer';

export default function Home() {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Crousal />
            <Products />
            <MainCategories />
            <MoreOfUs />
            <Newsletter />
            <Footer />
        </div>
    );
}

import Crousal from '../../components/Home/Crousal';
import Products from '../../components/Home/Products';
import MainCategories from '../../components/Home/MainCategories';
import MoreOfUs from '../../components/Home/MoreOfUs';
import Newsletter from '../../components/Home/Newsletter';
import Footer from '../../components/Home/Footer';
import { useEffect } from 'react';
import generateUUID from '../../Utils/generateUUID';
import { getDataLocalStorage, setDataLocalStorage } from '../../Utils/LocalStorage';
export default function Home() {
    useEffect(() => {
        if (!getDataLocalStorage('ecom_user_Id')) {
            setDataLocalStorage('ecom_user_Id', generateUUID())
        }
    }, [])
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

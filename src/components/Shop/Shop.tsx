import './Shop.scss'

import Header from '../Header/Header'
import ItemList from '../ItemList/ItemList'
import Filters from '../Filters/Filters'

const Shop: React.FC = () => {
    return (
        <>
            <Header />
            <main className='mainShop'>
                <Filters />
                <ItemList />
            </main>
        </>
    )
}

export default Shop
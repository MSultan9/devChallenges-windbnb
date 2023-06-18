import logo from '../assets/logo.svg';
import Search from './Search';

const Header = () => {
    return (
        <header>
            <div className='container py-8 flex items-center justify-between mx-auto'>
                <img src={logo} />
                <Search />
            </div>
        </header>
    )
}

export default Header
import logo from '../assets/logo.svg';
import { IFilter } from '../data/interfaces';
import Search from './Search';

type Props = {
    filters: IFilter
    setFilters: React.Dispatch<React.SetStateAction<IFilter>>;
}

const Header = ({ filters, setFilters }: Props) => {
    return (
        <header>
            <div className='container px-3 py-8 flex items-start lg:items-center justify-between mx-auto flex-col lg:flex-row gap-10'>
                <img src={logo} />
                <Search filters={filters} setFilters={setFilters} />
            </div>
        </header>
    )
}

export default Header
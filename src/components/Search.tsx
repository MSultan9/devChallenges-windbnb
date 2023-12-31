import { useRef, useState } from "react";
import stays from '../data/stays.json'
import { IFilter, IStay } from "../data/interfaces";

type Props = {
    filters: IFilter
    setFilters: React.Dispatch<React.SetStateAction<IFilter>>;
}

const Search = ({ filters, setFilters }: Props) => {

    const [openDrawer, setOpenDrawer] = useState(false)
    const [openLocations, setOpenLocations] = useState(false)
    const [openGuests, setOpenGuests] = useState(false)
    const [adultGuests, setAdultGuests] = useState(0)
    const [childrenGuests, setChildrenGuests] = useState(0)
    const selectedLocation = useRef(`${filters.location}`)
    const staysList = stays as IStay[]
    const locations = [...new Set(staysList.map(stay => `${stay.city}, ${stay.country}`))]

    const onLocationClick = (location: string) => {
        selectedLocation.current = location.split(",")[0]
        setOpenLocations(false)
    }

    const totalGuests = adultGuests + childrenGuests

    const onSearch = () => {
        setOpenDrawer(false)
        setFilters({ location: selectedLocation.current, guests: totalGuests > 0 ? totalGuests : null })
    }

    return (
        <>
            <div className="shadow-[0_1px_6px_rgba(0,0,0,0.1)] rounded-2xl self-center flex items-center text-sm cursor-pointer" onClick={() => setOpenDrawer(true)}>
                <div className="p-4 border-r text-gray-700">
                    {filters.location}, Finland
                </div>
                <div className={`p-4 border-r ${filters.guests === null ? 'text-gray-300' : 'text-gray-700'}`}>
                    {filters.guests ? `${filters.guests} guest(s)` : 'Add guests'}
                </div>
                <div className="p-4">
                    <span className="-rotate-45 inline-block text-red-400 text-xl">&#9906;</span>
                </div>
            </div>
            <div className={`fixed w-full h-full bg-[rgba(79,79,79,0.4)] left-0 top-0 transition ${openDrawer ? '' : '-translate-y-full'}`}>
                <div className="bg-white w-full py-20 px-2 h-5/6 lg:h-auto relative">
                    <div className="container mx-auto rounded-2xl shadow-[0_1px_6px_rgba(0,0,0,0.1)] grid-cols-1 grid lg:grid-cols-3 mb-10">
                        <div className="lg:border-r lg:border-b-0 border-b">
                            <div className={`px-6 py-3 border focus-within:border-gray-800 rounded-2xl ${openLocations ? 'border-gray-800' : 'border-transparent'}`}>
                                <label htmlFor="location" className="text-[9px] font-bold block">LOCATION</label>
                                <input id="location" value={`${selectedLocation.current}, Finland`} className="text-sm w-full outline-0" placeholder="Add location" onFocus={() => { setOpenLocations(true); setOpenGuests(false) }} readOnly />
                            </div>
                        </div>
                        <div className=" lg:border-r">
                            <div className={`px-6 py-3 border focus-within:border-gray-800 ${openGuests ? 'border-gray-800' : 'border-transparent'} rounded-2xl`}>
                                <label htmlFor="guests" className="text-[9px] font-bold block">GUESTS</label>
                                <input id="guests" value={totalGuests > 0 ? `${totalGuests} guests` : ''} className="text-sm w-full outline-0" placeholder="Add guests" onFocus={() => { setOpenGuests(true); setOpenLocations(false) }} readOnly />
                            </div>
                        </div>
                        <div className="text-center p-1 hidden lg:block">
                            <button className="bg-red-400 text-white h-full px-6 rounded-2xl font-bold inline-flex items-center text-sm" onClick={onSearch}>
                                <span className="-rotate-45 inline-block text-xl font-medium mr-2">&#9906;</span>Search
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 container mx-auto">
                        <div className={`px-4 ${openLocations ? '' : 'lg:invisible hidden lg:block'}`}>
                            {locations.map(location => {
                                return (
                                    <div className="mb-8 text-sm text-gray-600 cursor-pointer" key={location} onClick={() => onLocationClick(location)}>
                                        <span className="mr-2">&#128205;</span>{location}
                                    </div>
                                )
                            })}
                        </div>
                        <div className={`px-4 ${openGuests ? '' : 'lg:invisible hidden lg:block'}`}>
                            <div className="mb-12">
                                <div className="text-sm font-medium">Adults</div>
                                <div className="text-sm text-gray-400">Ages 13 or above</div>
                                <div className="flex items-center mt-3">
                                    <button onClick={() => setAdultGuests(prev => prev > 0 ? prev - 1 : prev)} className="rounded border w-[23px] h-[23px] flex items-center cursor-pointer justify-center text-gray-400 border-gray-400 text-xl">-</button>
                                    <div className="mx-4">{adultGuests}</div>
                                    <button onClick={() => setAdultGuests(prev => prev + 1)} className="rounded border w-[23px] h-[23px] flex items-center cursor-pointer justify-center text-gray-400 border-gray-400 text-xl">+</button>
                                </div>
                            </div>
                            <div>
                                <div className="text-sm font-medium">Children</div>
                                <div className="text-sm text-gray-400">Ages 2-12</div>
                                <div className="flex items-center mt-3">
                                    <button onClick={() => setChildrenGuests(prev => prev > 0 ? prev - 1 : prev)} className="rounded border w-[23px] h-[23px] flex items-center cursor-pointer justify-center text-gray-400 border-gray-400 text-xl">-</button>
                                    <div className="mx-4">{childrenGuests}</div>
                                    <button onClick={() => setChildrenGuests(prev => prev + 1)} className="rounded border w-[23px] h-[23px] flex items-center cursor-pointer justify-center text-gray-400 border-gray-400 text-xl">+</button>
                                </div>
                            </div>
                        </div>
                        <button className="-translate-x-1/2 lg:hidden absolute left-1/2 bottom-6 bg-red-400 text-white py-2.5 px-7 rounded-2xl font-bold inline-flex items-center text-sm" onClick={onSearch}>
                            <span className="-rotate-45 inline-block text-xl font-medium mr-2">&#9906;</span>Search
                        </button>
                        <button className="absolute top-4 right-4 text-xl" onClick={() => setOpenDrawer(false)}>x</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search;
type Props = {
    city: string
    country: string
    superHost: boolean
    title: string
    rating: number
    maxGuests: number
    type: string
    beds: number
    photo: string
}


const Card = (props: Props) => {
    return (
        <div>
            <img src={props.photo} className={`aspect-[395/269] w-full rounded-3xl mb-4 object-cover`} />
            <div className="flex items-center justify-between text-sm mb-4">
                <div>
                    {props.superHost &&
                        <span className="text-xs border border-gray-600 text-gray-600 rounded-xl py-2 px-2.5 mr-2.5">SUPER HOST</span>
                    }
                    <span className="text-gray-400">{props.type}</span>
                </div>
                <span className="text-gray-600 flex items-center"><span className="text-red-400 mr-1 text-xl">&#9733;</span>{props.rating}</span>
            </div>
            <div className="text-gray-700 font-semibold">{props.title}</div>
        </div>
    )
}

export default Card;
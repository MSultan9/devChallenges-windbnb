export interface IStay {
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

export interface IFilter {
    location: string
    guests: number | null
}
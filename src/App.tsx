import { useState } from "react"
import Card from "./components/Card"
import Header from "./components/Header"
import stays from './data/stays.json'
import { IFilter, IStay } from "./data/interfaces"

function App() {
  const [filters, setFilters] = useState<IFilter>({ location: 'Helsinki', guests: null })
  const staysList = stays as IStay[]

  const filteredStays = staysList.filter(stay => {
    if (stay.city === filters.location)
      if (filters.guests) {
        if (filters.guests <= stay.maxGuests)
          return stay
      } else return stay
  })

  return (
    <>
      <Header filters={filters} setFilters={setFilters} />
      <main className="container mx-auto mt-8 px-3">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Stays in Finland</h1>
          <div className="text-sm text-gray-600">{filteredStays.length}+ stays</div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-12 mb-20">
          {filteredStays.map(stay => {
            return (
              <Card key={stay.title} {...stay} />
            )
          })}
        </div>
      </main>
      <footer className="text-center p-6 text-gray-500 text-sm">created by MSultan9 - devChallenges.io</footer>
    </>
  )
}

export default App

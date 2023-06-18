import Card from "./components/Card"
import Header from "./components/Header"
import stays from './data/stays.json'

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

function App() {

  const staysList = stays as IStay[]

  return (
    <>
      <Header />
      <main className="container mx-auto mt-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Stays in Finland</h1>
          <div className="text-sm text-gray-600">12+ stays</div>
        </div>
        <div className="grid grid-cols-3 gap-x-8 gap-y-12 mb-20">
          {staysList.map(stay => {
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

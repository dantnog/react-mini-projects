import HomeCard from "../components/HomeCard";


export default function Home(){
  return(
    <section className="max-w-3xl mx-auto px-2 md:px-0">
      <h1 className="text-5xl my-2 text-green-500 font-semibold text-center">
        Mini Projects
      </h1>
      <div className="grid place-items-center gap-8 grid-cols-1 sm:grid-cols-2 mt-6">
        <HomeCard />
      </div>
    </section>
  )
}
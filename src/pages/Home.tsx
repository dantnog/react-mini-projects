import { HomeTodoCard, HomePasswordCard, HomeFinancesCard, HomeRPSCard } from "../components/HomeCards";
import Container from "../layouts/Container";

export default function Home() {
  return(
    <Container name="MINI PROJECTS">
      <div className="grid place-items-center gap-8 grid-cols-1 sm:grid-cols-2 mt-6">
        <HomeTodoCard />
        <HomePasswordCard />
        <HomeFinancesCard />
        <HomeRPSCard />
      </div>
    </Container>
  )
}
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'


function Home() {
  return (
    <div className='relative'>
      <Header />
      <Hero />
      <About />
      <Projects />
    </div>
  )
}

export default Home
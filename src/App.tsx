import './App.css'
import { Header } from './components/Header'
import { About } from './components/About'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'

function App() {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100 text-gray-900 dark:bg-[#0e1010] dark:text-gray-100'> 
      <Header />
      <main className='flex-grow px-4 sm:px-6 lg:px-8 py-8 w-full'>
        <div className='space-y-12 sm:space-y-16 md:space-y-20'>
          <Hero />
          <Projects />
          <Skills />
          <About />
        </div>
      </main>
    </div>
  )
}

export default App

import React, { useState } from 'react'

const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    console.log("Toggling dark mode:", !darkMode);
    setDarkMode(!darkMode)
  }

  return (
    <div className={`dark:bg-black ${darkMode && "dark"}`}>
      <div className='min-h-screen flex flex-col items-center justify-center gap-10 text-center font-mono dark:bg-black'>
        <h1 className='font-bold text-8xl dark:text-white'>Toggle Light/Dark Mode <br />
        Vikash Joshi 
        </h1>

        <p className='text-lg px-32 dark:text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sed quod mollitia et alias voluptatum modi nemo. Eos, doloremque. Quia voluptas odit fuga omnis pariatur eveniet. Necessitatibus est deleniti ipsa.
        </p>

        <button onClick={toggleDarkMode} className='py-4 px-5 rounded-full font-semibold border-2 border-black hover:scale-105 transition-all duration-300 dark:text-white dark:border-white'>{darkMode ? "light" : "Dark"} Mode</button>
      </div>
    </div>
  )
}

export default App

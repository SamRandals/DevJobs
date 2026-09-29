import { useState } from 'react'


import './App.css'
import Header from './pages/header'
import Hero from './pages/Hero'
import SearchJob from './pages/searchJob'
import { Pagination } from './pages/Pagination'
import { JobListing } from './pages/JobListing'
import { type JobsData } from './pages/jobCard'

// data
import jobsDataJson from "./data/data.json"
// idea de proyecto de MiduDev

// solo estoy siguiendo el curso de el sobre full-stack developer

// pagina hecha por Samuel 

// todos los derechos pertenencen a MiduDev, tanto diseño como idea.
const RESULTS_PER_PAGE:number =5

function App() {
  const jobsData: JobsData = jobsDataJson
  
  //option page state
  const [option, setOption] = useState<string>("home")

  //page controller
  const [currentPage, setCurrentPage] = useState<number>(1)
  const totalPages = Math.ceil(jobsData.length / RESULTS_PER_PAGE)

  const pagedResults = jobsDataJson.slice(
    (currentPage -1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE
  )
  
  const HandlePageChange= (page:number) =>{
    setCurrentPage(page)
  }

  return (
    <>

    <Header whatOptionIsSelected={(option)=>setOption(option)}></Header>

    {
      // vista de inicio predeterminada
      option === "home" && 
      <>
      <Hero></Hero>
      </>
    }

        {
      option === "search" && 
      <>
      <SearchJob></SearchJob>

      <JobListing jobs={pagedResults  }></JobListing>

      <Pagination onPageChange={HandlePageChange}  currentPage={currentPage} totalPage={totalPages}/>
      </>
    }

    
   
  


      
    </>
  )
}

export default App

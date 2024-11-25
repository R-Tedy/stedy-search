import Filters from '@/components/Filters'
import ResourceCard from '@/components/ResourceCard'
import SearchForm from '@/components/SearchForm'
import { getResources } from '@/sanity/actions'
import React from 'react'

const Home = async () => {

  const resources = await getResources({
    query: '',
    category: '',
    page: '1'
  })

  // console.log(resources)
  return (
    <>
      <section className=''>
      <div className='m-auto w-[70vw] h-[30vh] flex justify-center items-center bg-banner rounded-[30px] mt-10 bg-cover bg-no-repeat'>
        <h1 className='text-white font-extrabold text-[50px]'>The state of the world with internet</h1>
      </div>
      <SearchForm/>
    </section>
    <Filters/>
    <section className='flex-center mt-6 w-full flex-col sm:mt-20'>
      Header
      <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
        {resources?.length > 0 ? (
          resources.map((resource: any)=>(
            <ResourceCard
              key={resource._id}
              title={resource.title}
              id={resource._id}
              image={resource.image}
              downloadNumber={resource.downloadNumber}
              slug={resource.slug}
            />
          ))
        ):(
          <p className='text-white'>
            Resources not found!!
          </p>
        )}
      </div>
    </section>
    </>
  )
}

export default Home
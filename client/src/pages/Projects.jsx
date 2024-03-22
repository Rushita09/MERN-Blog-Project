import React from 'react'
import CallToAction from '../components/CallToAction'

export default function Projects() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center
    items-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>
        Projects
      </h1>
      <p className='text-md text-gray-500'>
        Here are some of my projects. I am always open to collaborating on other projects, so feel free to reach out if you have a project
      </p>
      <CallToAction />
    </div>
  )
}

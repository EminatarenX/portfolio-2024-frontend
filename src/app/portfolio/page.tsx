"use client"
import Layout from '@/modules/common/layouts/layout'
import Project from '@/modules/project/components/project.component'
import ProjectLayout from '@/modules/project/layouts/project-layout.component'
import { useProjectStore } from '@/stores/project.store'
import React from 'react'

export default function PortfolioPage() {
  const projects = useProjectStore( state => state.projects)
 
  return (
    <Layout>
      <ProjectLayout />

      <section className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {
          projects.length === 0 ? null : projects.map(project => (
            <Project key={project.id} project={project} />
          ))
        }
      </section>
    </Layout>
  )
}

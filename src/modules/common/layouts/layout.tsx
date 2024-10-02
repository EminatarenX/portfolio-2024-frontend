"use client";
import React from "react";
import Aside from "../components/aside.component";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayout } from "../hooks/useLayout";
import { useEffect } from "react";
import { useActivityStore } from "@/stores/activity.store";
import { useProfileStore } from "@/stores/profile.store";
import { useProjectStore } from "@/stores/project.store";
import { useSoftSkillStore } from "@/stores/soft-skill.store";
import { useSkillStore } from "@/stores/skill.store";
import { useEducationStore } from "@/stores/education.store";
import { useLanguageStore } from "@/stores/languages.store";
import { useResumeStore } from "@/stores/resume.store";
import { useExperienceStore } from "@/stores/experience.store";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const pathname = usePathname();
  const { title, routes } = useLayout(pathname);
  const getActivities = useActivityStore(state => state.getActivities)
  const getProfile = useProfileStore( state => state.getProfile)
  const getProjects = useProjectStore( state => state.getProjects)
  const getSoftSkills = useSoftSkillStore( state => state.getSoftSkills)
  const getSkills = useSkillStore( state => state.getSkills)
  const getEducation = useEducationStore( state => state.getEducationList)
  const getLanguages = useLanguageStore( state => state.getLanguages)
  const getResume = useResumeStore( state => state.getResume)
  const getExperience = useExperienceStore(state => state.getExperience)

  useEffect(() => {
    getActivities()
    getProfile()
    getProfile()
    getSoftSkills()
    getProjects()
    getSkills()
    getEducation()
    getLanguages()
    getResume()
    getExperience()
    
  },[getActivities, getEducation, getExperience, getLanguages, getProfile, getProjects, getResume, getSkills, getSoftSkills])

  return (
    <main className="bg-neutral-950 px-48 h-screen flex gap-5 ">
      <Aside/>
      <div className="flex-1 py-14 overflow-auto scrollbar-hide">
        <section className="flex  flex-col  px-8 pt-10 pb-12 bg-neutral-900  rounded-2xl border border-neutral-800 relative ">
          <header className="flex justify-between">
            <h1 className="text-white text-3xl font-bold mb-3 ">
              {title}
            </h1>
            <nav className="absolute top-0 right-0 px-10 py-4 bg-neutral-800 rounded-bl-2xl border-b border-l border-neutral-700">
              <ul className="flex gap-10">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    className={`${
                      pathname === route.path
                        ? "text-yellow-200"
                        : "text-neutral-400"
                    } font-semibold `}
                    href={route.path}
                  >
                    {route.name}
                  </Link>
                ))}
              </ul>
            </nav>
          </header>
          {children}
        </section>
      </div>
    </main>
  );
}

"use client";
import Activity from "@/modules/activity/components/activity.component";
import { useIcons } from "@/modules/common/hooks/useIcons";
import Layout from "@/modules/common/layouts/layout";
import SoftSkill from "@/modules/soft-skill/components/soft-skill.component";
import { useActivityStore } from "@/stores/activity.store";
import { useResumeStore } from "@/stores/resume.store";
import { useSoftSkillStore } from "@/stores/soft-skill.store";
import { useEffect } from "react";
export default function Home() {
  const getResume = useResumeStore((state) => state.getResume);
  const resume = useResumeStore((state) => state.resume);
  const getActivities = useActivityStore((state) => state.getActivities);
  const activities = useActivityStore((state) => state.activities);
  const resumeParagraphs = resume?.content.split("\n");
  const getSoftSkills = useSoftSkillStore((state) => state.getSoftSkills);
  const softSkills = useSoftSkillStore((state) => state.softSkills);
  const { icons } = useIcons();
  useEffect(() => {
    getResume();
    getActivities();
    getSoftSkills();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      <section>
        <div className="flex flex-col gap-4 mt-4">
          {resumeParagraphs?.map((p, i) => (
            <p key={i} className="text-white">
              {p}
            </p>
          ))}
        </div>
      </section>
      <section className="mt-8">
        <h2 className="text-white font-semibold text-2xl">A que me dedico</h2>
        <div className=" grid grid-cols-2 gap-3 mt-5">
          {activities?.length === 0
            ? null
            : activities?.map((activity) => (
                <Activity key={activity.id} activity={activity} />
              ))}
        </div>
      </section>
      <section className="mt-8">
        <h2 className="text-white font-semibold text-2xl">Soft Skills</h2>
        <div className="grid grid-cols-2 gap-3 mt-10">
          {softSkills?.length === 0
            ? null
            : softSkills.map((softSkill) => (
                <SoftSkill key={softSkill.id} skill={softSkill} />
              ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-white font-semibold text-2xl">Tech Stack</h2>
        <div className="flex justify-center gap-5">
          {icons.get("ts")}
          {icons.get("nextjs")}
          {icons.get("code-lg")}
          {icons.get("nestjs")}
          {icons.get("node")}
        </div>
      </section>
    </Layout>
  );
}

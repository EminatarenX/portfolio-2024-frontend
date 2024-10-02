import Image from "next/image";
import { memo } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import type { Project } from "@/types/project.interface";
import Link from "next/link";

interface Props {
  project: Project;
}

const Project = memo(function Project({ project }: Props) {
  return (
    <article className="rounded-xl flex flex-col gap-3 group max-h-96">
      <div className="relative overflow-hidden rounded-xl ">
        <Image
          width={500}
          height={500}
          src={project.image}
          alt="project-image"
          className="object-cover h-40 rounded-xl group-hover:scale-125 duration-300"
          loading="lazy"
        />
        <div className="w-full h-full bg-opacity-0 group-hover:bg-opacity-60 bg-neutral-900 absolute top-0 left-0 flex justify-center items-center transition-all">
          <Link
            href={project.link}
            className="rounded-lg p-4 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 bg-neutral-700 transition-all duration-300"
          >
            <RemoveRedEyeOutlinedIcon sx={{ color: "#fef08a" }} />
          </Link>
        </div>
      </div>
      <div className="flex flex-col ">
        <h2 className="text-white font-semibold">{project.name}</h2>
        <p className="text-neutral-400 capitalize">{project.category}</p>
      </div>
    </article>
  );
});

export default Project;

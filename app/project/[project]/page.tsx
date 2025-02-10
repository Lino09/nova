import { GlitchText } from "@/components";
import { getCloudinaryImages } from "@/lib/cloudinary";
import Image from "next/image";
import { notFound } from "next/navigation";


export default async function ProjectPage({
  params,
}: {
  params: Promise<{ project: string }>
}) {
 
  const project = (await params).project

  const images = await getCloudinaryImages(project);
  if (!images || images.length === 0) {
    return notFound();
  }
  const projectName = project.toString().toUpperCase().replace('-', ' ')

  return (
    <div className="p-10 text-cyberpunk-ylw">
     <GlitchText  className="text-3xl">{projectName}</GlitchText>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
        {images.map((url:string, index:string) => (
          <Image width={300} height={300} key={index} src={url} alt={`Image ${index}`} className="w-full rounded-lg shadow-lg" />
        ))}
      </div>
    </div>
  );
}

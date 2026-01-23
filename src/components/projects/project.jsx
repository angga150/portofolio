/* eslint-disable react/jsx-key */
import Card from "../UI/cards/card";
import TechStack from "../tech-stack/techStack";

export default function Project() {
  return (
    <>
      {/* background */}
      <h1 className="text-6xl text-secondary/10 absolute right-0 w-max translate-y-14 -z-50" id="parallaxProjects">
        &lt; 02. Projects /&gt;
      </h1>

      {/* projects */}
      <div className="px-6 md:px-10 lg:mx-auto" id="projects">
        <div className="max-w-screen-xl mx-auto">
          {/* headings */}
          <div className="flex items-center gap-6 md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold w-max">02. Projects</h1>
            <div className="flex-1">
              <div className="w-full h-[2px] bg-primary"></div>
            </div>
          </div>

          {/* content */}
          <div className="mt-10">
            {/* Hmmi-Community */}
            <div>
              <Card
                title={"Hmmi-Community"}
                description={
                  "Hmmi-Community is a web-based platform designed for Hmmi students to connect, share resources, and collaborate on projects. Built using React for the frontend, PHP for the backend, and styled with TailwindCSS, it offers features such as user authentication, discussion forums, and resource sharing to enhance the academic experience."
                }
                image={"assets/hmmi.png"}
                techStack={[<TechStack text="React" />, <TechStack text="PHP" />, <TechStack text="TailwindCSS" />]}
                link={"https://github.com/angga150/Hmmi-Community"}
              />
            </div>

            {/* Todolist WEB */}
            <div className="mt-20">
              <Card
                title={"Todolist WEB"}
                description={"Todolist WEB is a simple web application for managing tasks. Built with PHP and styled using TailwindCSS, it allows users to add, view, and delete tasks efficiently."}
                image={"assets/todolist.png"}
                techStack={[<TechStack text="PHP" />, <TechStack text="TailwindCSS" />]}
                link={"https://github.com/angga150/To-Do-List"}
              />
            </div>

            {/* Cerco Nano Cramic */}
            <div className="mt-20">
              <Card
                title={"Cerco Nano Cramic"}
                description={"Nano Ceramic Coating adalah lapisan pelindung berbasis teknologi nano yang dirancang untuk memberikan perlindungan jangka panjang pada permukaan cat kendaraan."}
                image={"assets/nanocramic.jpg"}
                techStack={[<TechStack text="Vanilla CSS" />]}
                link={"https://cerco-nano-cramic.vercel.app/"}
              />
            </div>

            {/* Central Plastik */}
            <div className="mt-20">
              <Card
                title={"Central Plastik"}
                description={"Central Plastik adalah perusahaan yang bergerak di bidang produksi dan distribusi produk plastik berkualitas tinggi untuk berbagai kebutuhan industri dan konsumen."}
                image={"assets/centralplastik.jpg"}
                techStack={[<TechStack text="PHP" />, <TechStack text="Bootstrap" />]}
                link={"#Private Repository"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

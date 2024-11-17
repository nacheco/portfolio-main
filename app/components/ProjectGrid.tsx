interface Project {
    title: string;
    link: string;
    bgImage: string;
    textColor?: string;
}

const projects: Project[] = [
    {
        title: "Project Two",
        link: "#",
        bgImage: "/path/to/image2.jpg",
    },
    {
        title: "Project One",
        link: "#",
        bgImage: "",
    },
    {
        title: "Project Three",
        link: "#",
        bgImage: "/path/to/image3.jpg",
    },
    {
        title: "Project Four",
        link: "#",
        bgImage: "/path/to/image4.jpg",
    },
    {
        title: "Project Five",
        link: "#",
        bgImage: "/path/to/image5.jpg",
        textColor: "text-lightPurple" // Special case for dark background
    },
    {
        title: "Project Six",
        link: "#",
        bgImage: "/path/to/image6.jpg",
    },
    {
        title: "Project Seven",
        link: "#",
        bgImage: "/path/to/image7.jpg",
    },
    {
        title: "Project Eight",
        link: "#",
        bgImage: "/path/to/image8.jpg",
    },
    {
        title: "Project Nine",
        link: "#",
        bgImage: "/path/to/image9.jpg",
    }
];

const ProjectGrid = () => {
    const gridClasses = [
        "md:row-start-1 md:col-span-full xl:col-span-2 xl:col-start-4 xl:row-start-1 bg-deepPurple",
        "md:row-start-2 md:col-span-full xl:col-span-3 xl:col-start-1 xl:row-start-1 bg-lightPurple",
        "md:row-start-3 md:col-span-full xl:col-span-3 xl:row-span-2 xl:col-start-3 xl:row-start-2 bg-deepPurple",
        "md:row-start-4 md:col-span-full xl:col-span-2 xl:col-start-1 xl:row-start-2 bg-purple",
        "md:row-start-5 md:col-span-full xl:col-span-2 xl:col-start-4 xl:row-start-5 bg-lightDark",
        "md:row-start-6 md:col-span-full xl:col-span-2 xl:col-start-1 xl:row-start-3 bg-deepPurple",
        "md:row-start-7 md:col-span-full xl:col-span-3 xl:col-start-3 xl:row-start-4 bg-deepPurple",
        "md:row-start-8 md:col-span-full xl:col-span-2 xl:col-start-1 xl:row-start-4 bg-lightPurple",
        "md:row-start-9 md:col-span-full xl:col-span-3 xl:col-start-1 xl:row-start-5 bg-purple"
    ];

    return (
        <div className="mx-auto lg:px-0 grid grid-cols-1 grid-rows-auto xl:grid-cols-5 xl:grid-rows-5 gap-7 w-[90%] h-[400vh] md:w-[80%] xl:h-[160vh] xl:w-[60%] 2xl:w-[70%]">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className={`${gridClasses[index]} h-full rounded-xl transition-transform duration-300 hover:scale-[1.05] hover:shadow-lg`}
                    style={{
                        backgroundImage: `url(${project.bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <a href={project.link}>
                        <div className="w-full h-full flex flex-col justify-end p-10">
                            <h2 className={`text-4xl font-bold ${project.textColor || 'text-lightDark'}`}>
                                {project.title}
                            </h2>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default ProjectGrid

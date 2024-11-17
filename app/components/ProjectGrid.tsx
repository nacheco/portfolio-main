const ProjectGrid = () => {
    return (
        <div className="grid grid-cols-5 grid-rows-5 gap-7  w-[1400px] h-[2000px]">
            <div className="col-span-2 col-start-4 row-start-1 bg-deepPurple h-full rounded-lg"></div>
            <div className="col-span-3 col-start-1 row-start-1 bg-lightPurple h-full rounded-lg"></div>
            <div className="col-span-3 row-span-2 col-start-3 row-start-2 bg-deepPurple h-full rounded-lg"></div>
            <div className="col-span-2 col-start-1 row-start-2 bg-purple h-full rounded-lg"></div>
            <div className="col-span-2 col-start-4 row-start-5 bg-lightDark h-full rounded-lg"></div>
            <div className="col-span-2 col-start-1 row-start-3 bg-deepPurple h-full rounded-lg"></div>
            <div className="col-span-3 col-start-3 row-start-4 bg-deepPurple h-full rounded-lg"></div>
            <div className="col-span-2 col-start-1 row-start-4 bg-lightPurple h-full rounded-lg"></div>
            <div className="col-span-3 col-start-1 row-start-5 bg-purple h-full rounded-lg"></div>
        </div>

    )
}

export default ProjectGrid

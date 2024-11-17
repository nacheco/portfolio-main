const ProjectGrid = () => {
    return (
        <div className="mx-auto lg:px-0 grid grid-cols-1 grid-rows-auto xl:grid-cols-5 xl:grid-rows-5 gap-7 w-[90%] h-[400vh] md:w-[80%] xl:h-[160vh] xl:w-[60%] 2xl:w-[70%]">
            <div className="md:row-start-1 md:col-span-full xl:col-span-2 xl:col-start-4 xl:row-start-1 bg-deepPurple h-full rounded-xl">1</div>
            <div className="md:row-start-2 md:col-span-full xl:col-span-3 xl:col-start-1 xl:row-start-1 bg-lightPurple h-full rounded-xl">2</div>
            <div className="md:row-start-3 md:col-span-full xl:col-span-3 xl:row-span-2 xl:col-start-3 xl:row-start-2 bg-deepPurple h-full rounded-xl">3</div>
            <div className="md:row-start-4 md:col-span-full xl:col-span-2 xl:col-start-1 xl:row-start-2 bg-purple h-full rounded-xl">4</div>
            <div className="md:row-start-5 md:col-span-full xl:col-span-2 xl:col-start-4 xl:row-start-5 bg-lightDark h-full rounded-xl">5</div>
            <div className="md:row-start-6 md:col-span-full xl:col-span-2 xl:col-start-1 xl:row-start-3 bg-deepPurple h-full rounded-xl">6</div>
            <div className="md:row-start-7 md:col-span-full xl:col-span-3 xl:col-start-3 xl:row-start-4 bg-deepPurple h-full rounded-xl">7</div>
            <div className="md:row-start-8 md:col-span-full xl:col-span-2 xl:col-start-1 xl:row-start-4 bg-lightPurple h-full rounded-xl">8</div>
            <div className="md:row-start-9 md:col-span-full xl:col-span-3 xl:col-start-1 xl:row-start-5 bg-purple h-full rounded-xl">9</div>
        </div>

    )
}

export default ProjectGrid

const Hero = ({ }) => {
    return (
        <div className="flex flex-col items-center justify-center h-[50rem]">
            <h1 className="text-[140px] lg:text-[240px] tracking-tighter font-bold text-white -ml-6 -mb-6 lg:-ml-12 lg:-mb-12">Hello</h1>
            <p className="text-[16px] lg:text-[28px] text-indigo-300/70">
                I'm Natanael Pacheco - <span className="text-transparent bg-clip-text bg-main-gradient font-semibold">UI/UX Engineer</span>
                <br />
                Some interesting message should go here...
            </p>
        </div>
    )
}

export default Hero;



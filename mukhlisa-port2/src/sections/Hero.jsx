export const Hero = () => {
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0">
                {/* <img src="/hero-background.jpg" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover" /> */}
                <img src="/hero-background.jpg" alt="Hero Image" className="w-full h-full object-cover opacity-70" />
                <div className="absolute inset-0 bg-linear-to-b from-background to-background"></div>
            </div>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div 
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#9B4A2F",
                            left:`${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${
                                15 + Math.random() * 20
                            }s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>
            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left column - text Content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className = "w-2 h-2 bg-primary rounded-full"/>
                                    Designing experimental technical systems for education, equity, and collective well-being.
                            </span>
                        </div>
                    </div>
                    {/* right column - profile image */}
                </div>
            </div>
        </section>
            );
}
        {/* <section id="hero" className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Hi, I'm <span className="text-primary">Mukhlisabonu Nematova</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                    Full Stack Developer & UI/UX Enthusiast
                </p>
                <div className="flex gap-4 justify-center">
                    <a href="#contact" className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/80 transition-colors">
                        Get In Touch
                    </a>
                    <a href="#projects" className="border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-colors">
                        View My Work
                    </a>
                </div>
            </div> */}
    {/* </section> */}

export const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-secondary">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>
                <div className="max-w-4xl mx-auto">
                    <div className="glass p-6 rounded-lg mb-6">
                        <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
                        <p className="text-primary mb-2">Tech Company • 2023 - Present</p>
                        <p className="text-gray-300">
                            Developed and maintained web applications using React, Node.js, and modern databases.
                            Collaborated with cross-functional teams to deliver high-quality software solutions.
                        </p>
                    </div>
                    <div className="glass p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
                        <p className="text-primary mb-2">Startup Inc • 2022 - 2023</p>
                        <p className="text-gray-300">
                            Built responsive user interfaces with React and Tailwind CSS.
                            Improved application performance and user experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
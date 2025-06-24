import Image from "next/image"

export default function AboutHQ() {
    const teamMembers = [
        { name: "Danielle Hutchinson", image: "/placeholder.svg?height=200&width=160" },
        { name: "Danielle Hutchinson", image: "/placeholder.svg?height=200&width=160" },
        { name: "Danielle Hutchinson", image: "/placeholder.svg?height=200&width=160" },
        { name: "Danielle Hutchinson", image: "/placeholder.svg?height=200&width=160" },
        { name: "Danielle Hutchinson", image: "/placeholder.svg?height=200&width=160" },
        { name: "Danielle Hutchinson", image: "/placeholder.svg?height=200&width=160" },
    ]

    return (
        <section className="bg-[#0f0f10] text-white py-20 px-6 md:px-12 lg:px-20 relative">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Main Heading */}
                <div className="text-center mb-20">
                    <h1 className="font-avenir text-7xl md:text-8xl lg:text-[120px] font-light tracking-tight leading-none">
                        About HQ
                    </h1>
                </div>

                {/* Team Grid */}
                <div className="flex justify-center mb-32">
                    <div className="flex flex-col items-center gap-8">
                        {/* Top row - 4 members */}
                        <div className="flex gap-6">
                            {teamMembers.slice(0, 4).map((member, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <div className="bg-white p-3 mb-3 shadow-lg">
                                        <Image
                                            src={member.image || "/placeholder.svg"}
                                            alt={member.name}
                                            width={140}
                                            height={180}
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="font-avenir text-xs text-center font-light">{member.name}</p>
                                </div>
                            ))}
                        </div>

                        {/* Bottom row - 2 members centered */}
                        <div className="flex gap-6">
                            {teamMembers.slice(4, 6).map((member, index) => (
                                <div key={index + 4} className="flex flex-col items-center">
                                    <div className="bg-white p-3 mb-3 shadow-lg">
                                        <Image
                                            src={member.image || "/placeholder.svg"}
                                            alt={member.name}
                                            width={140}
                                            height={180}
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="font-avenir text-xs text-center font-light">{member.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content Sections with 5 Vertical Lines */}
                <div className="relative min-h-[800px]">
                    {/* 4 Vertical divider lines creating 5 equal sections */}
                    <div className="hidden lg:block absolute left-[20%] top-0 bottom-0 w-px bg-gray-700 opacity-40"></div>
                    <div className="hidden lg:block absolute left-[40%] top-0 bottom-0 w-px bg-gray-700 opacity-40"></div>
                    <div className="hidden lg:block absolute left-[60%] top-0 bottom-0 w-px bg-gray-700 opacity-40"></div>
                    <div className="hidden lg:block absolute left-[80%] top-0 bottom-0 w-px bg-gray-700 opacity-40"></div>

                    {/* APPROACH Section */}
                    <div className="relative">
                        {/* APPROACH label aligned to 1st vertical line (20%) */}
                        <div className="absolute top-0 left-[20%] transform -translate-x-2">
                            <div className="text-[10px] font-avenir tracking-[0.3em] text-gray-400 uppercase font-medium">
                                APPROACH
                            </div>
                        </div>

                        {/* APPROACH content starting from 2nd vertical line (40%) */}
                        <div className="absolute top-12 left-[40%] right-0 pr-8">
                            <h2 className="font-avenir text-4xl lg:text-[52px] font-light mb-8 leading-[0.95] tracking-tight max-w-2xl">
                                Crafting <em className="italic font-light">Moments</em>
                                <br />
                                with Purpose and
                                <br />
                                Emotion
                            </h2>
                            <div className="space-y-6 font-avenir text-[15px] leading-[1.6] text-white font-light max-w-2xl">
                                <p>
                                    At HQ Entertainment, we don't just produce events — we craft immersive, unforgettable experiences. As
                                    a full-service event solutions company, we specialise in bringing bold ideas to life through
                                    cutting-edge technology, refined aesthetics, and precision execution.
                                </p>
                                <p>
                                    From live concerts and fashion shows to corporate launches and cultural festivals, our expertise lies
                                    in turning concepts into captivating realities that resonate with audiences and leave lasting
                                    impressions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* PHILOSOPHY Section */}
                    <div className="relative">
                        {/* PHILOSOPHY label aligned to 2nd vertical line (40%) */}
                        <div className="absolute top-80 left-[40%] transform -translate-x-2">
                            <div className="text-[10px] font-avenir tracking-[0.3em] text-gray-400 uppercase font-medium">
                                PHILOSOPHY
                            </div>
                        </div>

                        {/* PHILOSOPHY content starting from 3rd vertical line (60%) */}
                        <div className="absolute top-96 left-[60%] right-0 pr-8">
                            <h2 className="font-avenir text-4xl lg:text-[52px] font-light mb-8 leading-[0.95] tracking-tight max-w-xl">
                                Purpose Driven
                                <br />
                                Production <em className="italic font-light">With</em>
                                <br />
                                <em className="italic font-light">Impact</em>
                            </h2>
                            <div className="space-y-6 font-avenir text-[15px] leading-[1.6] text-white font-light max-w-xl">
                                <p>We believe that a truly remarkable event is not only seen or heard — it's felt.</p>
                                <p>
                                    That's why every project at HQ Entertainment is rooted in intentional design, emotional storytelling,
                                    and operational excellence.
                                </p>
                                <p>
                                    Whether it's an intimate venue or a stadium-scale production, we align vision, creativity, and
                                    logistics to deliver seamless results that inspire connection and spark emotion.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* BEYOND EVENTS Section */}
                    <div className="relative">
                        {/* BEYOND EVENTS label in the rightmost column */}
                        <div className="absolute top-0 left-[80%] pl-4">
                            <div className="text-[10px] font-avenir tracking-[0.3em] text-gray-400 uppercase font-medium">
                                BEYOND EVENTS
                            </div>
                        </div>

                        {/* BEYOND EVENTS content starting from 1st line in that section */}
                        <div className="absolute top-12 left-[80%] right-0 pr-8">
                            <h2 className="font-avenir text-3xl lg:text-[42px] font-light mb-8 leading-[0.95] tracking-tight">
                                How People &<br />
                                Culture Inspire <em className="italic font-light">Our</em>
                                <br />
                                <em className="italic font-light">Creativity</em>
                            </h2>
                            <div className="space-y-6 font-avenir text-[14px] leading-[1.6] text-white font-light">
                                <p>
                                    We find inspiration in vibrant cultures, cinematic storytelling, and spontaneous moments of joy — all
                                    of which fuel the energy We bring to every production.
                                </p>
                                <p>
                                    For us, creativity isn't just a skill — it's a lifestyle built around connection, rhythm, and
                                    experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured In Section */}
                <div className="mt-32 pt-16 relative">
                    {/* FEATURED IN label aligned to 2nd vertical line (40%) */}
                    <div className="absolute top-0 left-[40%] transform -translate-x-2">
                        <div className="text-[10px] font-avenir tracking-[0.3em] text-gray-400 uppercase font-medium">
                            FEATURED IN
                        </div>
                    </div>

                    {/* FEATURED IN content starting from 3rd vertical line (60%) */}
                    <div className="absolute top-8 left-[60%] right-0 pr-8">
                        <p className="font-avenir text-[15px] text-white leading-[1.6] font-light max-w-md">
                            Our work has been featured by Artwalk Colombo, Yamu, Ceylon Today, The Sunday Times, Roar Media, and more.
                        </p>
                    </div>

                    {/* Final tagline */}
                    <div className="pt-24 text-center">
                        <p className="font-avenir text-2xl lg:text-3xl leading-tight font-light">
                            Proudly partnered with visionary brands to craft <em className="italic">extraordinary experiences</em>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

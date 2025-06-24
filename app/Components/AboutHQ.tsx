import Image from "next/image"

export default function AboutHQ() {
    const teamMembers = [
        { name: "Ruvindu Parakrama", image: "/image.jpg" },
        { name: "Ruvindu Parakrama", image: "/image (1).jpg" },
        { name: "Ruvindu Parakrama", image: "/image (2).jpg" },
        { name: "Ruvindu Parakrama", image: "/image (3).jpg" },
        { name: "Ruvindu Parakrama", image: "/image (4).jpg" },
        { name: "Ruvindu Parakrama", image: "/image (5).jpg" },]

    return (
        <section className="bg-[#0f0f10] text-white px-6 md:px-12 lg:px-16 relative">

            <div>
                {/* 4 Vertical divider lines creating 5 equal sections */}
                <div className="hidden lg:block absolute left-[20%] top-0 bottom-0 w-px bg-gray-700 opacity-40"></div>
                <div className="hidden lg:block absolute left-[40%] top-0 bottom-0 w-px bg-gray-700 opacity-40"></div>
                <div className="hidden lg:block absolute left-[60%] top-0 bottom-0 w-px bg-gray-700 opacity-40"></div>
                <div className="hidden lg:block absolute left-[80%] top-0 bottom-0 w-px bg-gray-700 opacity-40"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Main Heading */}
                    <div className="text-center mb-20">
                        <h1 className="font-avenir text-7xl md:text-8xl lg:text-[120px] font-bold">
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
                                        <div
                                            className="bg-white rounded-[4.88px] shadow-lg"
                                            style={{ width: "220px", height: "310px" }}
                                        >
                                            <div className="p-2 h-full flex flex-col">
                                                <Image
                                                    src={member.image || "/placeholder.svg"}
                                                    alt={member.name}
                                                    width={180}
                                                    height={200}
                                                    className="object-cover rounded-[4.88px] flex-1"
                                                    style={{ width: "100%", height: "200px" }}
                                                />
                                                <div className="mt-3 bg-white rounded-[4.88px] text-left">
                                                    <p className="font-avenir text-xs font-medium text-black">{member.name}</p>
                                                    <p className="font-avenir text-xs text-gray-600">@harry.hq</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom row - 2 members centered */}
                            <div className="flex gap-4">
                                {teamMembers.slice(4, 6).map((member, index) => (
                                    <div key={index + 4} className="flex flex-col items-center">
                                        <div
                                            className="bg-white rounded-[4.88px] shadow-lg"
                                            style={{ width: "220px", height: "310px" }}
                                        >
                                            <div className="p-2 h-full flex flex-col">
                                                <Image
                                                    src={member.image || "/placeholder.svg"}
                                                    alt={member.name}
                                                    width={180}
                                                    height={200}
                                                    className="object-cover rounded-[4.88px] flex-1"
                                                    style={{ width: "100%", height: "200px" }}
                                                />
                                                <div className="mt-3 bg-white rounded-[4.88px] text-left">
                                                    <p className="font-avenir text-xs font-medium text-black">{member.name}</p>
                                                    <p className="font-avenir text-xs text-gray-600">@harry.hq</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    {/* APPROACH Section */}
                    <div className="relative mb-32">
                        {/* APPROACH label aligned to 1st vertical line (20%) */}
                        <div className="absolute top-0 left-[20%] transform -translate-x-2">
                            <div className="text-[10px] font-avenir tracking-[0.3em] text-gray-400 uppercase font-medium">
                                APPROACH
                            </div>
                        </div>

                        {/* APPROACH content starting from 2nd vertical line (40%) */}
                        <div className="ml-[40%] pr-8">
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
                    <div className="relative mb-32">
                        {/* PHILOSOPHY label aligned to 2nd vertical line (40%) */}
                        <div className="absolute top-0 left-[40%] transform -translate-x-2">
                            <div className="text-[10px] font-avenir tracking-[0.3em] text-gray-400 uppercase font-medium">
                                PHILOSOPHY
                            </div>
                        </div>

                        {/* PHILOSOPHY content starting from 3rd vertical line (60%) */}
                        <div className="ml-[60%] pr-8">
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
                    <div className="relative mb-32">
                        {/* BEYOND EVENTS label in the rightmost column */}
                        <div className="absolute top-0 left-[80%] pl-4">
                            <div className="text-[10px] font-avenir tracking-[0.3em] text-gray-400 uppercase font-medium">
                                BEYOND EVENTS
                            </div>
                        </div>

                        {/* BEYOND EVENTS content starting from 1st line in that section */}
                        <div className="ml-[80%] pr-8">
                            <h2 className="font-avenir text-3xl lg:text-[42px] font-light mb-8 leading-[0.95] tracking-tight">
                                How People &<br />
                                Culture Inspire <em className="italic font-light">Our</em>
                                <br />
                                <em className="italic font-light">Creativity</em>
                            </h2>
                            <div className="space-y-6 font-avenir text-[14px] leading-[1.6] text-white font-light">
                                <p>
                                    We find inspiration in vibrant cultures, cinematic storytelling, and spontaneous moments of joy — all
                                    of which fuel the energy We bring to every production. For us, creativity isn't just a skill — it's a
                                    lifestyle built around connection, rhythm, and experience.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* FEATURED IN Section */}
                    <div className="relative mb-16">
                        {/* FEATURED IN label aligned to 2nd vertical line (40%) */}
                        <div className="absolute top-0 left-[40%] transform -translate-x-2">
                            <div className="text-[10px] font-avenir tracking-[0.3em] text-gray-400 uppercase font-medium">
                                FEATURED IN
                            </div>
                        </div>

                        {/* FEATURED IN content starting from 3rd vertical line (60%) */}
                        <div className="ml-[60%] pr-8">
                            <p className="font-avenir text-[15px] text-white leading-[1.6] font-light max-w-md pt-8">
                                Our work has been featured by Artwalk Colombo, Yamu, Ceylon Today, The Sunday Times, Roar Media, and
                                more.
                            </p>
                        </div>
                    </div>

                    {/* Final tagline */}
                    <div className="text-center mt-16">
                        <p className="font-avenir text-2xl lg:text-3xl leading-tight font-light">
                            Proudly partnered with visionary brands to craft <em className="italic">extraordinary experiences</em>.
                        </p>
                    </div>
                </div>
            </div>
        </section >
    )
}

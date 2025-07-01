import Image from "next/image";

export default function AboutHQ() {
  const teamMembers = [
    { name: "Ruvindu Parakrama", image: "/image.jpg" },
    { name: "Ruvindu Parakrama", image: "/image (1).jpg" },
    { name: "Ruvindu Parakrama", image: "/image (2).jpg" },
    { name: "Ruvindu Parakrama", image: "/image (3).jpg" },
    { name: "Ruvindu Parakrama", image: "/image (4).jpg" },
    { name: "Ruvindu Parakrama", image: "/image (5).jpg" },
  ];

  return (
    <section className="bg-[#0f0f10] text-white px-4 sm:px-6 md:px-12 lg:px-16 relative">
      <div>
        {/* 4 Vertical divider lines creating 5 equal sections */}
        <div className="hidden lg:block absolute left-[20%] top-0 bottom-0 w-px bg-gray-700 opacity-40"></div>
        <div className="hidden lg:block absolute left-[40%] top-0 bottom-0 w-px bg-gray-700 opacity-40"></div>
        <div className="hidden lg:block absolute left-[60%] top-0 bottom-0 w-px bg-gray-700 opacity-40"></div>
        <div className="hidden lg:block absolute left-[80%] top-0 bottom-0 w-px bg-gray-700 opacity-40"></div>

        <div className="max-w-7xl mx-auto relative z-10 mt-10">
          {/* Main Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-avenir font-bold mb-8">
              About HQ
            </h2>
          </div>

          {/* Team Grid */}
          <div className="flex justify-center mb-20">
            <div className="flex flex-col items-center gap-8 w-full">
              {/* Top row - 4 members */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full">
                {teamMembers.slice(0, 4).map((member, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="bg-white rounded-[4.88px] shadow-lg w-[160px] xs:w-[180px] sm:w-[180px] md:w-[200px] lg:w-[220px] h-[230px] xs:h-[250px] sm:h-[260px] md:h-[280px] lg:h-[310px] transition-all">
                      <div className="p-2 h-full flex flex-col">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={180}
                          height={200}
                          className="object-cover rounded-[4.88px] flex-1"
                          style={{ width: "100%", height: "140px" }}
                        />
                        <div className="mt-3 bg-white rounded-[4.88px] text-left px-1">
                          <p className="font-avenir text-xs sm:text-sm font-medium text-black">
                            {member.name}
                          </p>
                          <p className="font-avenir text-xs text-gray-600">
                            @harry.hq
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom row - 2 members centered */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full">
                {teamMembers.slice(4, 6).map((member, index) => (
                  <div key={index + 4} className="flex flex-col items-center">
                    <div className="bg-white rounded-[4.88px] shadow-lg w-[160px] xs:w-[180px] sm:w-[180px] md:w-[200px] lg:w-[220px] h-[230px] xs:h-[250px] sm:h-[260px] md:h-[280px] lg:h-[310px] transition-all">
                      <div className="p-2 h-full flex flex-col">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={180}
                          height={200}
                          className="object-cover rounded-[4.88px] flex-1"
                          style={{ width: "100%", height: "140px" }}
                        />
                        <div className="mt-3 bg-white rounded-[4.88px] text-left px-1">
                          <p className="font-avenir text-xs sm:text-sm font-medium text-black">
                            {member.name}
                          </p>
                          <p className="font-avenir text-xs text-gray-600">
                            @harry.hq
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* APPROACH Section */}
          <div className="relative mb-24 md:mb-36">
            {/* APPROACH label aligned to 1st vertical line (20%) */}
            <div className="absolute top-0 left-[10.5%] transform -translate-x-1 hidden md:block">
              <div className="text-[12px] font-avenir text-white uppercase font-normal">
                Approach
              </div>
            </div>

            {/* APPROACH content */}
            <div className="md:ml-[38.5%] pr-0 md:pr-8">
              <h2 className="font-avenir text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-medium mb-8 leading-[1.1] tracking-tight max-w-2xl">
                Crafting{" "}
                <em
                  className="font-oldStandardTT italic font-normal"
                  style={{
                    fontFamily: "'Old Standard TT', serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontSize: "1.2em",
                    letterSpacing: "-0.04em",
                  }}
                >
                  Moments
                </em>
                <br />
                with Purpose and
                <br />
                Emotion
              </h2>
              <div className="space-y-6 font-avenir text-base sm:text-lg md:text-[20px] leading-[1.5] text-white font-light max-w-2xl">
                <p>
                  At HQ Entertainment, we don&apos;t just produce events — we
                  craft immersive, unforgettable experiences. As a full-service
                  event solutions company, we specialise in bringing bold ideas
                  to life through cutting-edge technology, refined aesthetics,
                  and precision execution.
                </p>
                <p>
                  From live concerts and fashion shows to corporate launches and
                  cultural festivals, our expertise lies in turning concepts
                  into captivating realities that resonate with audiences and
                  leave lasting impressions.
                </p>
              </div>
            </div>
          </div>

          {/* PHILOSOPHY Section */}
          <div className="relative mb-20 md:mb-32">
            {/* PHILOSOPHY label aligned to 2nd vertical line (40%) */}
            <div className="absolute top-0 left-[33%] transform -translate-x-2 hidden md:block">
              <div className="text-[12px] font-avenir text-white uppercase font-normal">
                PHILOSOPHY
              </div>
            </div>

            {/* PHILOSOPHY content starting from 3rd vertical line (60%) */}
            <div className="md:ml-[61.5%] pr-0 md:pr-8">
              <h2 className="font-avenir text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-medium mb-8 leading-[1.1] tracking-tight max-w-xl">
                Purpose Driven
                <br />
                Production{" "}
                <em className="font-oldStandardTT italic font-normal">With</em>
                <br />
                <em className="font-oldStandardTT italic font-normal">
                  Impact
                </em>
              </h2>
              <div className="space-y-6 font-avenir text-base sm:text-lg md:text-[20px] leading-[1.6] text-white font-light max-w-11/12">
                <p>
                  We believe that a truly remarkable event is not only seen or
                  heard — it&#39;s felt.
                </p>
                <p>
                  That&#39;s why every project at HQ Entertainment is rooted in
                  intentional design, emotional storytelling, and operational
                  excellence.
                </p>
                <p>
                  Whether it&#39;s an intimate venue or a stadium-scale
                  production, we align vision, creativity, and logistics to
                  deliver seamless results that inspire connection and spark
                  emotion.
                </p>
              </div>
            </div>
          </div>

          {/* BEYOND EVENTS Section */}
          <div className="relative mb-20 md:mb-34">
            {/* BEYOND EVENTS label in the rightmost column */}
            <div className="absolute top-0 left-[0.1%] hidden md:block">
              <div className="text-[12px] font-avenir text-white uppercase font-normal">
                BEYOND EVENTS
              </div>
            </div>

            {/* BEYOND EVENTS content starting from 1st line in that section */}
            <div className="md:ml-[15.5%] pr-0 md:pr-8">
              <h2 className="font-avenir text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-medium mb-8 leading-[1.1] tracking-tight max-w-xl">
                How People &<br />
                Culture Inspire{" "}
                <em className="font-oldStandardTT italic font-normal">Our</em>
                <br />
                <em className="font-oldStandardTT italic font-normal">
                  Creativity
                </em>
              </h2>
              <div className="space-y-6 font-avenir text-base sm:text-lg md:text-[20px] leading-[1.6] text-white font-light max-w-sm">
                <p>
                  We find inspiration in vibrant cultures, cinematic
                  storytelling, and spontaneous moments of joy — all of which
                  fuel the energy We bring to every production. For us,
                  creativity isn&#39;t just a skill — it&#39;s a lifestyle built
                  around connection, rhythm, and experience.
                </p>
              </div>
            </div>
          </div>

          {/* FEATURED IN Section */}
          <div className="relative mb-12 md:mb-16">
            {/* FEATURED IN label aligned to 2nd vertical line (40%) */}
            <div className="absolute top-0 left-[33%] transform -translate-x-2 hidden md:block">
              <div className="text-[12px] font-avenir text-white uppercase font-normal">
                FEATURED IN
              </div>
            </div>

            {/* FEATURED IN content starting from 3rd vertical line (60%) */}
            <div className="md:ml-[61.5%] pr-0 md:pr-8">
              <p className="space-y-6 font-avenir text-base sm:text-lg md:text-[20px] leading-[1.6] text-white font-light max-w-sm">
                Our work has been featured by Artwalk Colombo, Yamu, Ceylon
                Today, The Sunday Times, Roar Media, and more.
              </p>
            </div>
          </div>

          {/* Final tagline */}
          <div className="text-center mt-20 md:mt-36 mb-20 md:mb-36">
            <p className="font-avenir text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-10 max-w-full font-medium text-white">
              Proudly partnered with visionary brands to <br />
              craft{" "}
              <em
                className="font-oldStandardTT italic font-normal"
                style={{
                  fontFamily: "'Old Standard TT', serif",
                  fontWeight: 400,
                  fontStyle: "italic",
                  fontSize: "1.2em",
                  letterSpacing: "-0.04em",
                }}
              >
                extraordinary experiences.
              </em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

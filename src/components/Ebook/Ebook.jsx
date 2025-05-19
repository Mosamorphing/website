import React from 'react'

import "./ebook.css"
import Footer from "../../components/Footer";

const Ebook = () => {
    return (
        <div className="min-h-[93.5dvh] flex flex-col justify-between">
            {/* Bio Section */}
            <div className="relative overflow-hidden">
                <section className="w-[1400px] mx-[auto] xl:w-full xl:pl-[60px] lg:pl-[40px] 2xs:pl-[20px] flex">
                    <div className="bio-content w-[47%] lg:w-full">
                        <div className="bio-text mb-10">
                            {/* <h2>
                "If you feel stuck & you don't know where to go, what to do &
                who to become, create a beautiful list of where you don't want
                to go, what you don't want to do & who you don't want to become.
                Make the list really clear because that right there is a
                pointer. Godspeed, my friend!"
              </h2> */}
                            <p>
                                If you are seeking a more personalised application of {" "}&apos;&apos;<span className="text-[#e63946]">A Map Made for the Dark</span>&apos;&apos;, you're in the right place.
                                <br />
                                <br />
                                This isn&apos;t a coaching call, it is a chat with you to identify key pain points and how the curation can be applied to whatever you're currently navigating.

                                <br />
                                <br />
                                In this session, we’ll work through:
                                <br />
                                <br />

                                — What you’re currently navigating: the questions you can name, and the ones that still feel blurry
                                <br />
                                <br />
                                — What the curation looks like in your context and how you can maximally deploy it
                                <br />
                                <br />
                                — Taking the first step towards your next.
                                <br />
                                <br />
                                Remember, there has to be a way!
                            </p>
                            <a 
                            href="https://selar.com/4157yr"
                            target="_blank"
                            rel="noopener noreferrer">
                            <button className="about-me-btn">Book a chat here</button>
                            </a>
                        </div>
                    </div>
                </section>
                <div className="w-[47%] flex items-center justify-center absolute top-0 right-0 lg:w-full lg:h-full lg:z-1 lg:opacity-50">
                    <img
                        className="bio__about__hero__img h-[1000px]"
                        src="/hero.webp"
                        alt="Hero"
                    />
                </div>
            </div>

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default Ebook;

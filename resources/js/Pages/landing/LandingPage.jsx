import React from "react";
import Button from "@/Components/Button";
import LandingLayout from "@/Layouts/LandingLayout";
import doctor from "@/assets/doctor.png";
import lobby from "@/assets/loby.png";
import logo2 from "@/assets/logo2.png";
import { Link } from "@inertiajs/react";

function LandingPage() {
    // const handleToAuth = () => {
    //     Inertia.visit("/auth");
    // };

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        });
    };

    return (
        <LandingLayout>
            <div className="flex flex-col items-center overflow-hidden">
                <div className="relative w-[100vw] h-auto">
                    <img className="w-full h-auto" src={lobby} alt="Lobby" />
                    <div className="absolute top-10 left-20 ">
                        <img
                            src={logo2}
                            alt="Overlay"
                            className="w-full lg:w-full md:w-96 sm:w-72 "
                        />
                    </div>
                    <div className="absolute top-40 left-20 text-white text-xl  lg:text-xl md:text-lg sm:text-base xs:text-sm font-kaisei">
                        Pulse by Pulse, Protecting Hearts
                    </div>
                    {/* Position the Button using a wrapper with position styles */}
                    <div className="absolute top-2/4 left-1/2 text-[30px] font-kanit transform -translate-x-1/2 -translate-y-1/2">
                        <Link href="/homepage">
                            <Button
                                text="Check Your Heart Now "
                                className="text-xl"
                            />
                        </Link>
                    </div>
                    <div>
                        <svg
                            className="animate-bounce absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-12 h-12 text-custom-green cursor-pointer bg-white rounded-full"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            onClick={scrollToBottom}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                </div>

                <div className="w-full h-screen bg-white p-4 flex flex-col md:flex-row items-center">
                    <img
                        src={doctor}
                        alt="Doctor"
                        className="mb-4 md:mb-0 md:mr-8 w-full md:w-auto h-1/2"
                    />
                    <div className="flex-1">
                        <div className="text-[50px] md:text-[24px] text-custom-green font-kanit">
                            Lorem ipsum dolor sit amet
                        </div>
                        <p className="text-[25px] mt-2 font-kaisei text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nam natus itaque tempora ex, quisquam fuga
                            perspiciatis nemo error officia numquam hic fugiat,
                            esse quibusdam quas saepe. Odio, similique, est
                            consequatur, unde assumenda cum reprehenderit
                            obcaecati incidunt eum suscipit accusamus
                            accusantium sed. Explicabo suscipit atque vitae.
                            Quos fuga qui dicta, dolores deleniti explicabo ea
                            eligendi ab aut, asperiores id cum omnis ratione
                            totam veniam atque voluptate officiis numquam
                            aliquid expedita doloribus fugit. Libero ipsa neque
                            eum adipisci nam rem cumque aspernatur nobis
                            praesentium sint quod ducimus facere, exercitationem
                            veniam in aliquam ab id atque? Ad vel consectetur ex
                            cupiditate ducimus a voluptatum, delectus aliquam
                            quidem, vitae id officiis obcaecati quasi inventore
                            excepturi architecto accusamus. Officiis qui
                            laboriosam nesciunt, quidem magnam voluptas quas,
                            excepturi, ipsa error est corrupti perspiciatis
                            placeat dicta itaque amet. Debitis error laudantium
                            voluptate quia ab, iusto suscipit aut hic
                            necessitatibus exercitationem quidem id ea qui ad
                            atque odio.
                        </p>
                    </div>
                </div>
            </div>
        </LandingLayout>
    );
}

export default LandingPage;
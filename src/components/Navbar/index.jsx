import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Text } from "components";
import { Button } from "components";
import { Line } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const location = useLocation();

    const isLinkActive = (path) => location.pathname === path;

    const [isFacebookHovered, setIsFacebookHovered] = useState(false);
    const [isTwitterHovered, setIsTwitterHovered] = useState(false);
    const [isPinterestHovered, setIsPinterestHovered] = useState(false);

    const handleFacebookHover = () => {
        setIsFacebookHovered(true);
    };

    const handleFacebookLeave = () => {
        setIsFacebookHovered(false);
    };

    const handleTwitterHover = () => {
        setIsTwitterHovered(true);
    };

    const handleTwitterLeave = () => {
        setIsTwitterHovered(false);
    };

    const handlePinterestHover = () => {
        setIsPinterestHovered(true);
    };

    const handlePinterestLeave = () => {
        setIsPinterestHovered(false);
    };

    useEffect(() => {
        // Add event listeners for screen size changes
        const handleResize = () => {
            // Check the screen width and apply responsive changes here
            if (window.innerWidth <= 768) {
                // For screens smaller or equal to 768px wide (e.g., mobile)
                // Adjust your Navbar layout and styles here
            } else {
                // For larger screens (e.g., desktop)
                // Reset any changes made for smaller screens
            }
        };

        window.addEventListener("resize", handleResize);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <header className="flex flex-col items-center justify-center w-[1630px]">
                <div className="flex flex-col gap-[19px] items-center justify-center w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                        <Link to="/">
                            <img style={{ cursor: "pointer",width:"130px" }} src="images/Mainlogo.png" alt="Logo" />
                        </Link>
                        <ul className="flex flex-row font-josefinsans gap-[50px] sm:hidden items-start justify-start md:ml-[0] ml-[120px] w-auto common-row-list">
                            <li>
                                <Link
                                    to="/"
                                    className={`${isLinkActive("/")
                                        ? "font-semibold text-white-A700"
                                        : "text-gray-600 hover:font-semibold hover:text-white-A700"
                                        } text-[22px] sm:text-lg md:text-xl tracking-[-0.44px]`}
                                >
                                    <Text size="txtJosefinSansRomanRegular22">Home</Text>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/aboutpagethree"
                                    className={`${isLinkActive("/aboutpagethree")
                                        ? "font-semibold text-white-A700"
                                        : "text-gray-600 hover:font-semibold hover:text-white-A700"
                                        } text-[22px] sm:text-lg md:text-xl tracking-[-0.44px]`}
                                >
                                    <Text size="txtJosefinSansRomanRegular22">About</Text>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/resultspage"
                                    className={`${isLinkActive("/resultspage")
                                        ? "font-semibold text-white-A700"
                                        : "text-gray-600 hover:font-semibold hover:text-white-A700"
                                        } text-[22px] sm:text-lg md:text-xl tracking-[-0.44px]`}
                                >
                                    <Text size="txtJosefinSansRomanSemiBold22">Results Page</Text>
                                </Link>
                            </li>
                        </ul>

                        <div className="flex md:flex-1 flex-row gap-5 items-center justify-center md:ml-[0] ml-[530px] w-[14%] md:w-full">
                            <Button
                                className={`flex h-[60px] items-center justify-center  rounded-[13px] w-[60px] ${isFacebookHovered
                                        ? "bg-deep_purple-500"
                                        : "bg-deep_purple-500_26"
                                    }`}
                                color={isFacebookHovered ? "white-A700" : "deep_purple-500"}
                                onMouseEnter={handleFacebookHover}
                                onMouseLeave={handleFacebookLeave}
                            >
                                <FontAwesomeIcon
                                    size="xl"
                                    icon={faFacebookF}
                                    style={{
                                        color: isFacebookHovered ? "#FFFFFF" : "#6D28D9",
                                    }}
                                />
                            </Button>
                            <Button
                                className={`flex h-[60px] items-center justify-center  rounded-[13px] w-[60px]  ${isTwitterHovered
                                        ? "bg-deep_purple-500"
                                        : "bg-deep_purple-500_26"
                                    }`}
                                color={isTwitterHovered ? "white-A700" : "deep_purple-500"}
                                onMouseEnter={handleTwitterHover}
                                onMouseLeave={handleTwitterLeave}
                            >
                                <FontAwesomeIcon
                                    size="xl"
                                    icon={faTwitter}
                                    style={{
                                        color: isTwitterHovered ? "#FFFFFF" : "#6D28D9",
                                    }}
                                />
                            </Button>
                            <Button
                                className={`flex h-[60px] items-center justify-center  md:ml-[0] rounded-[13px] w-[60px] ${isPinterestHovered
                                        ? "bg-deep_purple-500"
                                        : "bg-deep_purple-500_26"
                                    }`}
                                color={isPinterestHovered ? "white-A700" : "deep_purple-500"}
                                onMouseEnter={handlePinterestHover}
                                onMouseLeave={handlePinterestLeave}
                            >
                                <FontAwesomeIcon
                                    size="xl"
                                    icon={faPinterest}
                                    style={{
                                        color: isPinterestHovered ? "#FFFFFF" : "#6D28D9",
                                    }}
                                />
                            </Button>
                        </div>
                        <div className="bg-deep_purple-500 flex md:flex-1 flex-col font-josefinsans items-center justify-start ml-4 md:ml-[0] p-4 rounded-[13px] w-[16%] md:w-full" style={{ cursor: "pointer" }}>
                            <div className="flex flex-row gap-2.5 items-start justify-start w-[84%] md:w-full">
                                <FontAwesomeIcon
                                    size="xl"
                                    icon={faWallet}
                                    style={{
                                        color: "#FFFFFF",

                                    }}
                                />
                                <Text
                                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[-0.44px]"
                                    size="txtJosefinSansRomanSemiBold22"
                                >
                                    Connect Wallet
                                </Text>
                            </div>

                        </div>

                    </div>

                </div>
                <Line className="bg-white-A700_33 h-0.5 w-[1620px] overflow-hidden mt-1 justify-centre" />
            </header>
        </>
    );
};

export { Navbar };

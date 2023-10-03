import React, { useState } from "react";

import { Img, Text } from "components";

const Cards = () => {
    const [isCardHovered, setIsCardHovered] = useState(false);

    const handleCardHover = () => {
        setIsCardHovered(true);
    };

    const handleCardLeave = () => {
        setIsCardHovered(false);
    };

    return (
        <>
            <div
                className={`bg-${isCardHovered ? 'deep_purple-500' : 'deep_purple-500_26'} flex flex-1 flex-col gap-4 items-center justify-start p-5 rounded-[15px] w-full`}
                style={{
                    transition: 'background-color 0.3s', // Add a smooth transition
                    cursor: 'pointer',
                }}
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardLeave}
            >
                <Img
                    className="h-[200px] md:h-auto object-cover rounded-[15px] w-full"
                    src="images/img_rectangle66528_200x252.png"
                    alt="rectangle66528"
                />
                <div className="flex flex-col gap-[21px] items-center justify-start mb-1.5 w-[61%] md:w-full">
                    <div className="flex flex-col gap-3 items-center justify-start w-full">
                        <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                            size="txtJosefinSansRomanBold28"
                        >
                            Davis Press
                        </Text>
                        <Text
                            className="text-center text-white-A700 text-xl"
                            size="txtJosefinSansRomanRegular20"
                        >
                            Ui/Ux Designer
                        </Text>
                    </div>
                    <div className="flex flex-row gap-5 items-center justify-between w-[78%] md:w-full">
                        <Img
                            className="h-[26px] w-[26px]"
                            src="images/img_rifacebookfill_white_a700.svg"
                            alt="rifacebookfill"
                        />
                        <Img
                            className="h-[26px] w-[26px]"
                            src="images/img_mditwitter_white_a700.svg"
                            alt="mditwitter"
                        />
                        <Img
                            className="h-[26px] w-[26px]"
                            src="images/img_basilinstagramsolid.svg"
                            alt="basilinstagrams"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export { Cards };
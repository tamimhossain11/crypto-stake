import React, { useState, useEffect } from "react";
import { Img, Text, Button } from "components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component
import { faFacebookF, faInstagram, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'; // Import the specific icons you need
import { faCopy } from '@fortawesome/free-regular-svg-icons';

const ScrollCards = () => {
  const [showTooltip30Min, setShowTooltip30Min] = useState(false);
  const [showTooltipPlayers, setShowTooltipPlayers] = useState(false);
  const [showTooltipResults, setShowTooltipResults] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const [isCopyHovered, setIsCopyHovered] = useState(false);
  const [isFacebookHovered, setIsFacebookHovered] = useState(false);
  const [isWhatsappHovered, setIsWhatsappHovered] = useState(false);
  const [isInstagramHovered, setIsInstagramHovered] = useState(false);
  const [isTwitterHovered, setIsTwitterHovered] = useState(false);

  const handleCopyHover = () => {
    setIsCopyHovered(true);
  };

  const handleCopyLeave = () => {
    setIsCopyHovered(false);
  };

  const handleFacebookHover = () => {
    setIsFacebookHovered(true);
  };

  const handleFacebookLeave = () => {
    setIsFacebookHovered(false);
  };
  const handleWhatsappHover = () => {
    setIsWhatsappHovered(true);
  };

  const handleWhatsappLeave = () => {
    setIsWhatsappHovered(false);
  };

  const handleInstagramHover = () => {
    setIsInstagramHovered(true);
  };

  const handleInstagramLeave = () => {
    setIsInstagramHovered(false);
  };

  const handleTwitterHover = () => {
    setIsTwitterHovered(true);
  };

  const handleTwitterLeave = () => {
    setIsTwitterHovered(false);
  };


  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isPopupOpen && !event.target.closest('.popup-content')) {
        closePopup();
      }
    };

    if (isPopupOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isPopupOpen]);

  const handleMouseEnter30Min = () => {
    setShowTooltip30Min(true);
  };

  const handleMouseLeave30Min = () => {
    setShowTooltip30Min(false);
  };


  return (
    <>
      <div className="sm:h-[510px] h-[511px] md:h-[666px] relative w-full">
        <div className="sm:h-[506px] h-[511px] md:h-[666px] m-auto w-full">
          <div
            className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center  m-auto rounded-[13px] w-full"
            style={{
              backgroundImage: "url('images/Card-bg.png')",
            }}
          >
            <div className="flex flex-col gap-2 items-end justify-start w-full ml-[6px]">
              <div
                className="bg-deep_purple-500 flex flex-col items-center justify-start  p-[18px] rounded-[13px] w-[17%] md:w-full hover:bg-deep_purple-600"
                style={{ cursor: "pointer", zIndex: 1 }}
                onClick={openPopup}
              >
                <div
                  className="flex flex-row gap-2.5 items-center justify-center w-[73%] md:w-full"
                >
                  <Img
                    className="h-6 w-6"
                    src="images/img_volume.svg"
                    alt="volume"
                  />
                  <Text
                    className="text-[22px] text-center sm:text-lg text-white-A700 md:text-xl tracking-[-0.44px]"
                    size="txtJosefinSansRomanSemiBold22"
                  >
                    Invite
                  </Text>
                </div>
              </div>
              {isPopupOpen && (
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[100px] items-center justify-start md:ml-[0] ml-[605px] mt-[27px] p-[15px] w-[356px] md:w-full"
                  style={{
                    backgroundImage: "url('images/img_group48095430.svg')",
                    position: "absolute", // Set the position to absolute
                    top: "-28%", // Position it below the triggering element
                    left: "7%", // Center it horizontally
                    transform: "translateX(-20%)", // Center it horizontally
                    zIndex: 1000, // Ensure it appears on top of other elements


                  }}
                >
                  <div className="flex flex-row gap-[15px] items-center justify-start mb-5 w-[96%] md:w-full">
                    <Button
                      className="flex h-[50px] items-center justify-center rounded-[10px] w-[50px] transition duration-300"
                      style={{
                        backgroundColor: isCopyHovered ? "#050121" : "rgba(109, 40, 217, 0.2)",
                        color: isCopyHovered ? "#FFFFFF" : "#6D28D9",
                      }}
                      size="xs"
                      onMouseEnter={handleCopyHover}
                      onMouseLeave={handleCopyLeave}
                    >
                      <FontAwesomeIcon
                        icon={faCopy}
                        className="h-[30px]"
                        style={{
                          color: isCopyHovered ? "#FFFFFF" : "#6D28D9",
                        }}
                      />
                    </Button>


                    <Button
                      className="flex h-[50px] items-center justify-center rounded-[10px] w-[50px] transition duration-300"
                      style={{
                        backgroundColor: isFacebookHovered ? "#0866FF" : "rgba(109, 40, 217, 0.2)",
                        color: isFacebookHovered ? "#FFFFFF" : "#6D28D9",
                      }}
                      size="xs"
                      onMouseEnter={handleFacebookHover}
                      onMouseLeave={handleFacebookLeave}
                    >
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        className="h-[30px]"
                        style={{
                          color: isFacebookHovered ? "#FFFFFF" : "#6D28D9",
                        }}
                      />
                    </Button>
                    <Button
                      className="flex h-[50px] items-center justify-center rounded-[10px] w-[50px] transition duration-300"
                      style={{
                        backgroundColor: isInstagramHovered ? "#d62976" : "rgba(109, 40, 217, 0.2)",
                        color: isInstagramHovered ? "#FFFFFF" : "#6D28D9",
                      }}
                      size="xs"
                      onMouseEnter={handleInstagramHover}
                      onMouseLeave={handleInstagramLeave}
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="h-[30px]"
                        style={{
                          color: isInstagramHovered ? "#FFFFFF" : "#6D28D9",
                        }}
                      />
                    </Button>
                    <Button
                      className="flex h-[50px] items-center justify-center rounded-[10px] w-[50px] transition duration-300"
                      style={{
                        backgroundColor: isWhatsappHovered ? "#075e54" : "rgba(109, 40, 217, 0.2)",
                        color: isWhatsappHovered ? "#FFFFFF" : "#6D28D9",
                      }}
                      size="xs"
                      onMouseEnter={handleWhatsappHover}
                      onMouseLeave={handleWhatsappLeave}
                    >
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        className="h-[30px]"
                        style={{
                          color: isWhatsappHovered ? "#FFFFFF" : "#6D28D9",
                        }}
                      />
                    </Button>
                    <Button
                      className="flex h-[50px] items-center justify-center rounded-[10px] w-[50px] transition duration-300"
                      style={{
                        backgroundColor: isTwitterHovered ? "#00ACEE" : "rgba(109, 40, 217, 0.2)",
                        color: isTwitterHovered ? "#FFFFFF" : "#6D28D9",
                      }}
                      size="xs"
                      onMouseEnter={handleTwitterHover}
                      onMouseLeave={handleTwitterLeave}
                    >
                      <FontAwesomeIcon
                        icon={faXTwitter}
                        className="h-[30px]"
                        style={{
                          color: isTwitterHovered ? "#FFFFFF" : "#6D28D9",
                        }}
                      />
                    </Button>
                  </div>
                </div>
              )}
              <div className="flex flex-col gap-[37px] items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-[23%] md:w-full">
                  <Text
                    className="text-[22px] text-center sm:text-lg text-white-A700 md:text-xl tracking-[-0.44px]"
                    size="txtJosefinSansRomanSemiBold22"
                  >
                    Game ID: 2
                  </Text>
                  <div className="bg-deep_purple-500 flex flex-col items-center justify-start mt-[21px] p-3.5 rounded-[13px] w-full">
                    <Text
                      className="mb-0.5 sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700 tracking-[-0.56px]"
                      size="txtJosefinSansRomanSemiBold28"
                    >
                      $100 Deposit
                    </Text>
                  </div>
                  <Text
                    className="mt-[19px] text-[22px] text-center sm:text-lg text-white-A700 md:text-xl tracking-[-0.44px]"
                    size="txtJosefinSansRomanSemiBold22"
                  >
                    Players Join ID: 3
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <div className="bg-deep_purple-500 flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[199px] p-[18px] rounded-[13px] w-[17%] md:w-full"
                    onMouseEnter={() => setShowTooltipPlayers(true)}
                    onMouseLeave={() => setShowTooltipPlayers(false)}
                    style={{ cursor: "pointer", zIndex: 1 }}
                  >
                    <div className="flex flex-row gap-2.5 items-center justify-center w-[85%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_settings.svg"
                        alt="settings"
                      />
                      <Text
                        className="text-[22px] text-center sm:text-lg text-white-A700 md:text-xl tracking-[-0.44px]"
                        size="txtJosefinSansRomanSemiBold22"
                      >
                        Players
                      </Text>
                    </div>
                    {showTooltipPlayers && (
                      <div className="flex flex-col md:flex-col md:gap-10 md:w-full"
                        style={{
                          position: "absolute", // Set the position to absolute
                          bottom: "-200px", // Position it below the triggering element
                          left: "11%", // Center it horizontally
                          transform: "translateX(-20%)", // Center it horizontally
                          zIndex: 1000, // Ensure it appears on top of other elements
                          
                        }}
                      >

                        <div
                          className="bg-no-repeat flex flex-col  items-center justify-center  md:w-full"
                          style={{
                            backgroundImage: "url('images/img_group48095442.svg')",
                            width:"476px",
                            height:"186px",
                          }}
                        >
                          <div className="flex flex-col gap-4  ml-[50px] justify-start w-full  md:w-full">
                            <Text
                              className="text-2xl md:text-[22px] mt-[20px] text-black-900 ml-40 sm:text-xl tracking-[-0.48px]"
                              size="txtJosefinSansRomanSemiBold24"
                            >
                              Game ID: 02
                            </Text>
                            <div className="flex flex-col gap-2 justify-start w-full">
                              <Text
                                className="text-black-900 text-[20px] tracking-[-0.40px]"
                                size="txtJosefinSansRomanRegular20Black900"
                              >
                                1. 0xAb8483F64d9C6b849Ae577dD3315835cb2.
                              </Text>
                              <Text
                                className="text-black-900 text-[20px] tracking-[-0.40px]"
                                size="txtJosefinSansRomanRegular20Black900"
                              >
                                2. 0xAb8483F64d9C6b849Ae577dD3315835cb2.
                              </Text>
                              <Text
                                className="text-black-900 text-[20px] tracking-[-0.40px]"
                                size="txtJosefinSansRomanRegular20Black900"
                              >
                                3. 0xAb8483F64d9C6b849Ae577dD3315835cb2.
                              </Text>
                            </div>
                          </div>
                        </div>

                      </div>
                    )}

                  </div>


                  <Img
                    className="md:flex-1 h-[219px] sm:h-auto mb-10 md:ml-[0] ml-[134px] object-cover w-[43%] md:w-full"
                    src="images/img_wineimage1.png"
                    alt="wineimageOne"
                  />
                  <div className="bg-deep_purple-500 flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[102px] md:mt-0 mt-[199px] p-[18px] rounded-[13px] w-[17%] md:w-full"
                    onMouseEnter={() => setShowTooltipResults(true)}
                    onMouseLeave={() => setShowTooltipResults(false)}
                    style={{ cursor: "pointer", zIndex: 1 }}
                  >
                    <div className="flex flex-row gap-2.5 items-center justify-center w-[84%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_settings_white_a700.svg"
                        alt="settings_One"
                      />
                      <Text
                        className="text-[22px] text-center sm:text-lg text-white-A700 md:text-xl tracking-[-0.44px]"
                        size="txtJosefinSansRomanSemiBold22"
                      >
                        Results
                      </Text>
                    </div>

                    {showTooltipResults && (

                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-40 inset-x-[0] items-center justify-end mx-auto p-[21px] sm:px-5 top-[0] w-[565px]"
                        style={{
                          backgroundImage: "url('images/img_group48095419.svg')",
                          position: "absolute",
                          top: "520px",
                          left: "52%",
                          transform: "translateX(-20%)",
                          zIndex: 1000,

                        }}
                      >
                        <div className="flex flex-col gap-[5px] items-center justify-start w-[96%] md:w-full">
                          <Text
                            className="md:m-0 m-[-5px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl tracking-[-0.48px]"
                            size="txtJosefinSansRomanSemiBold24"
                          >
                            Game ID: 01
                          </Text>
                          <div className="flex flex-col font-metropolis gap-2 items-start justify-start w-full">
                            <Text
                              className="text-black-900 text-xl tracking-[-0.40px]"
                              size="txtMetropolisRegular20"
                            >
                              <span className="text-black-900 font-josefinsans text-left font-semibold">
                                Winner:
                              </span>
                              <span className="text-black-900 font-josefinsans text-left font-normal">
                                {" "}
                                0xAb8483F64d9C6b849Ae577dD3315835cb2.
                              </span>
                            </Text>
                            <Text
                              className="text-black-900 text-xl tracking-[-0.40px]"
                              size="txtMetropolisRegular20"
                            >
                              <span className="text-black-900 font-josefinsans text-left font-semibold">
                                Win Amount:{" "}
                              </span>
                              <span className="text-black-900 font-josefinsans text-left font-normal">
                                $70
                              </span>
                            </Text>
                          </div>
                        </div>
                      </div>

                    )}


                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-deep_purple-500 flex flex-col items-center justify-start left-[0] p-3 rounded-[13px] top-[0] w-[17%]"
            onMouseEnter={handleMouseEnter30Min}
            onMouseLeave={handleMouseLeave30Min}
            style={{ cursor: "pointer", zIndex: 1 }}
          >
            <div className="flex flex-row gap-2.5 items-start justify-start my-[5px] w-full">
              <Img
                className="h-6 w-6"
                src="images/img_clock.svg"
                alt="clock"
              />
              <Text
                className="text-[22px] text-center sm:text-lg text-white-A700 md:text-xl tracking-[-0.44px]"
                size="txtJosefinSansRomanSemiBold22"
              >
                30 Minute
              </Text>
            </div>
            {showTooltip30Min && (
              <div
                className="bg-cover bg-no-repeat flex flex-col w-[445px] h-[86px] items-center justify-start mt-[41px] p-[23px] sm:px-5"
                style={{
                  backgroundImage: "url('images/img_group48095431.svg')",
                  position: "absolute",
                  top: "-150px",
                  left: "55%",
                  transform: "translateX(-18%)",

                  zIndex: 1,
                }}
              >
                <Text
                  className="mb-5 text-black-900 text-xl tracking-[-0.40px]"
                  size="txtJosefinSansRomanSemiBold20"
                >
                  Timer Will Start after player list is complete
                </Text>
              </div>

            )}
          </div>
        </div>
      </div>
    </>
  );
};

export { ScrollCards };
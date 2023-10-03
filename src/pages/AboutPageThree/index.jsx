import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Img, Line, List, Navbar, Text } from "components";
import { Cards, } from "components/Cards";
import { Exclusive } from "components/TierCards/exclusive";
import { Standard } from "components/TierCards/standard";
import { Premium } from "components/TierCards/premium";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';



const AboutPageThreePage = () => {
  const location = useLocation();
  const isLinkActive = (path) => location.pathname === path;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('Standard Lottery Games'); // Initialize with the default label
  const [selectedValue, setSelectedValue] = useState('Standard'); // Initialize with the default value

  const options = [
    { value: 'Standard', label: 'Standard Lottery Games' },
    { value: 'Premium', label: 'Premium Lottery Games' },
    { value: 'Exclusive', label: 'Exclusive Lottery Games' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOptionSelect = (selected) => {
    setSelectedLabel(selected.label);
    setSelectedValue(selected.value);
    setIsMenuOpen(false);
  };



  const selectStyle = {
    container: {
      position: 'relative',
      display: 'inline-block',
    },
    selectButton: {
      cursor: 'pointer',
      padding: '20px 10px',
      width: '350px',
      height: '70px',
      backgroundColor: '#6d28d9',
      color: 'white',
      border: 'none',
      borderTopLeftRadius: '10px', // Set top border radius to 10px
      borderTopRightRadius: '10px', // Set top border radius to 10px
      borderBottomLeftRadius: '10px', // Set bottom border radius to 10px initially
      borderBottomRightRadius: '10px', // Set bottom border radius to 10px initially
      fontWeight: '700',
      fontSize: '22px',
      textAlign: 'center',
      
    },
    arrowIcon: {
      fontSize: '18px', // Adjust the font size to make the arrow smaller
      marginLeft: '5px', // Add some spacing between the label and arrow
    },
    selectButtonOpen: {
      borderBottomLeftRadius: '0',
      borderBottomRightRadius: '0',
      boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.15)inset', // Add shadow to the bottom border
    },
    optionsContainer: {
      position: 'absolute',
      top: '100%',
      left: '0',
      right: '0',
      backgroundColor: '#6d28d9',
      color: 'white',
      borderRadius: '0 0 13px 13px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      zIndex: '9999',
      height: '180px',
      overflowY: 'auto',
    },
    option: {
      padding: '10px 20px',
      textAlign: 'center',
      fontSize: '22px',
      fontWeight: '500',
      cursor: 'pointer',
      marginTop:'10px',
      marginLeft:'17px',
      marginRight:'17px',
      hover: {
        backgroundColor: '#8B5CF6',
        color: 'white',},
        transition: 'background-color 0.3s ease', // Add transition for hover effect

    },
    optionSelected: {
      backgroundColor: '#8b5cf6',
      fontWeight: 'bold',
    },
  };
  return (
    <>
      <div className="bg-black-900 flex flex-col font-metropolis items-center justify-start mx-auto w-full overflow-hidden">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col md:px-5 relative w-full">
            <div className="sm:h-[1458px] h-[1927px] md:h-[2275px] mx-auto w-full">
              <div className="absolute md:h-[1263px] h-[1500px] inset-x-[0] mx-auto top-[0] w-full">
                <div className="absolute bottom-[0] md:h-[1263px] h-[1300px] right-[0] w-[85%] md:w-full">
                  <Img
                    className="absolute h-[1263px] inset-y-[0] my-auto object-cover right-[0] rotate-[22deg] w-[67%]"
                    src="images/img_ellipse86.png"
                    alt="ellipseEightySix"
                  />
                  <div className="absolute backdrop-opacity-[0.5] bg-red-700 blur-[400.00px] h-40 right-[15%] rounded-[50%] top-[0] w-40"></div>
                  <div className="absolute backdrop-opacity-[0.5] bg-indigo-900 blur-[900.00px] h-40 left-[0] rounded-[658px] top-[18%] w-[82%]"></div>
                </div>
                <div className="absolute h-[591px] inset-x-[0] mx-auto top-[0] w-full">
                  <Img
                    className="h-[591px] mt-auto mx-auto object-cover w-full"
                    src="images/img_bg21.png"
                    alt="bgTwentyOne"
                  />
                  <div className="absolute flex flex-col md:gap-10 gap-[94px] inset-x-[0] items-center justify-start mx-auto top-[3%] w-[85%]">
                    <Navbar />
                    <div className="flex flex-col font-josefinsans gap-[18px] items-center justify-start w-[17%] md:w-full">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 tracking-[-0.96px]"
                        size="txtJosefinSansRomanBold48"
                      >
                        About Page
                      </Text>
                      <div className="flex flex-row items-start justify-center w-[73%] md:w-full">
                        <Link
                          to="/"
                          className={`${isLinkActive("/")
                            ? "font-semibold text-white-A700"
                            : "text-gray-600 hover:font-semibold hover:text-white-A700"
                            } text-[28px] sm:text-lg md:text-xl tracking-[-0.44px]`}
                        >
                          <Text
                            size="txtJosefinSansRomanRegular28"
                          >
                            Home
                          </Text>
                        </Link>
                        <Line className="bg-white-A700 h-[25px] ml-5 mt-[5px] w-px" />
                        <Link
                          to="/aboutpagethree"
                          className={`${isLinkActive("/aboutpagethree")
                            ? "font-semibold text-white-A700"
                            : "text-gray-600 hover:font-semibold hover:text-white-A700"
                            } text-[28px] sm:text-lg md:text-xl tracking-[-0.44px]`}
                          style={{ marginLeft: "18px" }}
                        >
                          <Text
                            size="txtJosefinSansRomanRegular28"
                          >
                            About
                          </Text>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="h-[212px] mt-[300px] object-cover w-[15%] z-[1]"
                src="images/img_group32267.png"
                alt="group32267"
              //have to fix
              />
              <div className="absolute bg-black-900 bottom-[0] flex flex-col font-josefinsans inset-x-[0] items-end justify-end mb-[57%] mt-auto mx-auto md:pl-10 sm:pl-5 pl-[66px] py-[66px] w-full">
                <div className="flex flex-col md:gap-10 gap-[99px] items-start justify-start w-[96%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[92%] md:w-full ">
                    <div className="flex flex-col gap-[21px] items-center justify-start mr-[200px]">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[-0.96px]"
                        size="txtJosefinSansRomanBold48"
                      >
                        Welcome to CryptoStake Lottery!
                      </Text>
                      <Text
                        className="leading-[30.00px] text-[22px] text-gray-500 sm:text-lg md:text-xl tracking-[-0.44px] w-full"
                        size="txtJosefinSansRomanRegular22Gray500"
                      >
                        <>
                          At CryptoStake, we&#39;re not just another lottery
                          platform; we&#39;re your gateway to an exciting world
                          of chance and fortune. With a commitment to
                          transparency, fairness, and an engaging community
                          experience, we invite you to embark on a thrilling
                          journey where dreams have the potential to turn into
                          reality.
                        </>
                      </Text>
                    </div>
                    <Img
                      className="h-[573px] md:h-auto object-cover mt-10"
                      src="images/img_image1.png"
                      alt="imageOne"
                    />
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <Img
                      className="md:flex-1 h-[524px] sm:h-auto mb-[129px] object-cover w-2/5 md:w-full"
                      src="images/img_image31.png"
                      alt="imageTwo"
                    />
                    <div className="flex flex-col gap-[25px] items-start justify-start md:ml-[0] ml-[191px]">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[-0.96px]"
                        size="txtJosefinSansRomanBold48"
                      >
                        Our Mission
                      </Text>
                      <Text
                        className="leading-[30.00px] text-[22px] text-gray-500 sm:text-lg md:text-xl tracking-[-0.44px] w-full"
                        size="txtJosefinSansRomanRegular22Gray500"
                      >
                        <>
                          Our mission is to provide a secure and entertaining
                          space for players from around the world to participate
                          in lottery games that are backed by cutting-edge
                          blockchain technology. We believe that the lottery is
                          more than just an opportunity to win – it&#39;s an
                          immersive experience that brings people together and
                          ignites the spirit of competition and camaraderie.
                        </>
                      </Text>
                    </div>
                    <Img
                      className="md:flex-1 h-[356px] sm:h-auto ml-5 md:ml-[0] object-cover w-[8%] md:w-full"
                      src="images/img_rectangle39352.png"
                      alt="rectangle39352"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="font-josefinsans sm:h-[1072px] h-[1148px] md:h-[1565px] mt-[-76.56px] mx-auto w-full ">
              <Img
                className="h-[1148px] r w-full"
                src="images/Aboutbox.png"
                alt="bg2removebgprev"
              />
              <div className="absolute flex flex-col h-[1400px] inset-[0] items-center justify-center mb-auto mt-[92%] mx-auto p-[118px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
                  <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start mt-[-120px] w-full">
                    <div className="flex flex-col gap-[21px] items-center justify-start">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 tracking-[-0.96px]"
                        size="txtJosefinSansRomanBold48"
                      >
                        How CryptoStake Works?
                      </Text>
                      <Text
                        className="leading-[30.00px] text-[22px] text-center text-gray-500 sm:text-lg md:text-xl tracking-[-0.44px] w-full"
                        size="txtJosefinSansRomanRegular22Gray500"
                      >
                        <>
                          CryptoStake offers a diverse array of lottery games,
                          each designed to cater to varying preferences and
                          budgets. Whether you&#39;re a seasoned player seeking
                          substantial wins or someone looking for some casual
                          excitement, CryptoStake has something for everyone.
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <List
                        className="flex flex-col gap-[100px] items-center w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between my-0 w-full">
                          <div className="flex md:flex-1 flex-col gap-[29px] items-start justify-start w-[47%] md:w-full">
                            <div className="flex flex-col h-[92px] items-center justify-start w-[92px]">
                              <div className="bg-deep_purple-500_26 flex flex-col h-[92px] items-center justify-start p-1.5 rounded-[13px] w-[92px]">
                                <div className="bg-deep_purple-500 flex flex-col h-20 items-center justify-start p-[15px] rounded-[10px] w-20">
                                  <Img
                                    className="h-[50px] w-[50px]"
                                    src="images/img_close.svg"
                                    alt="close"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                              <Text
                                className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700 tracking-[-0.76px]"
                                size="txtJosefinSansRomanSemiBold38"
                              >
                                Seamless Participation
                              </Text>
                              <Text
                                className="leading-[30.00px] text-[22px] text-gray-500 sm:text-lg md:text-xl tracking-[-0.44px] w-full"
                                size="txtJosefinSansRomanRegular22Gray500"
                              >
                                <>
                                  CryptoStake offers a diverse array of lottery
                                  games, each designed to cater to varying
                                  preferences and budgets. Whether you&#39;re a
                                  seasoned player seeking substantial wins or
                                  someone looking for some casual excitement,
                                  CryptoStake has something for everyone.
                                </>
                              </Text>
                            </div>
                          </div>
                          <div className="flex md:flex-1 flex-col gap-[29px] items-start justify-start w-[47%] md:w-full">
                            <div className="h-[92px] relative w-[92px]">
                              <div className="bg-deep_purple-500_26 flex flex-col h-full items-center justify-start m-auto p-1.5 rounded-[13px] w-[92px]">
                                <div className="bg-deep_purple-500 h-20 rounded-[10px] w-20"></div>
                              </div>
                              <Img
                                className="absolute h-[50px] inset-[0] justify-center m-auto object-cover w-[50px]"
                                src="images/img_maskgroup.png"
                                alt="maskgroup"
                              />
                            </div>
                            <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                              <Text
                                className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700 tracking-[-0.76px]"
                                size="txtJosefinSansRomanSemiBold38"
                              >
                                Fairness and Transparency
                              </Text>
                              <Text
                                className="leading-[30.00px] text-[22px] text-gray-500 sm:text-lg md:text-xl tracking-[-0.44px] w-full"
                                size="txtJosefinSansRomanBold22"
                              >
                                We are committed to fairness and transparency.
                                Our games are powered by smart contracts that
                                ensure every player has an equal chance of
                                winning. The results of each draw are recorded
                                on the blockchain, providing an auditable and
                                tamper-proof record.
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-start justify-between my-0 w-full">
                          <div className="flex md:flex-1 flex-col gap-[29px] items-start justify-start w-[47%] md:w-full">
                            <div className="flex flex-col h-[92px] items-center justify-start w-[92px]">
                              <div className="bg-deep_purple-500_26 flex flex-col h-[92px] items-center justify-start p-1.5 rounded-[13px] w-[92px]">
                                <div className="bg-deep_purple-500 flex flex-col h-20 items-center justify-start p-[15px] rounded-[10px] w-20">
                                  <Img
                                    className="h-[50px] w-[50px]"
                                    src="images/img_settings_white_a700_50x50.svg"
                                    alt="settings"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                              <Text
                                className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700 tracking-[-0.76px]"
                                size="txtJosefinSansRomanSemiBold38"
                              >
                                Thriving Community
                              </Text>
                              <Text
                                className="leading-[30.00px] text-[22px] text-gray-500 sm:text-lg md:text-xl tracking-[-0.44px] w-full"
                                size="txtJosefinSansRomanBold22"
                              >
                                At CryptoStake, we believe in the power of
                                community. Our platform fosters connections
                                among players, creating a space for discussions,
                                celebrations, and shared experiences. Your wins
                                become our wins, making the CryptoStake
                                community truly unique.
                              </Text>
                            </div>
                          </div>
                          <div className="flex md:flex-1 flex-col gap-[30px] items-start justify-start w-[47%] md:w-full">
                            <Img
                              className="h-[92px] w-[92px]"
                              src="images/img_close_deep_purple_500.svg"
                              alt="close"
                            />
                            <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                              <Text
                                className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700 tracking-[-0.76px]"
                                size="txtJosefinSansRomanSemiBold38"
                              >
                                Diverse Winnings
                              </Text>
                              <Text
                                className="leading-[30.00px] text-[22px] text-gray-500 sm:text-lg md:text-xl tracking-[-0.44px] w-full"
                                size="txtJosefinSansRomanBold22"
                              >
                                Our games feature multiple prize tiers, enabling
                                participants to win varying amounts. Draws are
                                conducted using secure algorithms that guarantee
                                randomness and impartiality.
                              </Text>
                            </div>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-josefinsans md:gap-10 items-center justify-between max-w-[1620px] mt-[118px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[21px] items-start justify-start">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[-0.96px]"
                size="txtJosefinSansRomanBold48"
              >
                Security and Transparency
              </Text>
              <Text
                className="leading-[30.00px] text-[22px] text-gray-500 sm:text-lg md:text-xl tracking-[-0.44px] w-full"
                size="txtJosefinSansRomanBold22"
              >
                Your security is paramount to us. CryptoStake employs
                state-of-the-art security measures to protect your personal and
                financial information. By utilising blockchain technology, we
                ensure that each transaction is securely recorded and accessible
                for verification. With CryptoStake, you can enjoy the thrill of
                gaming with peace of mind.
              </Text>
            </div>
            <Img
              className="h-[579px] md:h-auto object-cover"
              src="images/img_image51.png"
              alt="imageThree"
            />
          </div>
          <div className="flex flex-col font-josefinsans items-center justify-start mt-[120px] mx-auto md:px-5 w-[1620px]">
            <div className="flex flex-col gap-[49px] items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[-0.96px]"
                  size="txtJosefinSansRomanBold48"
                >
                  Explore Our Games and Pools
                </Text>
                <div style={selectStyle.container}>
      <div
        style={{
          ...selectStyle.selectButton,
          ...(isMenuOpen ? selectStyle.selectButtonOpen : {}),
        }}
        onClick={toggleMenu}
      >
        {selectedLabel} {isMenuOpen ? <span style={selectStyle.arrowIcon}>▲</span> : <span style={selectStyle.arrowIcon}>▼</span>}
      </div>
      {isMenuOpen && (
        <div style={selectStyle.optionsContainer}>
          {options.map((option) => (
            <div
              key={option.value}
              style={{
                ...selectStyle.option,
                ...(selectedValue === option.value
                  ? selectStyle.optionSelected
                  : {}),
              }}
              onClick={() => handleOptionSelect(option)}
              
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>


              </div>
              {/* Render content based on the selected option */}
              {selectedValue === "Standard" && <Standard />}
              {selectedValue === "Premium" && <Premium />}
              {selectedValue === "Exclusive" && <Exclusive />}
            </div>
          </div>
          <div className="font-josefinsans md:h-[1625px] h-[1945px] sm:h-[4143px] mt-[117px] md:px-5 relative w-full">
            <div className="absolute flex flex-col gap-6 items-center justify-start right-[8%] top-[0] w-[47%] z-[1]">
              <div className="gap-10 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full ">

                <div className="flex flex-1 flex-col gap-[22px] items-start justify-start w-full">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[-0.44px]"
                    size="txtJosefinSansRomanMedium22"
                  >
                    <span className="text-white-A700 font-josefinsans text-left font-medium">
                      First Name{" "}
                    </span>
                    <span className="md:text-2xl sm:text-[22px] text-red-500 font-josefinsans text-left text-[26px] font-medium">
                      *
                    </span>
                  </Text>
                  <div className="bg-deep_purple-500_19 border border-deep_purple-500 border-solid h-[70px] rounded-[13px] w-full">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder=""
                      className="w-full h-full bg-transparent border-none outline-none text-white-A700 font-josefinsans"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[22px] items-start justify-start w-full">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[-0.44px]"
                    size="txtJosefinSansRomanMedium22"
                  >
                    <span className="text-white-A700 font-josefinsans text-left font-medium">
                      Last Name{" "}
                    </span>
                    <span className="md:text-2xl sm:text-[22px] text-red-500 font-josefinsans text-left text-[26px] font-medium">
                      *
                    </span>
                  </Text>
                  <div className="bg-deep_purple-500_19 border border-deep_purple-500 border-solid h-[70px] rounded-[13px] w-full">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder=""
                      className="w-full h-full bg-transparent border-none outline-none text-white-A700 font-josefinsans"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[22px] items-start justify-start w-full">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[-0.44px]"
                    size="txtJosefinSansRomanMedium22"
                  >
                    <span className="text-white-A700 font-josefinsans text-left font-medium">
                      Email Address{" "}
                    </span>
                    <span className="md:text-2xl sm:text-[22px] text-red-500 font-josefinsans text-left text-[26px] font-medium">
                      *
                    </span>
                  </Text>
                  <div className="bg-deep_purple-500_19 border border-deep_purple-500 border-solid h-[70px] rounded-[13px] w-full">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder=""
                      className="w-full h-full bg-transparent border-none outline-none text-white-A700 font-josefinsans"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[22px] items-start justify-start w-full">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[-0.44px]"
                    size="txtJosefinSansRomanMedium22"
                  >
                    <span className="text-white-A700 font-josefinsans text-left font-medium">
                      Phone Number{" "}
                    </span>
                    <span className="md:text-2xl sm:text-[22px] text-red-500 font-josefinsans text-left text-[26px] font-medium">
                      *
                    </span>
                  </Text>
                  <div className="bg-deep_purple-500_19 border border-deep_purple-500 border-solid h-[70px] rounded-[13px] w-full">
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder=""
                      className="w-full h-full bg-transparent border-none outline-none text-white-A700 font-josefinsans"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[-0.44px]"
                  size="txtJosefinSansRomanMedium22"
                >
                  <span className="text-white-A700 font-josefinsans text-left font-medium">
                    Your Message{" "}
                  </span>
                  <span className="md:text-2xl sm:text-[22px] text-red-500 font-josefinsans text-left text-[26px] font-medium">
                    *
                  </span>
                </Text>
                <div className="bg-deep_purple-500_19 border border-deep_purple-500 border-solid h-[200px] rounded-[13px] w-full">
                  <textarea
                    id="message"
                    name="message"
                    placeholder=""
                    className="w-full h-full bg-transparent border-none outline-none text-white-A700 font-josefinsans"
                  ></textarea>
                </div>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[250px] md:mt-0 mt-[60px]"
                  leftIcon={
                    <Img
                      className="h-7 mr-[15px]"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                  }
                  shape="round"
                  size="lg"
                >
                  <div className="font-semibold md:text-xl sm:text-lg text-[22px] text-left tracking-[-0.44px]">
                    Send Message
                  </div>
                </Button>
              </div>
            </div>
            <div className="absolute md:h-[1508px] h-[1945px] sm:h-[4026px] inset-[0] justify-center m-auto w-full">
              <div className="absolute flex md:flex-col flex-row md:gap-10 items-start justify-between left-[0] top-[0] w-3/5">
                <div className="h-[1057px] md:h-[884px] relative w-[73%] md:w-full">
                  <div className="absolute flex flex-col gap-[21px] items-start justify-start mb-[100px] ml-[120px] mr-[100px] right-[0] top-[0]">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 tracking-[-0.96px]"
                      size="txtJosefinSansRomanRegular48"
                    >
                      Contact CryptoStake
                    </Text>
                    <Text
                      className="leading-[30.00px] text-[22px] text-gray-500 sm:text-lg md:text-xl tracking-[-0.44px] w-full"
                      size="txtJosefinSansRomanRegular22Gray500"
                    >
                      For any inquiries or assistance, our dedicated customer
                      support team is here to help. You can reach us via
                      [contact information].
                    </Text>
                    <Text
                      className="leading-[30.00px] text-[22px] text-gray-500 sm:text-lg md:text-xl tracking-[-0.44px] w-full"
                      size="txtJosefinSansRomanRegular22Gray500"
                    >
                      Join us at CryptoStake today and immerse yourself in a
                      world where fortunes can change with the roll of the dice.
                      Experience the thrill of possibility, connect with fellow
                      players, and enjoy the excitement of the CryptoStake
                      Lottery!
                    </Text>
                  </div>
                  <Img
                    className="absolute bottom-[0] h-[884px] left-[0] object-cover w-[68%]"
                    src="images/img_shape1.png"
                    alt="shapeOne"
                  />
                </div>
              </div>
              <div className="absolute bg-gray-900 bottom-[0] h-[1142px] inset-x-[0] mx-auto w-full"></div>
              <div className="absolute bottom-[0] h-[1168px] md:h-[1508px] sm:h-[4026px] inset-x-[0] mx-auto w-full">
                <Img
                  className="h-[1168px] m-auto object-cover w-full"
                  src="images/Aboutbox2.png"
                  alt="adobestock2672"
                />
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto p-[98px] md:px-10 sm:px-5 w-full">
                  <div className="flex flex-col md:gap-10 gap-16 items-center justify-start mb-5 w-[94%] md:w-full">
                    <div className="flex flex-col gap-4 items-center justify-start">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 tracking-[-0.96px]"
                        size="txtJosefinSansRomanBold48"
                      >
                        Warm regards, The CryptoStake Team
                      </Text>
                      <Text
                        className="text-[22px] text-center text-gray-500 sm:text-lg md:text-xl tracking-[-0.44px]"
                        size="txtJosefinSansRomanRegular22Gray500"
                      >
                        <>
                          Feel free to adapt the content to match your
                          lottery&#39;s specific rules, game details, and
                          contact information.
                        </>
                      </Text>
                    </div>
                    <div className="gap-8 md:gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center min-h-[auto] w-full">
                      <Cards />
                      <Cards />
                      <Cards />
                      <Cards />
                      <Cards />
                    </div>
                    <div className="gap-8 md:gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 mt-[-20px] justify-center min-h-[auto] ml-[316px] w-full">
                      <Cards />
                      <Cards />
                      <Cards />
                      <Cards />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutPageThreePage;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Img, Line,  Navbar, Text } from "components";
import { Ten } from "components/MultipleWinnerResult/ten";
import { Thousand } from "components/MultipleWinnerResult/thousand";
import { Hundred } from "components/MultipleWinnerResult/hundred";

const ResultsPagePage = () => {
  const location = useLocation();
  const isLinkActive = (path) => location.pathname === path;

  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState("10");

  // Function to handle tab button clicks
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="bg-black-900 font-metropolis h-[3183px] mx-auto relative w-full">
        <div className="flex flex-col md:gap-10 gap-[406px] h-full items-center justify-end m-auto w-full">
          <div className="md:h-[1650px] h-[2039px] md:px-5 relative w-full">
            <div className="absolute md:h-[1574px] h-[1927px] inset-x-[0] mx-auto top-[0] w-full">
              <div className="absolute md:h-[591px] h-[595px] inset-x-[0] mx-auto top-[0] w-full">
                <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[72%]">
                  <div className="flex flex-col md:gap-10 gap-[75px] justify-start w-full">
                    <div className="backdrop-opacity-[0.5] bg-red-700 blur-[400.00px] h-40 md:ml-[0] ml-[1210px] rounded-[50%] w-40"></div>
                    <div className="backdrop-opacity-[0.5] bg-indigo-900 blur-[900.00px] h-40 mr-[54px] rounded-[658px] w-[97%]"></div>
                  </div>
                </div>
                <div className="absolute h-[591px] inset-[0] justify-center m-auto w-full">
                  <Img
                    className="h-[591px] m-auto object-cover w-full"
                    src="images/img_bg21.png"
                    alt="bgTwentyOne"
                  />
                  <div className="absolute flex flex-col md:gap-10 gap-[94px] inset-x-[0] items-center justify-start mx-auto top-[2.5%] w-[85%]">
                    <Navbar/>
                    <div className="flex flex-col font-josefinsans gap-[18px] justify-start w-[18%] md:w-full">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 tracking-[-0.96px]"
                        size="txtJosefinSansRomanBold48"
                      >
                        Results Page
                      </Text>
                      <div className="flex flex-row items-start justify-end ml-12 md:ml-[0] w-[72%] md:w-full">
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
                          to="/resultspage"
                          className={`${isLinkActive("/resultspage")
                            ? "font-semibold text-white-A700"
                            : "text-gray-600 hover:font-semibold hover:text-white-A700"
                            } text-[28px] sm:text-lg md:text-xl tracking-[-0.44px]`}
                            style={{marginLeft:"18px"}}
                        >

                          <Text
                            size="txtJosefinSansRomanRegular28"
                          >
                            Results
                          </Text>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="absolute bottom-[3%] h-[356px] object-cover right-[0] w-[7%]"
                src="images/img_rectangle39352.png"
                alt="rectangle39352"
              />
              <Img
                className="absolute h-[212px] left-[0] object-cover top-[21%] w-[15%]"
                src="images/img_group32267.png"
                alt="group32267"
              />
              <div className="absolute bg-black-900 bottom-[0] h-[1514px] inset-x-[0] mb-[60px] mx-auto w-full"></div>
            </div>
            <Img
              className="absolute h-[212px] left-[0] object-cover top-[19%] w-[15%]"
              src="images/img_group32267.png"
              alt="group1000009866"
            />
            <Img
              className="absolute bottom-[0] h-[1650px] object-cover right-[0] w-[47%]"
              src="images/img_image1removebgpreview_1650x902.png"
              alt="image1removebgp"
            />
          </div>
          <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <Img
              className="h-[738px] md:h-auto mb-3.5 object-cover"
              src="images/img_shape1_738x593.png"
              alt="shapeOne"
            />
            <Img
              className="h-[356px] md:h-auto sm:mt-0 mt-[396px] object-cover"
              src="images/img_rectangle39352.png"
              alt="rectangle66532"
            />
          </div>
        </div>
        <div className="absolute bg-deep_purple-500_26 border-[3px] border-deep_purple-500 border-solid bottom-[4%] flex flex-col font-josefinsans md:gap-10 gap-[66px] inset-x-[0] items-center justify-start max-w-[1620px] mx-auto p-14 md:px-5 rounded-[20px] w-full">
          <div className="bg-white-A700_0c flex p-1.5 relative rounded-[13px] w-[369px] h-[66px]">
            
            <div className="flex flex-row items-center justify-between  ml-[37px] my-auto w-[280px] z-[1]">
            <button
          className="tab-button"
          style={{
            backgroundColor: activeTab === "10" ? "#6d28d6" : "transparent",           
            width: activeTab === "10" ? "120px" : "auto",
            height: activeTab === "10" ? "53px" : "auto",
            color:'white',
            fontSize:'22px',
            borderRadius:'8px',
            fontWeight: "600",
          }}
          onClick={() => handleTabClick("10")}
        >
          10
        </button>
        <button
          className="tab-button"
          style={{
            backgroundColor: activeTab === "100" ? "#6d28d9" : "transparent",
            width: activeTab === "100" ? "120px" : "auto",
            height: activeTab === "100" ? "53px" : "auto",
            color:'white',
            fontSize:'22px',
            borderRadius:'8px',
            fontWeight:'600',
          }}
          onClick={() => handleTabClick("100")}
        >
          100
        </button>
        <button
          className="tab-button"
          style={{
            backgroundColor: activeTab === "1000" ? "#6d28d9" : "transparent",
            width: activeTab === "1000" ? "120px" : "auto",
            height: activeTab === "1000" ? "53px" : "auto",
            color:'white',
            fontSize:'22px',
            borderRadius:'8px',
            fontWeight:'600',
          }}
          onClick={() => handleTabClick("1000")}
        >
          1000
        </button>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] items-start justify-start mb-[3px] w-full">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 tracking-[-0.60px]"
              size="txtJosefinSansRomanBold30"
            >
              Multiple Winners Results
            </Text>
            {activeTab === "10" && <Ten />}
            {activeTab === "100" && <Hundred />}
            {activeTab === "1000" && <Thousand />}
           
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultsPagePage;

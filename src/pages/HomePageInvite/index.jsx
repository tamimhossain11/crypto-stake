import React, { useState, useEffect, useRef } from "react";
import { Img, PagerIndicator, Navbar, ScrollCards } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";


const HomePageInvitePage = () => {

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [setScrollLeft] = useState(0); // New state for scroll position
  const scrollContainerRef = useRef(null);
  
  const handleNextCard = () => {
    const newIndex = currentCardIndex + 1;

    if (newIndex < 4) {
      setCurrentCardIndex(newIndex);
    }
  };

  const handlePrevCard = () => {
    const newIndex = currentCardIndex - 1;

    if (newIndex >= 0) {
      setCurrentCardIndex(newIndex);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const handleScroll = () => {
      if (scrollContainer) {
        const newScrollLeft = scrollContainer.scrollLeft;
        setScrollLeft(newScrollLeft); // Update scrollLeft state
        const cardWidth = 860; // Adjust this based on your card width
        const newActiveIndex = Math.floor((newScrollLeft + cardWidth / 2) / cardWidth);
  
        // Check if we have reached the last card on the right side
        const numberOfCards = 4;
        const maxScroll = cardWidth * (numberOfCards - 800); // Assuming numberOfCards is the total number of cards
        if (newScrollLeft >= maxScroll) {
          setCurrentCardIndex(numberOfCards - 800); // Set current card index to the last card
        } else {
          setCurrentCardIndex(newActiveIndex);
        }
      }
    };
  
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }
  
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div className="bg-black-900 font-josefinsans h-[1080px] mx-auto relative w-full overflow-hidden">
        <div className="flex md:flex-col flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto w-full">
          <Img
            className=" h-[1080px] w-full"
            src="images/homeback.png"
            alt="ellipseEightySix"
          />
        </div>
        <div className="absolute flex flex-col md:gap-10 gap-[134px] h-max inset-y-[0] justify-start left-[14%] my-auto md:px-5 w-[22%]">
          <div className="backdrop-opacity-[2] bg-indigo-900 blur-[500.00px] h-40 md:ml-[0] ml-[206px] mr-[54px] rounded-[50%] w-40"></div>
        </div>  
        <div className="absolute bg-black-900_19 flex flex-col h-full inset-[0] items-end justify-center m-auto  w-[100%]">
          <div className="flex flex-col items-start justify-start mb-[68px] md:px-5 w-[100%] md:w-full ">
          <div className="flex flex-col items-start justify-start  w-[97%] md:w-full pl-[143px] ">
        <Navbar />
        </div> 
            <div
              className="scroll-cards-viewport"
              style={{
                overflow: 'hidden',
                
                paddingTop: '153px',
                paddingLeft:'151px',
                scrollBehavior: 'smooth', // Optional: Smooth scrolling
                height: '900px',
              }}
              ref={scrollContainerRef}
            >
              <div
                className="scroll-cards-container"
                style={{
                  display: 'flex',
                  width: `${1030 * 4}px`, // Adjust the card width and number of cards
                  transform: `translateX(-${currentCardIndex * 860}px)`, // Adjust the card width
                  transition: 'transform 0.5s ease', // Adjust the animation duration and easing as needed
                  whiteSpace: 'nowrap',
                  gap: '100px',
                  zIndex: '1',
                  
                }}
              >

                {/*--------------------------- ScrollCards start add cards as much needed----------------------------------- */}
                <ScrollCards />
                <ScrollCards />
                <ScrollCards />
                <ScrollCards />
                {/*-------------------------------------scrollCards end------------------------------------------------------ */}

                {/*------------------------------Scrolling Icons and page indicator-------------------------------------------*/}

              </div>
              <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[688px] mt-[137px] w-[14%] md:w-full">
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  size="2xl"
                  className="my-icon"
                  onClick={handlePrevCard}
                  style={{
                    cursor: "pointer",
                    backgroundColor: "transparent ",
                    color: "#6D28D9",
                    border: "1px solid #6D28D9",
                    borderRadius: "50%",
                    padding: "15px",
                    transition: "background-color 0.3s, color 0.3s", // Add a smooth transition effect
                    height:'25px',
                    width:'25px',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#6D28D9 "; /* Change the background color on hover */
                    e.target.style.color = "#fff "; /* Change the text color on hover */
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "initial"; /* Restore the initial background color */
                    e.target.style.color = "#6D28D9"; /* Restore the initial text color */
                  }}
                />
                <PagerIndicator
                  className="flex h-2.5 w-[100px]"
                  count={4} // Adjust the number of cards
                  currentCardIndex={currentCardIndex}
                  setCurrentCardIndex={setCurrentCardIndex}
                  inactiveCss="inline-block cursor-pointer rounded-[50%] h-[10px] bg-gray-500_75 w-[10px]"
                  activeCss="inline-block cursor-pointer rounded-[20px] h-[10px] bg-deep_purple-500"
                />
                <FontAwesomeIcon
                  icon={faAngleRight} // Use the new icon here
                  size="2xl" // Set the desired size
                  className="my-icon" // Add a class name for the icon
                  onClick={handleNextCard}
                  style={{
                    cursor: "pointer",
                    backgroundColor: "transparent",
                    color: "#6D28D9", // Set the initial text color to match the border color
                    border: "1px solid #6D28D9", // Set the border color
                    borderRadius: "50%", // Make the button circular
                    padding: "15px", // Add padding to the button
                    transition: "background-color 0.3s, color 0.3s", // Add a smooth transition effect
                    height:'25px',
                    width:'25px',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#6D28D9"; /* Change the background color on hover */
                    e.target.style.color = "#fff"; /* Change the text color on hover */
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "initial"; /* Restore the initial background color */
                    e.target.style.color = "#6D28D9"; /* Restore the initial text color */
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageInvitePage;

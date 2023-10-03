import React from "react";
import { Button, Line, List,  Text } from "components";
const Exclusive = () => {

    return (
        <>
              <List
                className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <div className="bg-deep_purple-500_26 border-[3px] border-deep_purple-500 border-solid flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[15px] w-full">
                  <div className="flex flex-col gap-[23px] items-center justify-start mt-1.5 w-full">
                    <Text
                      className="md:text-4xl sm:text-[34px] text-[38px] text-center text-white-A700 tracking-[-0.76px]"
                      size="txtJosefinSansRomanBold38"
                    >
                      Tier-01
                    </Text>
                    <Line className="bg-white-A700_4c h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start mt-[37px] w-auto sm:w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[-0.56px] w-auto"
                      size="txtJosefinSansRomanMedium28"
                    >
                      Deposit Amount: $100,000
                    </Text>
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[-0.56px] w-auto"
                      size="txtJosefinSansRomanMedium28"
                    >
                      Players: 5
                    </Text>
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[-0.56px] w-auto"
                      size="txtJosefinSansRomanMedium28"
                    >
                      Total Deposit: $500,000.00
                    </Text>
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[-0.56px] w-auto"
                      size="txtJosefinSansRomanMedium28"
                    >
                      Winners: 5
                    </Text>
                    <Text
                      className="leading-[30.00px] max-w-[332px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[-0.56px]"
                      size="txtJosefinSansRomanMedium28"
                    >
                      Win Amount: $187,500.00 (Per Winner)
                    </Text>
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[-0.56px] w-auto"
                      size="txtJosefinSansRomanMedium28"
                    >
                      Total Win Amount: $375,000.00
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-bold mb-2.5 min-w-[453px] sm:min-w-full mt-[52px] rounded-[13px] text-2xl md:text-[22px] text-center sm:text-xl tracking-[-0.48px]"
                    size="lg"
                  >
                    Play Now
                  </Button>
                </div>
                <div className="bg-deep_purple-500_26 border-[3px] border-deep_purple-500 border-solid flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[15px] w-full">
                  <div className="flex flex-col gap-[23px] items-center justify-start mt-1.5 w-full">
                    <Text
                      className="md:text-4xl sm:text-[34px] text-[38px] text-center text-white-A700 tracking-[-0.76px]"
                      size="txtJosefinSansRomanBold38"
                    >
                      Tier-02
                    </Text>
                    <Line className="bg-white-A700_4c h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start mt-[37px] w-auto sm:w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[-0.56px] w-auto"
                      size="txtJosefinSansRomanMedium28"
                    >
                      Deposit Amount: $100,000
                    </Text>
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[-0.56px] w-auto"
                      size="txtJosefinSansRomanMedium28"
                    >
                      Players: 5
                    </Text>
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[-0.56px] w-auto"
                      size="txtJosefinSansRomanMedium28"
                    >
                      Total Deposit: $500,000.00
                    </Text>
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[-0.56px] w-auto"
                      size="txtJosefinSansRomanMedium28"
                    >
                      Winners: 1
                    </Text>
                    <Text
                      className="leading-[30.00px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[-0.56px]"
                      size="txtJosefinSansRomanMedium28"
                    >
                      <span className="text-white-A700 font-josefinsans text-left font-medium">
                        Win Amount: $
                      </span>
                      <span className="text-white-A700 font-josefinsans text-left font-normal">
                        <>
                          375,000.00
                          <br />
                        </>
                      </span>
                      <span className="text-white-A700 font-josefinsans text-left font-medium">
                        (Per Winner)
                      </span>
                    </Text>
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[-0.56px] w-auto"
                      size="txtJosefinSansRomanMedium28"
                    >
                      Total Win Amount: $375,000.00
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-bold mb-[9px] min-w-[453px] sm:min-w-full mt-[53px] rounded-[13px] text-2xl md:text-[22px] text-center sm:text-xl tracking-[-0.48px]"
                    size="lg"
                  >
                    Play Now
                  </Button>
                </div>
                <div className="bg-deep_purple-500_26 border-[3px] border-deep_purple-500 border-solid flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[15px] w-full">
                  <div className="flex flex-col gap-[23px] items-center justify-start mt-1.5 w-full">
                    <Text
                      className="md:text-4xl sm:text-[34px] text-[38px] text-center text-white-A700 tracking-[-0.76px]"
                      size="txtJosefinSansRomanBold38"
                    >
                      Tier-03
                    </Text>
                    <Line className="bg-white-A700_4c h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start mt-[37px] w-auto">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[-0.56px] w-auto"
                      size="txtJosefinSansRomanMedium28"
                    >
                      Deposit Amount: $1,000,000
                    </Text>
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[-0.56px] w-auto"
                      size="txtJosefinSansRomanMedium28"
                    >
                      Players: 3
                    </Text>
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[-0.56px] w-auto"
                      size="txtJosefinSansRomanMedium28"
                    >
                      Total Deposit: $100.00
                    </Text>
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[-0.56px] w-auto"
                      size="txtJosefinSansRomanMedium28"
                    >
                      Winners: 5
                    </Text>
                    <Text
                      className="leading-[30.00px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[-0.56px]"
                      size="txtJosefinSansRomanMedium28"
                    >
                      <span className="text-white-A700 font-josefinsans text-left font-medium">
                        Win Amount: $
                      </span>
                      <span className="text-white-A700 font-josefinsans text-left font-normal">
                        <>
                          2,250,000.00
                          <br />
                        </>
                      </span>
                      <span className="text-white-A700 font-josefinsans text-left font-medium">
                        (Per Winner)
                      </span>
                    </Text>
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[-0.56px] w-auto"
                      size="txtJosefinSansRomanMedium28"
                    >
                      Total Win Amount: $75.00
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-bold mb-2 min-w-[453px] sm:min-w-full mt-[53px] rounded-[13px] text-2xl md:text-[22px] text-center sm:text-xl tracking-[-0.48px]"
                    size="lg"
                  >
                    Play Now
                  </Button>
                </div>
              </List>
        </>
    );
};

export { Exclusive };
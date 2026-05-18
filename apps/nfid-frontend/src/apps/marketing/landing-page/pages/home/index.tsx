import React from "react"
import { useLocation } from "react-router-dom"

import MainCoinsImg from "../../assets/main-coins.png"
import MainMobImg from "../../assets/mob.png"
import { Button } from "../../ui/button"
import { Container } from "../../ui/container"
import { Wrapper } from "../wrapper"

const HomeContent = ({
  openAuthModal,
  signIn,
}: {
  openAuthModal: () => unknown
  signIn: () => unknown
}) => {
  const location = useLocation()

  React.useEffect(() => {
    if (new URLSearchParams(location.search).get("auth") === "true") {
      openAuthModal()
    }
  }, [location.search, openAuthModal])

  return (
    <main className="relative">
      <Container className="relative overflow-visible">
        <div className="gradient-radial"></div>
        <div className="relative z-10 pt-[30px] md:pt-[60px] lg:pt-[90px] text-center flex flex-col items-center">
          <div className="text-[30px] md:text-[34px] lg:text-[44px] xl:text-[50px] font-bold lg:max-w-[1012px]">
            <h1 className="tracking-normal leading-120 gradient-text">
              Share crypto as easily as texting.
            </h1>
          </div>
          <h2
            style={{ fontFamily: "inherit !important" }}
            className="text-[18px] lg:text-[22px] relative z-[1] mt-[30px] text-gray-50 font-inherit font-normal lg:max-w-[912px]"
          >
            Send or receive tokens & NFTs with just a link or QR code
          </h2>
          <div className="flex justify-center relative z-[1]">
            <Button
              id="authentication-button"
              onClick={signIn}
              className="mt-[30px] w-[146px] sm:w-[178px]"
              type="primary"
            >
              Go to wallet
            </Button>
          </div>
          <div className="relative mt-[-30px] sm:mt-[-70px] md:mt-[-100px] xl:mt-[-180px]">
            <img
              className="max-w-full"
              loading="lazy"
              src="/main.png"
              alt="Cashier Wallet hero"
            />
            <div className="absolute right-[20px] md:right-[75px] top-[120px] md:top-[240px] lg:top-[320px] xl:top-[430px]">
              <img
                className="w-[77px] sm:w-[126px] md:w-[174px] lg:w-[290px]"
                src={MainMobImg}
                alt=""
                loading="lazy"
              />
            </div>
            <div className="absolute z-[1] left-0 bottom-0">
              <img
                className="w-[220px] sm:w-[500px] xl:w-[830px]"
                src={MainCoinsImg}
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}

export function Home() {
  return <Wrapper pageComponent={HomeContent} />
}

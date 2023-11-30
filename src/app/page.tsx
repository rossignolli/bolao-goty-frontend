import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <main className="flex min-h-screen ">
      <div className="relative w-full">
        {/* Background Video */}
        <video
          className="absolute inset-0 object-cover w-full h-full"
          autoPlay
          loop
          muted
          preload="auto"
          playsInline
        >
          <source src="assets/spider.webm" type="video/webm" />
          <source
            src="https://cdn.thegameawards.com//frontend/bgs/2023-nominies-bg.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 z-10" />
        <Avatar className="absolute right-3 top-3 hover:cursor-pointer z-20">
          <AvatarImage src="assets/usercircle.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-screen">
          <div className="text-white p-5 max-w-md mx-auto bg-opacity-20 flex flex-col h-full justify-between">
            {/* Your content here */}
            <div className="mt-32">
              <h2 className="mb-4 w-full text-center text-sm">
                ADIVINHE OS GANHADORES DO
              </h2>
              <Image
                src={"logo-tga.svg"}
                width={328}
                height={113}
                alt="TGA Logo"
                className="mb-4"
              />
            </div>
            <div className="mb-32">
              <div className="space-y-4">
                <p className=" text-center max-w-sm">
                  Adivinhe os ganhadores e vença seus amigos no maior prêmio dos
                  video games.
                </p>
                <Button className="bg-[#FFA91B] w-full text-black font-medium text-lg py-6 hover:text-white">
                  VOTE NO SEU FAVORITO
                </Button>
                <Button className=" w-full text-white font-medium text-lg py-6 hover:text-black hover:bg-[#FFA91B]">
                  VER TODAS AS CATEGORIAS
                </Button>
              </div>
            </div>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>
    </main>
  );
}

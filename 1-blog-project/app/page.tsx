import Image from "next/image";
import { Pacifico } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

const pacifiko = Pacifico({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header className="bg-slate-900 p-4 shadow-2xl">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">
            Logo
          </div>
          <div className="hidden sm:block">
            <input type="text" className="w-full" />
          </div>
          <div className="text-white text-lg font-semibold">Login</div>
        </div>
      </header>

      <div className=" flex items-center justify-center space-x-8 p-3 bg-slate-700">
        <a href="" className="text-white              hover:text-black">
          Ana Sayfa
        </a>
        <a className="text-white hover:text-black">Blog</a>
        <a className="text-white hover:text-black">Contact</a>
      </div>

      <div className="flex items-center">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          className="h-44 md:h-96 lg:h-[500px] w-full object-cover"
        />
      </div>

      <div className="container mt-4 mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div className="border-2">a</div>
          <div className="border-2">b</div>
        </div>
      </div>
    </>
  );
}

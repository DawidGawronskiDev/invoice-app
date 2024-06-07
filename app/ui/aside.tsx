import Logo from "@/public/logo.svg";
import Image from "next/image";

export default function Aside() {
  return (
    <aside className="w-24 h-screen bg-c-04 rounded-r-2xl overflow-hidden">
      <div className="w-full aspect-square bg-c-01 rounded-r-2xl flex flex-col justify-end relative overflow-hidden">
        <div className="w-full h-1/2 bg-c-02 rounded-tl-2xl"></div>
        <Image
          src={Logo}
          alt="Logo"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10"
        />
      </div>
      Aside
    </aside>
  );
}

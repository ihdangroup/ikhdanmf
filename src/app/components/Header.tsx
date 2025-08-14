import Image from "next/image";

export default function Header() {
  return (
    <div
      className="py-32 px-6 lg:pl-54 lg:pr-36 lg:py-38 flex flex-wrap justify-between"
      id="header"
    >
      <div className="w-full flex items-center lg:w-1/2">
        <div>
          <h1 className="text-4xl lg:text-[58px] font-bold ">
            Hello, My Name{" "}
            <span className="text-blue-400">Ikhdan Maghfuron</span>
          </h1>
          <ul className="flex gap-2 text-white my-4">
            <li className="bg-purple-400 rounded-lg px-4 py-1">
              Fullstack Developer
            </li>
            <li className="bg-purple-400 rounded-lg px-4 py-1">Student</li>
          </ul>
          <p className="text-base lg:text-xl leading-relaxed py-4">
            i am a fullstack developer at Trisya Media Teknologi, i have
            experience frontend with Next js and backend with Laravel, I am a
            student at peradaban university,and graduate of Bangkit 2024 batch 2
            with the machine learning pathway
          </p>
        </div>
      </div>
      <div
        className="mt-12 w-full flex justify-end lg:w-1/2 lg:mt-0
        "
      >
        <Image
          src="/header-new.png"
          width={600} // default untuk mobile
          height={433}
          className="lg:w-[470px] md:h-[383px] w-[350px] h-[260px] object-cover rounded-xl"
          alt="header"
        />
      </div>
    </div>
  );
}

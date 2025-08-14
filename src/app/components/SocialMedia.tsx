import Image from "next/image";

const SocialMedia = () => {
  return (
    <div className="flex mx-auto bg-gradient-to-r space-x-8 from-gray-600 via-black to-blue-300 justify-center w-full lg:w-1/2 p-4 rounded-2xl shadow-lg items-center">
      <div className="flex space-x-4 text-2xl items-center">
        <Image src="/tiktok.svg" width={50} height={50} alt="tiktok" />
        <p className="hidden lg:block">Tiktok</p>
      </div>
      <div className="flex space-x-4 text-2xl items-center">
        <Image src="/tiktok.svg" width={50} height={50} alt="tiktok" />
        <p className="hidden lg:block">Tiktok</p>
      </div>
      <div className="flex space-x-4 text-2xl items-center">
        <Image src="/linkedin.svg" width={60} height={60} alt="tiktok" />
        <p className="hidden lg:block">Linkedin</p>
      </div>
    </div>
  );
};

export default SocialMedia;

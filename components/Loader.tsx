import Image from "next/image";

function Loader() {
  return (
    <div className="flex-center h-screen w-full">
      <Image
        src="/icons/tube-spinner.svg"
        alt="Loading"
        width={50}
        height={50}
      ></Image>
    </div>
  );
}

export default Loader;

import Image from "next/image";

const ConnectionError = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
        className="rounded-2xl mb-4"
        src="/error.png"
        width={500}
        height={500}
        alt="error"
      />
      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-2">
        No connection!
      </h1>
      <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-500">
        Please check your network connection and try again.
      </p>
    </div>
  );
};

export default ConnectionError;

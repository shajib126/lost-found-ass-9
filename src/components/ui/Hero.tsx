import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-[#343A40] text-white p-10">
      <div className="p-2 md:w-[50%] mx-auto text-center p-4">
        <h1 className="text-4xl font-bold mb-4">Lost & Found Hub</h1>
        <p>
          Lost & Found Hub is your go-to platform for reuniting lost items with
          their rightful owners. Whether you have lost something valuable or
          found an item that needs to be returned, our easy-to-use web
          application facilitates quick and secure claims. Join our community to
          ensure no item stays lost forever and help others recover their
          precious belongings. With advanced tracking and user-friendly
          features, Lost & Found Hub is the bridge between lost and found.
        </p>
        <div className="mt-12 flex justify-center gap-4">
          <Link href="/lost-item">
            <button className="btn bg-[#FFC107] border-none hover:bg-red-300">Report a Lost Item</button>
          </Link>

          <Link href="/found-item">
            <button className="btn bg-green-400 border-none hover:bg-lime-300">Report a Found Item</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

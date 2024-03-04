import Image from "next/image";
import ProfileImg from "../../public/images/profile.jpg";
import Link from "next/link";

export default function Profile() {
  return (
    <section className="flex flex-col justify-center items-center">
      <Image
        src={ProfileImg}
        alt="photo"
        width={200}
        height={200}
        className="mt-2 rounded-full"
        priority
      />
      <div className="mt-2 text-center">
        <h2 className="text-2xl font-bold ">안녕하세요, 하희승입니다.</h2>
        <h3 className="text-xl font-semibold">Frontend Engineer</h3>
        <p>한다면 하는 여자!</p>
      </div>
      <Link href="/contact">
        <p className="bg-yellow-400 px-3 py-1 rounded-md mt-2 font-bold">
          Contact Me
        </p>
      </Link>
    </section>
  );
}

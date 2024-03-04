import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";

export default function ContactPage() {
  return (
    <section>
      <div className="text-center">
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <p className="my-2">ssigu69@gmail.com</p>
        <div className="flex items-center justify-center space-x-5">
          <Link href="https://github.com/hheeseung">
            <FaGithub className="text-4xl" />
          </Link>
          <Link href="https://velog.io/@hheeseung/posts">
            <SiVelog className="text-4xl" />
          </Link>
        </div>
        <p className="my-10 text-3xl font-bold">Or Send me Email</p>
      </div>
      <form className="bg-slate-700 flex flex-col w-1/3 mx-auto p-5 space-y-2 mb-3 rounded-xl">
        <label className="text-white font-semibold">Your Email</label>
        <input type="email" className="focus:outline-none p-2" />
        <label className="text-white font-semibold">Subject</label>
        <input type="text" className="focus:outline-none p-2" />
        <label className="text-white font-semibold">Message</label>
        <textarea rows={10} className="focus:outline-none p-2" />
        <button className="mt-3 bg-yellow-300 font-semibold p-2">Submit</button>
      </form>
    </section>
  );
}

import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";

const LINK_CLASS = "text-4xl";
const LABEL_CLASS = "text-white font-semibold";
const INPUT_CLASS = "focus:outline-none p-2";

export default function ContactPage() {
  return (
    <section>
      <div className="text-center">
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <p className="my-2">ssigu69@gmail.com</p>
        <div className="flex items-center justify-center space-x-5">
          <a href="https://github.com/hheeseung">
            <FaGithub className={LINK_CLASS} />
          </a>
          <a href="https://velog.io/@hheeseung/posts">
            <SiVelog className={LINK_CLASS} />
          </a>
        </div>
        <p className="my-10 text-3xl font-bold">Or Send me Email</p>
      </div>
      <form className="bg-slate-700 flex flex-col w-1/3 mx-auto p-5 space-y-2 mb-3 rounded-xl">
        <label className={LABEL_CLASS}>Your Email</label>
        <input type="email" className={INPUT_CLASS} />
        <label className={LABEL_CLASS}>Subject</label>
        <input type="text" className={INPUT_CLASS} />
        <label className={LABEL_CLASS}>Message</label>
        <textarea rows={10} className={INPUT_CLASS} />
        <button className="mt-3 bg-yellow-300 font-semibold p-2">Submit</button>
      </form>
    </section>
  );
}

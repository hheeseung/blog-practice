import Profile from "@/components/Profile";

export default function AboutPage() {
  return (
    <>
      <Profile />
      <section className="mt-3 py-5 text-center bg-slate-100 space-y-4">
        <div>
          <h1 className="text-xl font-bold mb-2">나는 누구인가?</h1>
          <p>프론트엔드 개발자</p>
          <p>
            코드 한 줄 한 줄에 의미와 정성을 담고 깊이 생각하려 노력하고
            있습니다.
          </p>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-2">스킬</h1>
          <p>HTML, CSS, JavaScript, TypeScript</p>
          <p>React.js, Next.js</p>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-2">관심사</h1>
          <p>백엔드를 이해할 수 있는 프론트엔드 개발자가 되는 것</p>
          <p>원활한 소통과 협업하기 좋은 개발자가 되는 것</p>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-2">좌우명</h1>
          <p>한다면 하는 여자</p>
          <p>과거의 나보다 잘해야지!</p>
        </div>
      </section>
    </>
  );
}

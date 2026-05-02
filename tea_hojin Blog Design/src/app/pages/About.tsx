import { Link } from "react-router";
import portrait from "../../imports/AboutMe/8f3393d6701db72425a4477f1f7483952a2aa5f7.png";

const SECTIONS: [string, string, string][] = [
  ["Tea Log", "/tea-log", "마신 차에 대한 기록. 종류·우림 방법·그날의 맛과 향, 그리고 떠오른 감정들."],
  ["Teawares", "/teawares", "소장하고 있는 다기의 이야기. 찻잔·다관·차탁 등 도구의 아름다움과 쓰임새."],
  ["Notes", "/notes", "차 문화, 계절의 변화, 일상의 단상을 자유롭게 남기는 공간."],
];

export default function About() {
  return (
    <div>
      <header className="border-b border-[#e5e2dc] px-6 lg:px-12 py-10 flex items-baseline justify-between">
        <h2
          className="text-[#2c2c2c]"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 800,
            fontSize: 28,
            letterSpacing: "0.5px",
          }}
        >
          About Me &amp; Blog
        </h2>
        <span
          className="text-[#8c8a85] uppercase"
          style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "1.2px" }}
        >
          since 2024
        </span>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] xl:grid-cols-[360px_1fr] gap-10 xl:gap-14 px-6 lg:px-12 py-10 lg:py-14">
        <div className="flex flex-col gap-5">
          <div className="aspect-square bg-[#f4f3f0] overflow-hidden border border-[#e5e2dc]">
            <img src={portrait} alt="Tea_hojin" className="size-full object-cover" />
          </div>
          <div
            className="text-[#8c8a85] uppercase"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 11,
              letterSpacing: "1.4px",
              lineHeight: 1.9,
            }}
          >
            Seoul, KR
            <br />
            Tea · Teaware · Notes
          </div>
        </div>

        <article className="flex flex-col gap-9 max-w-[680px]">
          <p
            className="text-[#2c2c2c]"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 24,
              lineHeight: 1.55,
              letterSpacing: "-0.2px",
            }}
          >
            안녕하세요. 차와 다기, 그리고 고요한 시간을 기록하는{" "}
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Tea_hojin</span>
            입니다.
          </p>
          <p
            className="text-[#3d3d3a]"
            style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 16, lineHeight: 1.9 }}
          >
            이 공간은 저의 작은 차 생활을 정리하고 나누는 개인 아카이브입니다. 일상 속에서 마주하는 차의
            순간들, 손끝에서 느껴지는 다기의 감촉, 그리고 그 시간 속에서 떠오르는 단상들을 기록하고
            있습니다.
          </p>

          <blockquote className="border-l-2 border-[#c3b9a2] pl-6 my-1">
            <p
              className="text-[#5a5854] italic"
              style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 17, lineHeight: 1.7 }}
            >
              平心書記 — 평온한 마음으로 기록한다.
            </p>
          </blockquote>

          <section className="flex flex-col gap-4">
            <h3
              className="text-[#2c2c2c] uppercase"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "1.6px",
              }}
            >
              이 공간에 대하여
            </h3>
            <p
              className="text-[#3d3d3a]"
              style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 16, lineHeight: 1.85 }}
            >
              Tea_hojin Archive는 세 가지 주제를 중심으로 운영됩니다.
            </p>
          </section>

          <dl className="flex flex-col divide-y divide-[#e5e2dc] border-t border-b border-[#e5e2dc]">
            {SECTIONS.map(([k, to, v]) => (
              <Link
                key={k}
                to={to}
                className="grid grid-cols-[110px_1fr_auto] sm:grid-cols-[150px_1fr_auto] gap-5 sm:gap-6 py-5 hover:bg-[#f7f5f0] transition-colors group"
              >
                <dt
                  className="text-[#2c2c2c]"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: 15,
                    letterSpacing: "0.5px",
                  }}
                >
                  {k}
                </dt>
                <dd
                  className="text-[#5a5854]"
                  style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 14, lineHeight: 1.75 }}
                >
                  {v}
                </dd>
                <span
                  className="text-[#a8a59f] group-hover:text-[#2c2c2c] transition-colors"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: 14 }}
                >
                  →
                </span>
              </Link>
            ))}
          </dl>
        </article>
      </div>
    </div>
  );
}

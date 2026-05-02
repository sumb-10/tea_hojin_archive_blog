import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="px-6 lg:px-12 py-20 lg:py-32 flex flex-col gap-6 max-w-[640px]">
      <p
        className="text-[#8c8a85] uppercase"
        style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "1.4px" }}
      >
        404 · Not Found
      </p>
      <h1
        className="text-[#2c2c2c]"
        style={{
          fontFamily: "'Noto Serif KR', serif",
          fontWeight: 600,
          fontSize: 36,
          lineHeight: 1.3,
        }}
      >
        찾으시는 페이지가 없습니다.
      </h1>
      <p
        className="text-[#5a5854]"
        style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 16, lineHeight: 1.85 }}
      >
        주소가 변경되었거나 삭제된 글일 수 있습니다.
      </p>
      <Link
        to="/"
        className="text-[#2c2c2c] uppercase border-b border-[#2c2c2c] pb-1 self-start"
        style={{ fontFamily: "Inter, sans-serif", fontSize: 12, letterSpacing: "1.4px" }}
      >
        홈으로 돌아가기 →
      </Link>
    </div>
  );
}

import imgA from "../../imports/Home/0c0ddea4fa0b88d4904343cb40c395b37f89ae01.png";
import imgB from "../../imports/Home/ea4462400c2489e98ce63452dc3427164700ffe8.png";
import imgC from "../../imports/Home/c4c1b2a50e0bd7b734d8531a08baa19034db84e4.png";

export type Category = "tea-log" | "teawares" | "notes";

export const CATEGORY_LABEL: Record<Category, string> = {
  "tea-log": "Tea Log",
  teawares: "Teawares",
  notes: "Notes",
};

export type Post = {
  slug: string;
  category: Category;
  title: string;
  subtitle?: string;
  excerpt: string;
  date: string;
  cover: string;
  body: Block[];
  meta?: { label: string; value: string }[];
};

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string; cite?: string };

export const POSTS: Post[] = [
  {
    slug: "pingxin-jingdezhen-baekja",
    category: "teawares",
    title: "평심서기 경덕진 백자잔",
    subtitle: "平心書記 · Jingdezhen porcelain",
    excerpt: "단아한 백자에 담긴 첫 모금의 청량함.",
    date: "2026-05-02",
    cover: imgA,
    meta: [
      { label: "Origin", value: "Jingdezhen, CN" },
      { label: "Material", value: "Porcelain · 白磁" },
      { label: "Acquired", value: "2026 Spring" },
    ],
    body: [
      {
        type: "p",
        text:
          "경덕진 백자는 중국 도자기의 정수를 보여주는 전통 공예품입니다. 특히 평심서기 공방에서 제작된 이 찻잔은 순백의 청결함과 단아한 형태로 차를 마시는 순간을 더욱 특별하게 만들어줍니다.",
      },
      { type: "h2", text: "백자의 매력" },
      {
        type: "p",
        text:
          "백자 특유의 맑고 투명한 질감은 차의 색을 온전히 감상할 수 있게 해줍니다. 녹차의 청록빛, 홍차의 호박빛이 하얀 잔 속에서 더욱 선명하게 드러나며, 차를 마시는 행위가 시각적인 즐거움으로도 확장됩니다.",
      },
      {
        type: "p",
        text:
          "손에 쥐었을 때의 촉감 또한 특별합니다. 매끄럽지만 차갑지 않은 표면은 손끝에서 온기를 전달하며, 잔을 감싸 쥔 손에서 차의 온도가 은은하게 느껴집니다.",
      },
      { type: "h2", text: "평심서기의 철학" },
      {
        type: "quote",
        text:
          "차 한 잔을 마시는 시간만큼은 세상의 소란을 내려놓고, 오직 지금 이 순간에만 집중할 수 있기를 바라는 마음으로 찻잔을 빚습니다.",
        cite: "평심서기 공방 장인",
      },
      { type: "h2", text: "사용과 관리" },
      {
        type: "p",
        text:
          "사용 후에는 미지근한 물로 부드럽게 헹구고 자연 건조하는 것이 좋습니다. 세제는 가급적 사용하지 않으며, 시간을 두고 천천히 말리는 것이 백자의 질감을 오래도록 유지하는 방법입니다.",
      },
    ],
  },
  {
    slug: "baekja-cup-set",
    category: "teawares",
    title: "백자 찻잔 세트",
    excerpt: "여섯 개의 잔이 모여 만드는 고요한 합.",
    date: "2026-05-01",
    cover: imgB,
    body: [
      {
        type: "p",
        text:
          "찻자리에 둘러앉을 때, 같은 결의 잔이 나란히 놓이는 풍경을 좋아합니다. 손님마다 미세하게 다른 기벽을 골라 건네는 일이 또 하나의 인사가 됩니다.",
      },
      { type: "h2", text: "여섯 개의 결" },
      {
        type: "p",
        text:
          "수작업이기에 잔마다 두께와 입술선이 조금씩 다릅니다. 그 미묘한 차이가 같은 차를 다르게 만들어 줍니다.",
      },
    ],
  },
  {
    slug: "minimal-tea-tools",
    category: "teawares",
    title: "미니멀 다도구",
    excerpt: "필요한 것만 남긴 차탁 위의 풍경.",
    date: "2026-04-28",
    cover: imgC,
    body: [
      {
        type: "p",
        text:
          "다관 하나, 잔 하나, 그리고 작은 차상. 그 이상은 두지 않습니다. 비움이 만든 자리에서 차의 향이 더 분명해집니다.",
      },
    ],
  },
  {
    slug: "celadon-teapot",
    category: "teawares",
    title: "청자 다관",
    excerpt: "비취빛 표면을 따라 흐르는 차의 결.",
    date: "2026-04-20",
    cover: imgA,
    body: [
      {
        type: "p",
        text: "청자의 비취빛은 빛의 각도에 따라 다른 표정을 보입니다. 오후의 빛 아래서 가장 깊은 색을 띱니다.",
      },
    ],
  },
  {
    slug: "paulownia-tea-table",
    category: "teawares",
    title: "오동나무 차탁",
    excerpt: "결을 따라 손끝에 닿는 따뜻함.",
    date: "2026-04-15",
    cover: imgB,
    body: [
      {
        type: "p",
        text: "오동나무는 가볍고 부드럽습니다. 시간이 지날수록 손때가 결을 따라 스며들어 차탁이 사람을 기억합니다.",
      },
    ],
  },
  {
    slug: "tetsuyu-teapot",
    category: "teawares",
    title: "철유 다관",
    excerpt: "묵직한 철유의 깊은 어둠과 광택.",
    date: "2026-04-10",
    cover: imgC,
    body: [
      {
        type: "p",
        text: "철유 유약 특유의 검은 광택은 빛을 빨아들이는 듯합니다. 무게감이 손에 안정감을 줍니다.",
      },
    ],
  },
  {
    slug: "first-flush-2026",
    category: "tea-log",
    title: "올해의 햇차, 첫 우림",
    excerpt: "이른 새벽 딴 잎의 풋풋함이 그대로 남아있다.",
    date: "2026-04-29",
    cover: imgB,
    meta: [
      { label: "Tea", value: "Korean Sejak · 세작" },
      { label: "Water", value: "75°C / 80ml" },
      { label: "Steep", value: "60s · 45s · 30s" },
    ],
    body: [
      {
        type: "p",
        text:
          "올해 첫 햇차를 받는 날은 늘 설렙니다. 봉투를 열자 풀냄새와 단내가 함께 올라옵니다.",
      },
      { type: "h2", text: "첫 잔의 인상" },
      {
        type: "p",
        text:
          "75도의 물에 60초. 첫 잔은 풋풋하고 가볍습니다. 두 번째 잔에서 단맛이 가장 또렷하게 올라왔습니다.",
      },
      { type: "quote", text: "차는 계절을 마시는 일이라는 말을, 햇차에서 가장 또렷하게 느낍니다." },
    ],
  },
  {
    slug: "rainy-baekho",
    category: "tea-log",
    title: "비 오는 날의 백호은침",
    excerpt: "흐린 빛 아래 은빛 솜털이 도는 잔.",
    date: "2026-04-22",
    cover: imgA,
    body: [
      {
        type: "p",
        text:
          "비 내리는 오후엔 백호은침이 어울립니다. 잔잔한 단맛이 빗소리와 어울려 오래 남습니다.",
      },
    ],
  },
  {
    slug: "autumn-puer",
    category: "tea-log",
    title: "가을 보이차의 깊이",
    excerpt: "차의 두께가 계절과 함께 깊어진다.",
    date: "2026-04-05",
    cover: imgC,
    body: [
      {
        type: "p",
        text: "오래된 보이차는 가을의 공기와 잘 맞습니다. 두 번째 잔부터 향이 깊게 가라앉습니다.",
      },
    ],
  },
  {
    slug: "tea-storage",
    category: "notes",
    title: "차 보관에 관한 단상",
    excerpt: "습기·빛·시간을 다루는 작은 규칙들.",
    date: "2026-04-15",
    cover: imgB,
    body: [
      {
        type: "p",
        text:
          "차는 살아있는 재료에 가깝습니다. 빛과 습기를 피하고, 향이 강한 것에서 멀리 두는 것이 가장 기본입니다.",
      },
      { type: "h2", text: "세 가지 원칙" },
      { type: "p", text: "1) 어둠. 2) 건조. 3) 무취. 이 셋만 지켜도 차는 오래 본래의 향을 지킵니다." },
    ],
  },
  {
    slug: "season-and-tea",
    category: "notes",
    title: "계절과 차",
    excerpt: "절기마다 손이 가는 차가 달라진다.",
    date: "2026-03-21",
    cover: imgA,
    body: [
      {
        type: "p",
        text: "춘분에는 햇녹차, 입추에는 우롱, 동지에는 오래된 보이차. 절기는 작은 안내자입니다.",
      },
    ],
  },
  {
    slug: "quiet-table",
    category: "notes",
    title: "조용한 차탁의 가치",
    excerpt: "비워둔 자리가 차를 더 또렷하게 한다.",
    date: "2026-03-02",
    cover: imgC,
    body: [
      {
        type: "p",
        text: "차탁에 무언가를 더할 때마다 차는 조금씩 흐려집니다. 가장 좋은 차탁은 가장 비어있는 차탁입니다.",
      },
    ],
  },
];

export function postsByCategory(c: Category) {
  return POSTS.filter((p) => p.category === c).sort((a, b) => b.date.localeCompare(a.date));
}

export function recentPosts(n = 6) {
  return [...POSTS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, n);
}

export function findPost(category: Category, slug: string) {
  return POSTS.find((p) => p.category === category && p.slug === slug);
}

export function adjacentPosts(category: Category, slug: string) {
  const list = postsByCategory(category);
  const i = list.findIndex((p) => p.slug === slug);
  return { prev: list[i + 1], next: list[i - 1] };
}

export function formatDate(iso: string) {
  return iso.replaceAll("-", "/");
}

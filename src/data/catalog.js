const colors = ["blue", "pink", "green", "yellow"];
const categories = ["デザイン", "開発", "写真", "マーケティング"];

export const products = Array.from({ length: 32000 }, (_, index) => ({
  id: index + 1,
  name: `${categories[index % categories.length]}素材 ${String(index + 1).padStart(5, "0")}`,
  color: colors[index % colors.length],
  price: 1000 + ((index * 137) % 19000),
  score: (index * 97) % 100,
}));

export const people = Array.from({ length: 28000 }, (_, index) => {
  const familyNames = ["佐藤", "鈴木", "高橋", "田中", "伊藤", "渡辺"];
  const givenNames = ["葵", "蓮", "結衣", "湊", "陽菜", "悠真"];
  return {
    id: index + 1,
    name: `${familyNames[index % familyNames.length]} ${givenNames[(index * 5) % givenNames.length]} ${index + 1}`,
    team: categories[index % categories.length],
  };
});

export const articles = [
  {
    id: "aurora",
    category: "CSS",
    title: "CSSでつくるオーロラのグラデーション",
    description: "複数のグラデーションを重ね、奥行きのある背景を作ります。",
    color: "violet",
  },
  {
    id: "motion",
    category: "Animation",
    title: "自然に見えるUIモーションの基本",
    description: "時間とイージングを調整して、操作に反応する動きを設計します。",
    color: "blue",
  },
  {
    id: "accessibility",
    category: "Accessibility",
    title: "フォームを使いやすくする小さな工夫",
    description: "ラベル、エラー表示、フォーカス状態を見直します。",
    color: "green",
  },
];

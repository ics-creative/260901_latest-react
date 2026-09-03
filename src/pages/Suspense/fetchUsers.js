import icon1 from "../../images/icon_1.jpg";
import icon2 from "../../images/icon_2.jpg";
import icon3 from "../../images/icon_3.jpg";
import icon4 from "../../images/icon_4.jpg";
import icon5 from "../../images/icon_5.jpg";
import icon6 from "../../images/icon_6.jpg";
import icon7 from "../../images/icon_7.jpg";
import icon8 from "../../images/icon_8.jpg";
import { delayedPromise } from "../../logics/delayedPromise";

export const users = [
  {
    id: 1,
    name: "Misaki Sato",
    role: "Designer",
    address: "2-8-1 Shibuya, Tokyo",
    phone: "+81 3 5550 1201",
    branch: "Tokyo",
    image: icon1,
  },
  {
    id: 2,
    name: "Jonathan Buyers",
    role: "Engineer",
    address: "725 Spring Street, Los Angeles",
    phone: "+1 213 555 0142",
    branch: "Los Angeles",
    image: icon2,
  },
  {
    id: 3,
    name: "Dae Seok Lee",
    role: "Director",
    address: "41 Teheran-ro, Seoul",
    phone: "+82 2 555 0183",
    branch: "Seoul",
    image: icon3,
  },
  {
    id: 4,
    name: "Emily Carter",
    role: "Product Manager",
    address: "18 Clerkenwell Road, London",
    phone: "+44 20 7946 0244",
    branch: "London",
    image: icon4,
  },
  {
    id: 5,
    name: "Carlos Ramirez",
    role: "UX Researcher",
    address: "63 Calle de Alcala, Madrid",
    phone: "+34 91 555 0325",
    branch: "Madrid",
    image: icon5,
  },
  {
    id: 6,
    name: "Aisha Khan",
    role: "Frontend Engineer",
    address: "12 Robinson Road, Singapore",
    phone: "+65 6555 0466",
    branch: "Singapore",
    image: icon6,
  },
  {
    id: 7,
    name: "Lucas Martin",
    role: "Photographer",
    address: "27 Rue de Charonne, Paris",
    phone: "+33 1 55 50 57 07",
    branch: "Paris",
    image: icon7,
  },
  {
    id: 8,
    name: "Olivia Brown",
    role: "Marketing Strategist",
    address: "84 George Street, Sydney",
    phone: "+61 2 5550 0688",
    branch: "Sydney",
    image: icon8,
  },
];

const articles = [
  {
    id: 1,
    title: "Designing Calm Interfaces for Busy People",
    summary:
      "A practical guide to reducing visual noise, clarifying priorities, and helping people finish common tasks with less effort.",
  },
  {
    id: 2,
    title: "How Small Feedback Signals Build User Trust",
    summary:
      "Thoughtful status messages and immediate feedback can make uncertain interactions feel predictable, responsive, and reliable.",
  },
  {
    id: 3,
    title: "Building Resilient Frontend Systems",
    summary:
      "Learn how clear boundaries, recoverable states, and focused components help applications remain stable as features grow.",
  },
  {
    id: 4,
    title: "A Better Process for Product Discovery",
    summary:
      "Short research cycles can reveal customer needs early and keep teams from investing heavily in the wrong solution.",
  },
  {
    id: 5,
    title: "Writing Useful Interface Copy",
    summary:
      "Simple language, specific actions, and consistent terminology help people understand a product without extra explanation.",
  },
  {
    id: 6,
    title: "Practical Accessibility for Everyday Projects",
    summary:
      "Start with semantic structure, keyboard support, and visible focus states to improve experiences for a wider audience.",
  },
  {
    id: 7,
    title: "Making Remote Collaboration More Visible",
    summary:
      "Shared decisions, concise updates, and clear ownership reduce repeated work across teams in different time zones.",
  },
  {
    id: 8,
    title: "Photography That Supports the Story",
    summary:
      "Choose composition, lighting, and details that reinforce the message instead of treating imagery as decoration alone.",
  },
  {
    id: 9,
    title: "Measuring What Matters in Digital Products",
    summary:
      "Connect product metrics to real user outcomes so that dashboards guide decisions instead of merely reporting activity.",
  },
  {
    id: 10,
    title: "Creating a Sustainable Design System",
    summary:
      "A useful design system balances reusable foundations with enough flexibility for teams to solve new interface problems.",
  },
  {
    id: 11,
    title: "Planning Content for a Global Audience",
    summary:
      "Flexible layouts and translation-aware writing make it easier to deliver clear experiences across languages and regions.",
  },
];

/**
 * ユーザー一覧を取得します。
 */
export const fetchUsers = () => delayedPromise(users, 800);

/**
 * 指定のユーザーを取得します。
 *
 * @param {number} userId
 */
export const fetchUser = (userId) =>
  delayedPromise(
    users.find((user) => user.id === userId),
    500,
  );

/**
 * 指定のユーザーの関連記事を取得します。
 *
 * @param {number} userId
 */
export const fetchArticles = (userId) => {
  const offset = Math.floor(Math.random() * articles.length) + userId;
  const selectedArticles = Array.from(
    { length: 2 },
    (_, index) => articles[(offset + index) % articles.length],
  );

  return delayedPromise(selectedArticles, 1200);
};

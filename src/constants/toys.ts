import { Toys } from "@/types/toys";
import {
  Box,
  Earth,
  GraduationCap,
  Info,
  PartyPopper,
  Rotate3d,
  Sprout,
} from "lucide-react";

const TOYS: Toys = {
  about: {
    title: "About",
    description: "このサイトについて",
    link: "/about",
    Icon: Info,
  },
  helloWorld: {
    title: "Hello World",
    description: "テスト用ページ",
    link: "/hello-world",
    Icon: Earth,
  },
  fizzBuzz: {
    title: "Fizz Buzz",
    description: "よくあるやつ",
    link: "/fizz-buzz",
    Icon: GraduationCap,
  },
  euclideanAlgorithm: {
    title: "ユークリッドの互除法",
    description: "2 つの自然数について最大公約数を求める",
    link: "/euclidean-algorithm",
    Icon: GraduationCap,
  },
  nabeatsuAssessmenter: {
    title: "ナベアツ判定機",
    description: "「3 の倍数である」または「3 を含む桁が存在する」か評価する",
    link: "/nabeatsu-assessmenter",
    Icon: GraduationCap,
  },
  congratsButton: {
    title: "おめでとうボタン",
    description: "おめでたいときに",
    link: "/congrats-button",
    Icon: PartyPopper,
  },
  modane3d: {
    title: "もだねちゃん 3D ビューワー",
    description: "もだねちゃんを眺めまわそう",
    link: "/modane-3d-viewer",
    Icon: Box,
  },
  deviceOrientation: {
    title: "傾き検知サンプル集",
    description: "デバイスの方向を取得して描画してみる",
    link: "/device-orientation",
    Icon: Rotate3d,
  },
  etrianCalendar: {
    title: "世界樹の暦",
    description: "今月は何ノ月？",
    link: "/etrian-calendar",
    Icon: Sprout,
  },
};

export { TOYS };

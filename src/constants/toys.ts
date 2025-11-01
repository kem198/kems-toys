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

const TOYS: Toys = [
  {
    title: "About",
    description: "このサイトについて",
    link: "/about",
    icon: Info,
  },
  {
    title: "Hello World",
    description: "テスト用ページ",
    link: "/hello-world",
    icon: Earth,
  },
  {
    title: "Fizz Buzz",
    description: "よくあるやつ",
    link: "/fizz-buzz",
    icon: GraduationCap,
  },
  {
    title: "ユークリッドの互除法",
    description: "2 つの自然数について最大公約数を求める",
    link: "/euclidean-algorithm",
    icon: GraduationCap,
  },
  {
    title: "ナベアツ判定機",
    description: "「3 の倍数である」または「3 を含む桁が存在する」か評価する",
    link: "/nabeatsu-assessmenter",
    icon: GraduationCap,
  },
  {
    title: "おめでとうボタン",
    description: "おめでたいときに",
    link: "/congrats-button",
    icon: PartyPopper,
  },
  {
    title: "もだねちゃん 3D ビューワー",
    description: "もだねちゃんを眺めまわそう",
    link: "/modane-3d-viewer",
    icon: Box,
  },
  {
    title: "傾き検知サンプル集",
    description: "デバイスの方向を取得して描画してみる",
    link: "/device-orientation",
    icon: Rotate3d,
  },
  {
    title: "冒険者お誕生日台帳",
    description: "君は仲間を登録してもいいし、しなくてもいい",
    link: "/etrian-registry",
    icon: Sprout,
  },
];

export { TOYS };

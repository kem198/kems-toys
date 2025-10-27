import { Toys } from "@/types/toys";
import {
  Award,
  Box,
  Calculator,
  CheckCircle,
  FastForward,
  Globe,
  Info,
  Smartphone,
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
    Icon: Globe,
  },
  fizzBuzz: {
    title: "Fizz Buzz",
    description: "よくあるやつ",
    link: "/fizz-buzz",
    Icon: FastForward,
  },
  euclideanAlgorithm: {
    title: "ユークリッドの互除法",
    description: "2 つの自然数について最大公約数を求める",
    link: "/euclidean-algorithm",
    Icon: Calculator,
  },
  nabeatsuAssessmenter: {
    title: "ナベアツ判定機",
    description: "「3 の倍数である」または「3 を含む桁が存在する」か評価する",
    link: "/nabeatsu-assessmenter",
    Icon: CheckCircle,
  },
  congratsButton: {
    title: "おめでとうボタン",
    description: "おめでたいときに",
    link: "/congrats-button",
    Icon: Award,
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
    Icon: Smartphone,
  },
};

export { TOYS };

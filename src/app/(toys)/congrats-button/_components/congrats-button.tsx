"use client";

import { EmojiPicker } from "@/components/atoms/emoji-picker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import emojiRegex from "emoji-regex";
import JSConfetti from "js-confetti";
import { useEffect, useState } from "react";

const CongratsButton = () => {
  /**
   * confetti インスタンス用の変数とセッターを定義する
   *
   * new JSConfetti() はクライアント側で一度だけ呼ぶ必要があるが
   * useEffect() の中で生成するとインスタンスへスコープ外からアクセスできないため
   */
  const [confetti, setConfetti] = useState<JSConfetti | undefined>(undefined);

  // レンダリング時に一度だけ実行する
  useEffect(() => {
    // js-confettiのインスタンスを生成して confetti へセットする
    const instance = new JSConfetti();
    setConfetti(instance);
  }, []);

  // 絵文字入力用フォームの変数とセッターを定義
  const [emojiFormText, setEmojiFormText] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmojiFormText(event.target.value);
  };

  // ボタンクリック時に呼ばれる処理
  const showConfetti = () => {
    // confetti が undefined でないときのみ後続処理を実行する
    if (!confetti) {
      return;
    }

    // 絵文字のみを取り出す正規表現
    const emojiRe = emojiRegex();

    /**
     * フォームへ入力された絵文字を評価する
     *
     * 真であればスプレッド構文で 1 文字ずつ配列化して addConfetti() へオブジェクトとして渡す
     * 偽であれば引数なしで実行する
     *
     * https://qiita.com/sounisi5011/items/aa2d747322aad4850fe7
     * https://github.com/loonywizard/js-confetti?tab=readme-ov-file#customise-confetti
     */
    const emojisText = emojiFormText.match(emojiRe);
    if (emojisText) {
      confetti.addConfetti({ emojis: [...emojisText] });
    } else {
      confetti.addConfetti();
    }
  };

  return (
    <div>
      <div className="container my-8 flex w-fit flex-col gap-4 max-lg:mx-auto">
        <Button onClick={showConfetti}>🎉 Congrats!</Button>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">好きな絵文字でお祝いしよう</span>
            </div>
            <div className="flex gap-2">
              <Input
                type="text"
                value={emojiFormText}
                onChange={handleChange}
              />
              <div>
                <EmojiPicker setText={setEmojiFormText} buttonIcon="🥳" />
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export { CongratsButton };

"use client";

import japaneseEmojiData from "emoji-picker-react/dist/data/emojis-ja";
import EmojiPickerReact, { type EmojiClickData } from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";

interface EmojiPickerProps {
  setText: React.Dispatch<React.SetStateAction<string>>;
  buttonIcon: string;
}

function EmojiPicker({ setText, buttonIcon }: EmojiPickerProps) {
  // 絵文字ピッカーの表示を切り替える変数とセッターを定義
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeWhenClickingOutside = (event: MouseEvent) => {
      if (!pickerRef.current?.contains(event.target as Node)) {
        setShowEmojiPicker(false);
      }
    };

    if (showEmojiPicker) {
      document.addEventListener("mousedown", closeWhenClickingOutside);
    }

    return () => {
      document.removeEventListener("mousedown", closeWhenClickingOutside);
    };
  }, [showEmojiPicker]);

  // 絵文字ピッカーの表示状態をトグルする関数
  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  // 選択された絵文字を親コンポーネントのテキストへ追加する関数
  const addSelectedEmojiToText = (selectedEmoji: EmojiClickData) => {
    setText((prevText) => `${prevText}${selectedEmoji.emoji}`);
  };

  return (
    <div ref={pickerRef} className="relative">
      {/* 絵文字ピッカーの表示を切り替えるボタン */}
      <Button
        variant="secondary"
        size="icon"
        className="rounded-full"
        onClick={toggleEmojiPicker}
      >
        {buttonIcon}
      </Button>
      {/* showEmoji の条件付きで絵文字ピッカーをレンダリングする */}
      {showEmojiPicker && (
        <div className="absolute max-lg:right-0">
          <EmojiPickerReact
            emojiData={japaneseEmojiData}
            onEmojiClick={addSelectedEmojiToText}
            className="mt-2"
          />
        </div>
      )}
    </div>
  );
}

export { EmojiPicker };

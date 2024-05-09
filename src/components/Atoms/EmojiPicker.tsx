'use client';

import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { useState } from 'react';

interface EmojiPickerProps {
  setText: React.Dispatch<React.SetStateAction<string>>;
  buttonIcon: string;
}

interface EmojiData {
  id: string;
  name: string;
  native: string;
  unified: string;
  keywords: string[];
  shortcodes: string[];
}

export default function EmojiPicker({ setText, buttonIcon }: EmojiPickerProps) {
  // 絵文字ピッカーの表示を切り替える変数とセッターを定義
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  // 絵文字ピッカーの表示状態をトグルする関数
  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  // 選択された絵文字を親コンポーネントのテキストへ追加する関数
  const addSelectedEmojiToText = (selectedEmoji: EmojiData) => {
    setText((prevText) => `${prevText}${selectedEmoji.native}`);
  };

  return (
    <div className="relative">
      {/* 絵文字ピッカーの表示を切り替えるボタン */}
      <button
        type="button"
        className="btn btn-circle text-lg"
        onClick={toggleEmojiPicker}
      >
        {buttonIcon}
      </button>
      {/* showEmoji の条件付きで絵文字ピッカーをレンダリングする */}
      {showEmojiPicker && (
        <div className="absolute max-lg:right-0">
          <Picker
            data={data}
            onEmojiSelect={addSelectedEmojiToText}
            onClickOutside={toggleEmojiPicker}
            className="mt-2"
          />
        </div>
      )}
    </div>
  );
}

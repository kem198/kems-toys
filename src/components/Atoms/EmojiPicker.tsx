'use client';

import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { useState } from 'react';

interface EmojiPickerProps {
  setter: React.Dispatch<React.SetStateAction<string>>;
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

export default function EmojiPicker({ setter, buttonIcon }: EmojiPickerProps) {
  // 絵文字ピッカーの表示を切り替える変数とセッターを定義
  const [showEmoji, setShowEmoji] = useState(false);

  // EmojiData インターフェースを使用して型を修正
  const onEmojiSelect = (EmojiData: EmojiData) => {
    // 選択された絵文字を親コンポーネントのテキストへ追加する
    setter((prevText) => `${prevText}${EmojiData.native}`);
  };

  return (
    <div className="relative">
      {/* 絵文字ピッカーの表示を切り替えるボタン */}
      <button
        type="button"
        className="btn btn-circle text-lg"
        onClick={() => setShowEmoji(!showEmoji)}
      >
        {buttonIcon}
      </button>
      {/* showEmoji の条件付きで絵文字ピッカーをレンダリングする */}
      {showEmoji && (
        <div className="absolute max-lg:right-0">
          <Picker
            data={data}
            onEmojiSelect={onEmojiSelect}
            className="mt-2 w-auto"
          />
        </div>
      )}
    </div>
  );
}

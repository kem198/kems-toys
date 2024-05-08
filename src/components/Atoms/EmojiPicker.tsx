'use client';

import Picker, { PickerProps } from 'emoji-picker-react';
import { useState } from 'react';

export default function EmojiPicker({
  setter,
}: {
  setter: (text: string) => void;
}) {
  // 絵文字ピッカーの表示を切り替える変数とセッターを定義
  const [showEmoji, setShowEmoji] = useState(false);

  // 絵文字がクリックされたときに呼ばれる関数
  const onEmojiClick: PickerProps['onEmojiClick'] = (emojiObject) => {
    // 選択された絵文字を親コンポーネントのテキストへ追加する
    setter((prevText) => prevText + ` ${emojiObject.emoji}`);
  };

  return (
    <div className="relative">
      {/* 絵文字ピッカーの表示を切り替えるボタン */}
      <button
        type="button"
        className="btn btn-circle text-lg"
        onClick={() => setShowEmoji(!showEmoji)}
      >
        🥰
      </button>
      {/* showEmoji の条件付きで絵文字ピッカーをレンダリングする */}
      {showEmoji && (
        <div className="absolute max-lg:right-0">
          <Picker onEmojiClick={onEmojiClick} className="mt-2" />
        </div>
      )}
    </div>
  );
}

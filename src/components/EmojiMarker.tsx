import { EmojiAddButton } from "./EmojiAddButton";
import { EmojiWrap } from "./EmojiWrap";
import { SimpleMarker } from "./SimpleMarker";

type EmojiMarkerProps = {
  latitude: number;
  longitude: number;
  name: string;
  emoji_reactions: any;
};

export const EmojiMarker: React.FC<EmojiMarkerProps> = ({
  latitude,
  longitude,
  name,
  emoji_reactions,
}) => {
  return (
    <SimpleMarker latitude={latitude} longitude={longitude}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            cursor: "pointer",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(2px)",
            color: "white",
            fontFamily: "monospace",
            fontSize: "2em",
            padding: "8px",
            borderRadius: "6px",
            zIndex: 1000,
          }}
        >
          {name}
        </div>
        <div
          style={{
            cursor: "pointer",
            display: "flex",
            fontFamily: "sans-serif, emoji",
            padding: "6px",
            height: "auto",
          }}
        >
          {emoji_reactions &&
            Object.keys(emoji_reactions).map((emoji) => {
              return <EmojiWrap emoji={emoji} count={emoji_reactions[emoji]} />;
            })}
          <EmojiAddButton />
        </div>
      </div>
    </SimpleMarker>
  );
};

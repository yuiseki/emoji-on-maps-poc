export const EmojiAddButton: React.FC = () => {
  return (
    <div
      className="emoji-wrap"
      style={{
        display: "flex",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        height: "2em",
        padding: "8px 8px 2px",
        marginRight: "4px",
        borderRadius: "6px",
        justifyContent: "center",
        zIndex: 50,
      }}
    >
      <span
        style={{
          fontSize: "1.4em",
          color: "white",
          fontWeight: "bold",
          paddingLeft: "2px",
        }}
      >
        +
      </span>
    </div>
  );
};

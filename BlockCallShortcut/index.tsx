import definePlugin from "@utils/types";

function blockCall(e: KeyboardEvent) {
    if (e.ctrlKey && e.code === "Quote") {
        e.preventDefault();
        e.stopPropagation();
    }
}

export default definePlugin({
    name: "BlockCallShortcut",
    description: "Prevent accidental calls by blocking Ctrl+'",
    authors: [{ name: "Rook", id: 447392077861355541n }],

    start() {
        window.addEventListener("keydown", blockCall, true);
    },

    stop() {
        window.removeEventListener("keydown", blockCall, true);
    }
});

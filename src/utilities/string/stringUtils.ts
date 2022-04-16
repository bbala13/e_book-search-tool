

export function normalizeTitle(title: string) {
    if (title[0] !== '"' && title[0] !== "'") return title;

    return title.slice(1, title.length - 1);
}

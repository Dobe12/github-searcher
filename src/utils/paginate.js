
export default function paginate(items, pageNumber, pageSize) {
    if (items && items.length === 0) {
        return [];
    }

    const startIndex = (pageNumber - 1) * pageSize
    return items.slice(startIndex, startIndex + pageSize)
}

export function truncateDescription(description, wordsCount) {
  if (description) {
    let words = description.split(" ");
    if (words.length > wordsCount) {
      words = words.slice(0, wordsCount);
      return words.join(" ") + "...";
    }
    return description;
  }
  return "";
}

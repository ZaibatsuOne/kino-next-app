export function stripHtmlTags(html: string) {
  html = html.replace(/&laquo;/g, "«");

  html = html.replace(/&raquo;/g, "»");

  return html.replace(/<\/?[^>]+(>|$)/g, "");
}

export default function HTMLViewer({ dangerousHTMLContent }: { dangerousHTMLContent: string }) {
  return (
    <div
      className="text-[.8125rem] font-yoon font-regular leading-8 "
      dangerouslySetInnerHTML={{ __html: dangerousHTMLContent }}
    />
  );
}

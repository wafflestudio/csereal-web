export default function HTMLViewer({ htmlContent }: { htmlContent: string }) {
  return (
    <div
      className="text-[.8125rem] font-yoon font-regular leading-8 "
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}

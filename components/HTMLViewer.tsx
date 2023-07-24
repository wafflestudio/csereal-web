interface HTMLViewerProps {
  htmlContent: string;
  margin?: string;
}

export default function HTMLViewer({ htmlContent, margin = '' }: HTMLViewerProps) {
  return (
    <div
      className={`
        text-[.8125rem] font-noto font-regular leading-8 ${margin}
        [&_a]:text-link [&_a]:underline 
        [&_li]:list-disc [&_li]:list-inside
        [&_p]:my-4
        `}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}

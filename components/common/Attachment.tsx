import Clip from '@/public/image/clip.svg';

interface AttachmentProps {
  files: {
    name: string;
    bytes: number;
    url: string;
  }[];
}

export default function Attachment({ files }: AttachmentProps) {
  return (
    <div className="relative flex flex-col gap-2 w-[40rem] mt-5 mb-6 px-4 py-3 bg-neutral-50 rounded-sm border border-neutral-200">
      {files.map((file, index) => {
        const kilobyte = Math.round(file.bytes / 100);
        return (
          <a key={index} className="text-xs font-normal" href={file.url} download>
            {file.name}({kilobyte / 10}KB)
          </a>
        );
      })}
      <Clip className="absolute top-[-1.5rem] right-3" />
    </div>
  );
}

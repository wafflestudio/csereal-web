import '@toast-ui/editor/dist/toastui-editor.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { Viewer } from '@toast-ui/react-editor';

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

interface Props {
  content: string;
}

export default function TuiViewer({ content }: Props) {
  return <>{content && <Viewer initialValue={content} usageStatistics={false} />}</>;
}

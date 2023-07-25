import '@toast-ui/editor/dist/toastui-editor.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { Editor } from '@toast-ui/react-editor';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/i18n/ko-kr';

interface Props {
  content: string;
  editorRef: React.MutableRefObject<any>;
}

const TuiEditor = ({ content, editorRef }: Props) => {
  const toolbarItems = [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr', 'quote'],
    ['ul', 'ol', 'task', 'indent', 'outdent'],
    ['table', 'image', 'link'],
    ['code', 'codeblock'],
  ];

  return (
    <>
      {editorRef && (
        <Editor
          ref={editorRef}
          initialValue={content ? content : ' '}
          initialEditType="wysiwyg"
          hideModeSwitch={true}
          height="60%"
          minHeight="350px"
          language="ko-KR"
          usageStatistics={false}
          toolbarItems={toolbarItems}
          useCommandShortcut={true}
          plugins={[colorSyntax]}
          extendedAutolinks={true}
        />
      )}
    </>
  );
};

export default TuiEditor;

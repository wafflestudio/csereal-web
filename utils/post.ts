import SunEditorCore from 'suneditor/src/lib/core';

// https://github.com/JiHong88/SunEditor/issues/199
export const isContentEmpty = (editor: SunEditorCore) => {
  const wysiwyg = editor.core.context.element.wysiwyg;

  return (
    editor.util.onlyZeroWidthSpace(wysiwyg.textContent ?? '') &&
    !wysiwyg.querySelector('.se-component, pre, blockquote, hr, li, table, img, iframe, video') &&
    (wysiwyg.textContent?.match(/\n/g) || '').length <= 1
  );
};

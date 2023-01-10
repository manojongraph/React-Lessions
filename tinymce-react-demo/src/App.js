import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
export default function App() {
  const editorRef = useRef(null);
  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //   }
  // };
  const editChangeHandler = (e) => {
    const enterDiscription = e.target.getContent({ format: 'text' });
    // remoteCtx.setDiscription(enterDiscription);
  };
  const description = (
    (state) => state?.interviewDetails?.data?.description
);
const initialText = 'hi';

  return (
    <>

<Editor
          onInit={(evt, editor) => (editorRef.current = editor)}
          apiKey='x1wrpsgrwllwt2ee1n8fbcchlkrjhibia9ygshwvofye2qsq'
          onChange={editChangeHandler}
          initialValue={description ? description :initialText }
          init={{
            height: 200,
            menubar: false,
            advlist_bullet_styles: 'circle',
            advlist_number_styles: 'default',
            selector: 'textarea',
            statusbar: false,
            setup: function (editor) {
              editor.ui.registry.addButton('myButton', {
                icon: 'editor_bold',
                onAction: function (_) {
                  editor.insertContent(
                    "&nbsp;<strong>It's my icon button!</strong>&nbsp;"
                  );
                },
              });
            },
            plugins: [
              'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
              'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
              'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
           ],
            toolbar:
              'numlist bullist  alignleft aligncenter ' +
              'bold italic underline| ',
            content_style:
              '.mce-content-body[data-mce-placeholder] { cursor: text; color: #a1a5ad; }' +
              ".mce-content-body { font-family: 'proxima-nova', sans-serif; color: #4a5162; line-height: 1.325;}" +
              'ol {list-style-type: none;counter-reset: level1;}' +
              "ol > li:before {content: counter(level1) '. ';counter-increment: level1;}" +
              'ol > li > ol {list-style-type: none;counter-reset: level2;}' +
              "ol > li > ol > li:before {content: counter(level1) '.' counter(level2) ' ';counter-increment: level2;}" +
              'ol > li > span {margin: 0 5px 0 -25px;}',
          }}
        />
        <hr/>
      {/* <Editor
        apiKey='x1wrpsgrwllwt2ee1n8fbcchlkrjhibia9ygshwvofye2qsq'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'lists advlist autolink link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar: 'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent alignleft| ' +
          'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      /> */}
    </>
  );
}

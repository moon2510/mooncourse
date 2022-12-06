import React from 'react';
import {
  EditorComposer,
  Editor,
  ToolbarPlugin,
  AlignDropdown,
  BackgroundColorPicker,
  BoldButton,
  CodeFormatButton,
  FloatingLinkEditor,
  FontFamilyDropdown,
  FontSizeDropdown,
  InsertDropdown,
  InsertLinkButton,
  ItalicButton,
  TextColorPicker,
  TextFormatDropdown,
  UnderlineButton,
  Divider,
} from 'verbum';

const CreateTopic = (props) => {

  const onSubmit = ()=>{
    const editorLesson = document.querySelector('.ContentEditable__root').innerHTML
    console.log(editorLesson);
    
  }

  return (
    <EditorComposer>
      <Editor witdh="100px" hashtagsEnabled={true} emojisEnabled={true}>
        <ToolbarPlugin defaultFontSize="20px" defaultBgColor="green">
          <FontFamilyDropdown />
          <FontSizeDropdown />
          <Divider />
          <BoldButton />
          <ItalicButton />
          <UnderlineButton />
          <CodeFormatButton />
          <InsertLinkButton />
          <TextColorPicker />
          <BackgroundColorPicker />
          <TextFormatDropdown />
          <Divider />
          <InsertDropdown enablePoll={true} />
          <Divider />
          <AlignDropdown />
         
        </ToolbarPlugin>
        
      </Editor>

      <button onClick= {() => onSubmit()}>Create Lesson</button>
    </EditorComposer>
  );
};

export default React.memo(CreateTopic);
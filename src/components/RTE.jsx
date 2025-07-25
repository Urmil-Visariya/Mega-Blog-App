import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import conf from '../conf/conf'
import { Controller } from 'react-hook-form'

function RTE({ name, control, label, defaultValue = '' }) {
  return (
    <div className='w-full'>
      {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey={conf.tinymceApiKey}
            initialValue={defaultValue}
init={{
  height: 500,
  menubar: true,
  plugins: [
    "image",
    "advlist",
    "autolink",
    "lists",
    "link",
    "charmap",
    "preview",
    "anchor",
    "searchreplace",
    "visualblocks",
    "code",
    "fullscreen",
    "insertdatetime",
    "media",
    "table",
    "help",
    "wordcount",
  ],
  toolbar:
    "undo redo | blocks | bold italic forecolor removeformat | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | image media link table | code preview fullscreen | help",
  content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
}}

            onEditorChange={onChange}
          />
        )}
      />

    </div>
  )
}

export default RTE
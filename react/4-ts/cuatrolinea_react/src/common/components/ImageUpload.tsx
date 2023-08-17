import React, { useRef } from "react"

export default function ImageUpload(props: {
  image: string
  onChange: (image: string) => void
}) {
  const fileInput = useRef<HTMLInputElement>(null)

  const imageClick = () => {
    // eslint-disable-next-line no-unused-expressions
    fileInput.current?.click()
  }

  const imageSelect = () => {
    const files = fileInput.current?.files
    if (files == null) {
      return
    }
    getBase64(files[0], (image) => {
      if (image && props.onChange) {
        props.onChange(image)
      }
    })
  }

  return (
    <div>
      <img src={props.image} alt="" height="100" onClick={imageClick} />
      <input
        type="file"
        ref={fileInput}
        className="upload"
        accept="*"
        onChange={imageSelect}
        style={{ display: "none" }}
      />
    </div>
  )
}

function getBase64(file: File, cb: (image: string) => void) {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => {
    cb(reader.result as string)
  }
}

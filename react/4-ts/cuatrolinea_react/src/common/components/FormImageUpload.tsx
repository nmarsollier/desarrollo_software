import React from "react"
import ErrorLabel from "./ErrorLabel"
import ImageUpload from "./ImageUpload"

export default function FromImageUpload(props: {
  picture: string
  name: string
  errorText: string | undefined
  onImageChanged: (image: string) => any
}) {
  return (
    <div className="form-group">
      <label>Profile Picture</label>
      <ImageUpload
        image={getPictureData(props.picture)}
        onChange={props.onImageChanged}
      />
      <ErrorLabel message={props.errorText} />
    </div>
  )
}

function getPictureData(data: string) {
  if (data && data.length > 0) {
    return data
  } else {
    return "/assets/profile.png"
  }
}
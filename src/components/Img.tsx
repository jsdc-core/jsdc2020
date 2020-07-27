import React from "react"
import { assetPrefix } from "~/constant/globalConfig"

export default ({ src, ...props }) => (
  <img src={`${assetPrefix}${src}`} alt={props.alt || ""} {...props} />
)

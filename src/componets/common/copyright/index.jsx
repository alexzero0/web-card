import { memo } from "react"

const year = new Date().getFullYear();
const Copyright = (props) => <span {...props}>&#169; Copyright</span>

export default memo(Copyright);
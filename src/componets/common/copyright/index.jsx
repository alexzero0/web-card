import { memo } from "react"

const year = new Date().getFullYear();
const Copyright = (props) => <span {...props}>&#169; Copyright {year}</span>

export default memo(Copyright);
import * as React from "react"
import Svg, { SvgProps, Path, Polyline, Circle, Line } from "react-native-svg"

function HelpIcon(props) {
    return (
        <Svg width={props.size}
            height={props.size} viewBox="0 0 24 24"
            fill="none" stroke={props.color} stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" class="feather feather-help-circle">
            <Circle cx="12" cy="12" r="10" />
            <Path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <Line x1="12" y1="17" x2="12.01" y2="17"/>       
        </Svg>
    )
}

export default HelpIcon
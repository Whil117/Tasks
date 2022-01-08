import dynamic from 'next/dynamic'
import { FC, useMemo } from 'react'
import styled from '@emotion/styled'

interface Styles {
	width?: string
	height?: string
	color?: string
	fill?: string
}

interface IProps {
	href?: string
	styles?: Styles
}

const SvgDynamicWrapper = styled.div<IProps>`
	svg {
		path {
			fill: ${({ styles }) => (styles && styles.fill) || 'black'};
		}
		width: ${props => props.styles?.width};
		height: ${props => props.styles?.height};
	}
	/* color: ${props => props.styles?.color}; */
`
const SvgDynamic: FC<IProps> = props => {
	const DynamicIcon = useMemo(
		() => dynamic(() => import(`../../../../public${props.href}.svg`)),
		[props.href]
	)

	if (!DynamicIcon) return null
	return (
		<SvgDynamicWrapper styles={props.styles}>
			<DynamicIcon />
		</SvgDynamicWrapper>
	)
}

export default SvgDynamic

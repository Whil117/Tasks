import { SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'

export const Wrapper = styled.div`
	margin: 0 0 0 150px;
	display: flex;
`
export const ButtonForm = styled.button`
	display: flex;
	${({ customStyle }: { customStyle?: SerializedStyles }) => customStyle}
`

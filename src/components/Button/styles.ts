import styled, { css } from 'styled-components'

export interface ButtonProps {
  variant: 'filled' | 'outlined' | 'tonal'
}
export const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0 1.5rem;
  height: 2.5rem;
  border-radius: 16px;

  ${({ theme, variant }) => css`
    background-color: ${variant} === 'filled' ? ${theme.colors.primary} : ${theme.colors.error};
  `}
`
/* 
export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;

  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED};
`
 */

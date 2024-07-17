import { LinkProps, useLocation } from 'react-router-dom'

import { StyledNavLink } from './styles'

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()

  return <StyledNavLink data-current={pathname === props.to} {...props} />
}

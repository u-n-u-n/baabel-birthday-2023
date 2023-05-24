import { ReactNode } from 'react'

import plusIcon from '../../assets/images/icon_plus.svg'

import { Wrapper, Icon, Text } from './styled'

const ICON_MAPPER = {
  plus: plusIcon,
}

interface ButtonProps {
  className?: string
  children: ReactNode
  icon?: keyof typeof ICON_MAPPER
}

const Button = ({ className, children, icon }: ButtonProps) => {
  return (
    <Wrapper className={className}>
      {icon ? <Icon src={ICON_MAPPER[icon]} alt={icon} /> : null}
      <Text>{children}</Text>
    </Wrapper>
  )
}

export default Button

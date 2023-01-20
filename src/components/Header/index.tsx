import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

import logoImg from '../../assets/images/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}

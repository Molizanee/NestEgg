import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width='50%'>Desenvolvimento de Site</td>
              <td width='50%'>
                <PriceHighLight variant='income'>R$ 1.200,00</PriceHighLight>
              </td>
              <td width='50%'>Venda</td>
              <td width='50%'>15/03/2024</td>
            </tr>
            <tr>
              <td width='50%'>Desenvolvimento de Site</td>
              <td width='50%'>
                <PriceHighLight variant='outcome'>- R$ 1.200,00</PriceHighLight>
              </td>
              <td width='50%'>Venda</td>
              <td width='50%'>15/03/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}

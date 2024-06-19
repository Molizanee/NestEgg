import { useContext } from 'react'
import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { currencyFormatter, dateFormatter } from '../../utils/formatter'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map(data => (
              <tr key={data.id}>
                <td width='50%'>{data.description}</td>
                <td width='50%'>
                  <PriceHighLight
                    variant={data.type === 'income' ? 'income' : 'outcome'}
                  >
                    {data.type === 'outcome' && '- '}
                    {currencyFormatter.format(data.price)}
                  </PriceHighLight>
                </td>
                <td width='50%'>{data.category}</td>
                <td width='50%'>{dateFormatter.format(new Date(data.date))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}

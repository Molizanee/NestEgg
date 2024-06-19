import { createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

export interface Transaction {
  id: number
  description: string
  price: number
  type: string
  category: string
  date: string
}

interface CreateTransactionInput {
  description: string
  type: string
  price: number
  category: string
}

interface TransactionContextType {
  transactions: Transaction[]
  getTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionContextType)

interface TransactionProviderProps {
  children: React.ReactNode
}

export const TransactionsProvider = ({
  children,
}: TransactionProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const getTransactions = async (query?: string) => {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'date',
        _order: 'desc',
        q: query,
      },
    })
    setTransactions(response.data)
  }

  async function createTransaction(data: CreateTransactionInput) {
    const { description, price, category, type } = data

    const response = await api.post('/transactions', {
      description,
      price,
      category,
      type,
      date: new Date(),
    })
    setTransactions(state => [response.data, ...state])
  }

  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, getTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

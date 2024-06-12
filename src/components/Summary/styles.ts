import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0rem 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${props => props.theme['gray-800']};
  padding: 1.5rem 2rem;
  border-radius: 6px;
  color: ${props => props.theme['gray-100']};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
  }

  &.highlight-background {
    background: ${props => props.theme['green-500']};
    color: ${props => props.theme.white};
  }

  ${props =>
    props.variant === 'green' &&
    css`
      background: ${props.theme['green-500']};
      color: ${props.theme.white};
    `}
`

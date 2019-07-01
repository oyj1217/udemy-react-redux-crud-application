const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

//アクションクリエーター
export const increment = () =>
  (
    {
      type: INCREMENT
    }
  )

export const decrement = () =>
  (
    {
      type: DECREMENT
    }
  )


type OrderPageProps = {
  params: { 
    category: string
   }
}

export default function OrderPage({ params } : OrderPageProps) {
  return (
    <div>{params.category}</div>
  )
}

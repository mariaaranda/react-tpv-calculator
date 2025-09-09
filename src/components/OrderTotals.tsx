import { useMemo, type Dispatch } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import type { OrderAction } from "../reducers/order-reducer"

type OrderTotalsProps = {
  order: OrderItem[],
  tip: number,
  dispatch: Dispatch<OrderAction>
}

export default function OrderTotals({order, tip, dispatch}: OrderTotalsProps) {
  
  const subtotalAmout = useMemo (() => 
    order.reduce((total, item) => 
    total + (item.quantity*item.price), 0), 
    [order]
  )
  // Para calculos pesados, usamos useMemo, si es poco, no es necesario:
  // const subtotalAmout = order.reduce((total, item) => total + (item.quantity * item.price), 0)
  // const tipAmout = subtotalAmout * tip
  // const totalAmount = subtotalAmout + tipAmout
  const tipAmout = useMemo(() => subtotalAmout * tip, [subtotalAmout, tip])
  const totalAmount = useMemo(() => subtotalAmout + tipAmout, [subtotalAmout, tipAmout])
  
  
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y propina:</h2>
        <p>Subtotal a pagar:  {''}
          <span className="font-bold">{formatCurrency(subtotalAmout)}</span>
        </p>
        <p>Propina:  {''}
          <span className="font-bold">{formatCurrency(tipAmout)}</span>
        </p>
        <p>Total a pagar:  {''}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>

      <button
        className="w-full bg-black p-3 uppercase text-white font-blod mt-10 disabled:opacity-10"
        disabled={totalAmount === 0}
        onClick={() => dispatch({type: 'save-order'}) }
      >
        Guardar Pedido
      </button>
    </>
  )
}


import { type OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import type { Dispatch } from "react"
import type { OrderAction } from "../reducers/order-reducer"

type OrderContentsProps = {
  order: OrderItem[],
  dispatch: Dispatch<OrderAction>
}

export default function OrderContents({order, dispatch} : OrderContentsProps) {
  return (
    <div>
      <h2 className='text-4xl font-black'>Consumo</h2>

      <div className="space-y-3 mt-5">      
          {order.map( item => (
            <div 
              key={item.id}
              className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b"
            >
              <div>
                <p>
                  {item.name} - {formatCurrency(item.price)}
                </p>
                <p className="font-black">
                  Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
              
              <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                onClick={() => dispatch({type: 'remove-item', payload: {id: item.id}})}
              >
                X
              </button>

            </div>
          ))}        
      </div>
    </div>
  )
}
import { useReducer } from 'react'
import MenuItem from './components/MenuItem'
import  { MenuItems } from './data/db'
import OrderContents from './components/OrderContents'
import TipPercentageForm from './components/TipPercentageForm'
import OrderTotals from './components/OrderTotals'
import { initialState, orderReducer } from './reducers/order-reducer'


function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas</h1>
       <p className="text-center">
          Proyecto en Vite + React + TS + Tailwind CSS<br />
          Uso de useReducer<br />
          Mejora de performance renderizando diferentes componentes<br />
          Uso de useMemo para calcular las cantidades
        </p>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div>
          <h2 className='text-4xl font-black'>Menú</h2>
          <div className='space-y-3 mt-10 mr-5'>
            {MenuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                dispatch={dispatch}
              />
            ))}
          </div>
        </div>
        <div className='border border-dashed border-slate-300 p-5 rounded-lg space-y-10'>
          {state.order.length > 0 ? (
            <>
              <OrderContents 
                order={state.order}
                dispatch={dispatch}
              />
              <TipPercentageForm
                dispatch={dispatch}
                tip={state.tip}
              />
              <OrderTotals 
                order={state.order}
                tip={state.tip}
                dispatch={dispatch}
              />
            </>
          ) :
            <p className="text-center">La orden está vacía</p>  
          }
        </div>
      </main>
    </>
  )
}

export default App

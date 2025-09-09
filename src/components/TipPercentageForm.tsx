import { tipOptions } from "../data/db"
import type { Dispatch } from "react"
import type { OrderAction } from "../reducers/order-reducer"

type TipPercentageFormProps = {
	dispatch: Dispatch<OrderAction>,
	tip: number
}

export default function TipPercentageForm({dispatch, tip} : TipPercentageFormProps) {
	return (
		<div>
			<h3 className="font-black text-2xl">Propina</h3>

			<form>
				{tipOptions.map(tipOption =>(
					<div key={tipOption.id} className="flex gap-2">
						<label htmlFor={tipOption.label}>{tipOption.label}</label>
						<input 
							id={tipOption.id}
							type="radio"
							name="tip"
							value={tipOption.value}
							onChange={ e => dispatch({type: 'add-tip', payload: {value: +e.target.value}})}
							checked={tipOption.value === tip}
						/>
					</div>
				))}
				<div>

				</div>

			</form>
		</div>
	)
}

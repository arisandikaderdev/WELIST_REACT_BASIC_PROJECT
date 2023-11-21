import { useState } from 'react'
import AlertDelete from './AlertDelete'
import Item from './Item'

function ItemList({ items, onChecklist, onDelete, onChange }) {
	const [triggerAlertDelete, setTriggerAlertDelete] = useState(false)
	const [itemId, setItemId] = useState()

	const list = items.map((item) => (
		<Item
			key={item.id}
			item={item}
			onChecklist={onChecklist}
			onDelete={(id) => {
				setTriggerAlertDelete(true)
				setItemId(id)
			}}
			onChange={onChange}
		/>
	))
	return (
		<>
			<ul className="mx-auto mt-4 flex w-[90%] max-w-screen-lg flex-col gap-4">{list}</ul>
			{triggerAlertDelete && (
				<AlertDelete
					onClose={() => setTriggerAlertDelete(false)}
					onDelete={() => {
						onDelete(itemId)
						setTriggerAlertDelete(false)
					}}
				/>
			)}
		</>
	)
}

export default ItemList

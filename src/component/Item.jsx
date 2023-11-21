import { useEffect, useState } from 'react'
import EditItem from './EditItem'
import ShowItem from './ShowItem'

function Item({ item, onChecklist, onDelete, onChange }) {
	const [isEdit, setIsEdit] = useState(false)

	function hangleChangeItem(text) {
		onChange({
			id: item.id,
			name: text,
			isDone: item.isDone
		})

		setIsEdit(false)
	}

	return (
		<li className="flex items-center gap-4">
			{!isEdit && (
				<ShowItem
					item={item}
					onDelete={onDelete}
					onChecklist={onChecklist}
					onEdit={() => setIsEdit(true)}
				/>
			)}

			{isEdit && <EditItem item={item} onChangeItem={hangleChangeItem} />}
		</li>
	)
}

export default Item

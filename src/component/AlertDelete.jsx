import Button from './Button'
import DialogBox from './DialogBox'

function AlertDelete({ onClose, onDelete }) {
	return (
		<DialogBox>
			<div>
				<p className="text-secondary text-center text-xl font-semibold">
					Are You sure to Delete it{' '}
				</p>
				<div className="mt-4 flex justify-center gap-4">
					<Button
						classname="bg-red"
						onClick={() => {
							onDelete()
						}}
					>
						Yes Delete It
					</Button>
					<Button classname="bg-primary" onClick={onClose}>
						No
					</Button>
				</div>
			</div>
		</DialogBox>
	)
}

export default AlertDelete

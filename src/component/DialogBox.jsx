import { Children } from 'react'

function DialogBox({ children }) {
	return (
		<div className="bg-fullscreen">
			<div className=" border-1 border-secondary mx-auto mt-10 w-[20rem] rounded-md border-solid bg-white px-4 py-4 md:w-[30rem]">
				{children}
			</div>
		</div>
	)
}

export default DialogBox

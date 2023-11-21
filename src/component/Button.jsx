function Button({ children, classname, onClick, disabled }) {
	return (
		<button className={classname} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	)
}

export default Button

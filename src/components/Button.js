import React from 'react'


export default function Button({onAdd}) {
	return (
		<button onClick={onAdd}>
			Agregar al carrito
		</button>
	)
}
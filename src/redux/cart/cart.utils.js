//tem o proposito de adicionar items ao cart, verificando se já existe o item a ser adicionado no cart, se existir só aumenta a quantitade, caso não exista, adicionamos o item com quantidade inicial de 1

//recebe como primeiro paramentro, o array de items do state, e como segundo, o item que será adicionado ao array
export const addItemToCart = (cartItems, cartItemToAdd) => {
	//se ao pecorrer o array encontrar um item com id igual ao item que está sendo adicionado, retorna esse item, se não, retorna undefined
	const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);

	if (existingCartItem) {
		//pecorre o array, para cada item com id igual, retorna um novo um objeto com a propriedade quantity + 1, se não for igual retorna o item sem modificação alguma
		return cartItems.map(item =>
			item.id === cartItemToAdd.id
				? { ...item, quantity: item.quantity + 1 }
				: item
		);
	}

	//uma vez que a função rode, ou seja, um item seja adicionado ao cart, o array retorna os items existentes, mais o item adicionado com a prop de quantity: 1.
	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

//verificar se a quantitade é 1, se for, remover o item de checkout, se houver mais que 1 item, diminuir a quantidade
export const removeItem = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(item => item.id === cartItemToRemove.id);

	if(existingCartItem.quantity === 1){
		return cartItems.filter( item => item.id !== cartItemToRemove.id);
	}

	return cartItems.map(item => 
		item.id === cartItemToRemove.id ?
		{...item, quantity: item.quantity - 1} 
		: item
		)
}

const INITIAL_STATE = {
	sections: [
		{
			title: "chapéus",
			imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
			id: 1,
			linkUrl: "shop/chapeus"
		},
		{
			title: "jaquetas",
			imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
			id: 2,
			linkUrl: "shop/jaquetas"
		},
		{
			title: "sapatos",
			imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
			id: 3,
			linkUrl: "shop/sapatos"
		},
		{
			title: "para elas",
			imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
			size: "large",
			id: 4,
			linkUrl: "shop/mulheres"
		},
		{
			title: "para eles",
			imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
			size: "large",
			id: 5,
			linkUrl: "shop/homens"
		}
	]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default directoryReducer;

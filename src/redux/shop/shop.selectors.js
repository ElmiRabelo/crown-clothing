import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	shop => shop.collections
);

//collections é um objeto, com isso converto para array, vou então pecorrer esse array com map. e para cada item irei pegar os valores de seu index especifico.
// Ex: collections[hats]
export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam =>
	createSelector(
		[selectCollections],
		collections => collections[collectionUrlParam]
	);

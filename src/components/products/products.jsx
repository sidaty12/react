import React from 'React';
import { Grid } from '@material-ul/core';

import product from './product/product';
 /*2 ajouter un tableau sur le component */

const products = [
{id: 1, name: 'Shoes', description: 'Running shoes.', price:'$5'},
{id: 2, name: 'Macbook', description: 'Apple macbook.', price:'$10'},

];


/*1*/ const Products = () => {
	
return (
<main>
	<Grid container justify="center" spacing={4}>

/*3 ajouter la méthode map sur products et lui 
passe un paremetre product */

	{products.map((product) => (
		<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
			<product product={product}/>
		</Grid>
		))}
		
     </Grid>
</main>
     )
	
}

export default products; 
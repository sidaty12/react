
import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography,IconButton}
from '@material-ul/core';
import {AddShoppingCart} from '@material-ul/icons';

import useStyles from './styles';

const Product = ({product, onAddToCart }) => {
  const classes = useStyles();

  //const handleAddToCart = () => onAddToCart(product.id, 1);


  return (
   <Card className={classes.root}>
      <CardMedia className={classes.media} image='' title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography  variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography  variant="h5">
          {product.price}
          </Typography>
          </div>
        <Typography variant="h2" color="textSecondary">{product.description}</ Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>

   

    )
}

export default App;
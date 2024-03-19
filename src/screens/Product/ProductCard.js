import { StyleSheet, View, Dimensions, Image, Text, Button } from 'react-native'
import React from 'react'
import { tw } from 'nativewind'
var { width } = Dimensions.get("window");
const ProductCard = (props) => {
    const { product_name, price, image, stock } = props;
    
    // console.log('card:', product_name)
    // image.forEach((img, index) => {
    //     console.log(`Image ${index + 1} URL:`, img.url);
    // });
    // console.log(props)
    // console.log('img', image[0].url)
  return (
    <View >
      <Image style={styles.image}
      resizeMode="contain"
      source={{ uri: image[0].url }} />
       <View style={styles.card} />
            <Text >
                {(product_name.length && product_name.length > 15) ? product_name.substring(0, 15 - 3)
                    + '...' : product_name
                }
            </Text>

            <Text style={styles.price}>${price}</Text>

            {stock > 0 ? (
                <View style={{ marginBottom: 60 }}>
                    <Button
                        title={'Add'}
                        color={'green'}
                        onPress={() => {
                            dispatch(addToCart({ ...props, quantity: 1, })),
                                Toast.show({
                                    topOffset: 60,
                                    type: "success",
                                    text1: `${product_name} added to Cart`,
                                    text2: "Go to your cart to complete order"
                                })
                        }}
                    >
                    </Button>
                </View>
            ) : <Text style={{ marginTop: 20 }}>Currently Unavailable</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: width / 2 - 20,
        height: width / 1.7,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: 'white'
    },
    image: {
        width: width / 2 - 20 - 10,
        height: width / 2 - 20 - 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -45
    },
    card: {
        marginBottom: 10,
        height: width / 2 - 20 - 90,
        backgroundColor: 'transparent',
        width: width / 2 - 20 - 10
    },
    title: {
        fontWeight: "bold",
        fontSize: 14,
        textAlign: 'center'
    },
    price: {
        fontSize: 20,
        color: 'orange',
        marginTop: 10
    }
})


export default ProductCard
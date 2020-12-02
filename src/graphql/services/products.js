export const getProducts = () => {
  return `{
        products {
            id
            title
            image_url
            price(currency:USD)
            product_options{
              title
              prefix
              suffix
              options{
                id
                value
              }
            }
        }
    }`;
};

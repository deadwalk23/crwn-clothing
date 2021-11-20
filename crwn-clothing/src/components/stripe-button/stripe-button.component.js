import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) =>
    {
        const priceForStripe = price * 100;
        const publishablekey = 'pk_test_51JxZ91SC3CJCZvJpqwf2P2VSDDQ2uFqvU0LNhByHpUH7VXJNTlNsh9f776QO4pPR8Jo6R0BfWcC2dhD0Ph5OxsJj009tAeFquI';

        const onToken = token => {
                console.log(token);
                alert('Payment Successful');
        }

        return (
            <StripeCheckout 
                label= 'Pay Now'
                name= 'Crown Clothing Ltd.'
                billingAddress
                shippingAddress
                image='https://svgshare.com/i/CUz.svg'
                description={`Your Total Is $${ price }`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishablekey}
            />
        )

    }

    export default StripeCheckoutButton;
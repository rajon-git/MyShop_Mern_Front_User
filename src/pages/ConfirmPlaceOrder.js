import React, { useEffect } from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import { FaCheckCircle } from 'react-icons/fa'; // Import FontAwesome icon
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector

function ConfirmPlaceOrder() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            // Redirect to my-orders page after 5 seconds
            navigate('/my-orders');
        }, 5000); // 5 seconds

        // Clear the timeout on component unmount
        return () => clearTimeout(timer);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Meta title={"Confirm Order"} />
            <BreadCrumb title="Confirm Order" />
            <Container class1="cart-wrapper home-wrapper-2 py-5">
                <div className="confirm-order-animation">
                    <FaCheckCircle className="checkmark-icon" />
                    <h1 className="fade-in">Confirm Your Order</h1>
                    {/* Add more content here */}
                </div>
            </Container>
        </>
    );
}

export default ConfirmPlaceOrder;

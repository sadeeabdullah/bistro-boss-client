import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

// ToDo: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk)

const Payment = () => {
    return (
        <div>
            <SectionTitle heading={"Payment"} subHeading={"Please Pay To Eat"}></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
import React from "react";
import Card from "../components/Card";
import axios from "axios";
import { AppContext } from "../App";

function Orders() {
    const { onAddToCart, onAddToFavorite } = React.useContext(AppContext);
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('http://localhost:3001/orders');
                setOrders(data.map((obj) => obj.items).flat());
                setIsLoading(false);
            } catch (error) {
                alert('Ошибка :(');
            }
        })();
    }, []);

    return ( 
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
            <h1>Мои заказы</h1>
            </div>
            <div className="d-flex flex-wrap">
            {(isLoading ? [...Array(12)] : orders)
                .map((item, index) => 
                <Card
                    key={index}
                    loading={isLoading}
                    {...item}
                />
            )}
            </div>  
        </div>
    );
}

export default Orders;
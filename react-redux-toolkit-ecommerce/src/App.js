import { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/Notification";
import { sendCartData } from "./store/cart-slice";
import { fetchData } from "./store/cart-actions";

let isFirstRender = true;

function App() {
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  // Thunk Action Function Cretion Alternate

  // useEffect(() => {
  //   if(isFirstRender){
  //     isFirstRender = false;
  //     return;
  //   }
  //   const sendRequest = async () => {
  //     // Send state as Sending request
  //     dispatch(
  //       uiActions.showNotification({
  //         open: true,
  //         message: "Sending Request",
  //         type: "warning",
  //       })
  //     );
  //     const res = await fetch(
  //       "https://redux-toolkit-beef6-default-rtdb.firebaseio.com/cartItem.json",
  //       {
  //         method: "PUT",
  //         body: JSON.stringify(cart),
  //       }
  //     );
  //     const data = res.json();
  //     // Send state as Request is Successful
  //     dispatch(
  //       uiActions.showNotification({
  //         open: true,
  //         message: "Sending Request to database Successful",
  //         type: "success",
  //       })
  //     );
  //   };
  //   sendRequest().catch((err) => {
  //     // Send state as Error
  //     dispatch(
  //       uiActions.showNotification({
  //         open: true,
  //         message: "Sending Request Fialed",
  //         type: "error",
  //       })
  //     );
  //   });
  // }, [cart, dispatch]);
  // const cartItems = useSelector((state) => state.cart.itemList);
  // console.log(cartItems);

  return (
    <div className="App">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;

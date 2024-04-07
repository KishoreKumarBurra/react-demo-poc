import { useEffect, useState } from "react";
import { SWIGGY_RES_MENU_API } from "./constants"

/**
 * 
 * @param {*} resId 
 * @returns 
 * Creating the Custom hook for fetching the RestaurantMenu Info details
 * so created useRestaurantMenu hook, for this method we are passing the resId as an argument to pass the id to the URL
 */
const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(SWIGGY_RES_MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
    }
    return resInfo;
}

export default useRestaurantMenu; 
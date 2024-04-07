import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    //No need to pass anything for this custom Hook
    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(() => {
        //Add event listener to check the uses online status
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });

    }, []);

    //It will resturn the Boolean value of online status
    return onlineStatus;
};

export default useOnlineStatus;
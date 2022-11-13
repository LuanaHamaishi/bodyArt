import { useState } from "react";

export default function useUserProfile() {
    const [userProfile, setUserProfile] = useState({
        name: "User Testy McTesty",
        type: "pro",
    })

    return userProfile;
}
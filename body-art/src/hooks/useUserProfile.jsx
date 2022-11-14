import { useState } from "react";

export default function useUserProfile() {
    const [userProfile, setUserProfile] = useState({
        name: "User Testy McTesty",
        type: "pro",
        id: 1
    })

    return userProfile;
}
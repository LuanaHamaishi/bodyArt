import { useState } from "react";

export const setUserProfile = ({id, nome, type, userRole}) => {
    sessionStorage.setItem("id", id);
    sessionStorage.setItem("name", nome)
    sessionStorage.setItem("type", type)
    sessionStorage.setItem("userRole", userRole)
}

export const getUserProfile = () => {
    return {
        id: sessionStorage.get("id"),
        name: sessionStorage.get("nome"),
        type: sessionStorage.get("type"),
        role: sessionStorage.getItem("userRole")
    }
}

export const clear = () => {
    sessionStorage.clear()
}
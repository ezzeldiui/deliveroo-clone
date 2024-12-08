import { Link } from "react-router-dom";
import logoSrc from "../assets/deliveroo-logo.png";
import { baseUrl } from "@/main";

export function Logo() {
    return (
        <Link to={`${baseUrl}/`}>
            <img src={logoSrc} alt=""  width={120} height={120}  />
        </Link>
    );
}
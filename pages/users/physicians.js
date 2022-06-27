import { PhysicianInformation } from "../../components/physicianStats.tsx";
import dynamic from "next/dynamic";
import { AuthContextChecker } from "../../components/authContextChecker.tsx";

export default function Physicians() {
    const PhysicianInformationComponent = dynamic(() => import("../../components/physicianStats.tsx").then(mod => mod.PhysicianInformation), { ssr: false });
    
    return (
        <div>
            <AuthContextChecker />
            <PhysicianInformationComponent />
        </div>
    );
}
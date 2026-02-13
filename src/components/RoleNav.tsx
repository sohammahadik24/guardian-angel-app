import { useUserRole } from "@/context/UserRoleContext";
import CaretakerBottomNav from "@/components/CaretakerBottomNav";

const RoleNav = () => {
  const { role } = useUserRole();
  
  // Elderly users get no bottom nav (simplified, back-button navigation)
  if (role === "elderly") return null;
  
  return <CaretakerBottomNav />;
};

export default RoleNav;

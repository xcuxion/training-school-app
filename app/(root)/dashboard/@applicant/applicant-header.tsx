import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ApplicantHeaderProps {
  name: string;
  avatarUrl?: string;
  onLogout: () => void;
}

const ApplicantHeader: React.FC<ApplicantHeaderProps> = ({ name, avatarUrl, onLogout }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={avatarUrl || "/default-avatar.png"} alt={name} />
          <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <span className="text-lg font-semibold">{name}</span>
      </div>
      <Button onClick={onLogout} variant="destructive">
        Logout
      </Button>
    </div>
  );
};

export default ApplicantHeader;

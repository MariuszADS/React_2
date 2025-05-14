import { useNavigate } from "react-router-dom";
import { ArrowLeft } from 'lucide-react'; 

export default function Back() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className="back-button">
      <ArrowLeft /> Wróć
    </button>
  );
}

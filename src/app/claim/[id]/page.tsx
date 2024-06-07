
import ClaimForm from "@/components/ui/ClaimForm";
import ProtectedRoute from "@/utils/ProtectedRoute";

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <ProtectedRoute>
      <div className="h-screen mt-[10%] md:w-[40%] w-[90%] mx-auto">
        <h1 className="text-center mb-4 font-bold text-xl">Claim Lost Item</h1>
        <ClaimForm id={id} />
      </div>
    </ProtectedRoute>
  );
};

export default page;

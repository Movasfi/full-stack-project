import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

const LoadingPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <Button variant="outline" disabled size="icon-sm">
                <Spinner data-icon="inline-start" />
                Please wait
            </Button>
        </div>
    );
};

export default LoadingPage;

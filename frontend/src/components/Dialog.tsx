interface IProps {
    errorMessage: string | undefined,
    isError: boolean
    closeError: () => void
    resetFields: () => void
    errorType: string
}
import {
    AlertDialogCancel,
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { memo } from "react";
const Dialog = ({ errorMessage, isError, closeError, errorType, resetFields }: IProps) => {
    console.log(errorMessage);
    return (
        <AlertDialog
            open={isError}
            onOpenChange={(open) => {
                if (!open) {
                    resetFields();
                    closeError();
                }
            }}
        >
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Login failed
                    </AlertDialogTitle>

                    <AlertDialogDescription>
                        {errorMessage && errorType === "login" ? "Your session has expired. Please try again." : ""}
                        {errorMessage && errorType === "signup" ? "Something went wrong, please try later again" : ""}
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel>Try again</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default memo(Dialog)
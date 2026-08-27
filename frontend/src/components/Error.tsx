
interface IProps {
    errorMesagge: string
    className: string
}

const ErrorMessage = ({ className, errorMesagge }: IProps) => {
    return (
        <div className={`flex min-h-[200px] items-center justify-center ${className}`}>
            <p className="text-sm font-medium  text-red-600">
                {errorMesagge}
            </p>
        </div>
    );
};

export default ErrorMessage;
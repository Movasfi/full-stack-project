import { Card, CardContent, CardHeader } from "./ui/card"

interface IProps {
    data: {
        cardHeader?: string
        CardCon?: number
    }
}
const StatsCard = ({ data }: IProps) => {
    const { CardCon, cardHeader } = data
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <h3 className="text-xl font-semibold">{cardHeader}</h3>
            </CardHeader>
            <CardContent>
                <p className="text-2xl font-bold">{CardCon}</p>
            </CardContent>
        </Card>
    );
}

export default StatsCard
import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/react";
import {SignUpButton} from "@features/account";

export const HomeInfoCard = () => {
    return (
        <Card className="bg-transparent shadow-none">
            <CardHeader className="flex gap-3">
                <p className="text-[49px] text-white">
                    Ваше спокойствие — наше обещание.
                </p>
            </CardHeader>
            <CardBody>
                <p className="text-white opacity-60">
                    Sell Shield: ваш надежный союзник в обеспечении безопасности и минимизации финансовых рисков при онлайн-сделках.
                </p>
            </CardBody>
            <CardFooter>
                <SignUpButton/>
            </CardFooter>
        </Card>
    )
}
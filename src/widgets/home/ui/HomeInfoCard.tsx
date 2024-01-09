import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/react";
import {SignUpButton} from "@features/account";

export const HomeInfoCard = () => {
    return (
        <Card className="max-w-[40rem] bg-transparent shadow-none my-10 mx-[10.5  vw]">
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
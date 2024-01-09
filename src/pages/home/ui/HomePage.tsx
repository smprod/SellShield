import {BaseLayout} from "@app";
import {HomeInfoCard} from "@widgets/home";

export const HomePage = () => {
    return (
        <BaseLayout>
            <div className="max-w-[40rem] my-10 mx-[10.5vw]">
                <HomeInfoCard/>
            </div>
        </BaseLayout>
    )
}
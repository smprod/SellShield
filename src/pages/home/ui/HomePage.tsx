import {BaseLayout} from "@app";
import {HomeInfoCard} from "@widgets/home";

export const HomePage = () => {
    return (
        <BaseLayout>
            <div>
                <HomeInfoCard/>
            </div>
        </BaseLayout>
    )
}
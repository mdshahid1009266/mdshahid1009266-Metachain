import Cover from "../components/Cover"
import AfterCover from "../components/AfterCover"
import BeforeFooter from "../components/BeforeFooter"
import Trending from "../components/Trending"
export default () => {
    return (
        <div id="home">
            <div className="homeContainer">
                <Cover />
                <AfterCover />
                {/* <Trending /> */}
                <BeforeFooter />
            </div>
        </div>
    )
}
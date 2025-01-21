import { Link } from "react-router-dom"
export default ()=>{
    return(
        <div id="notfound">
            <div className="notFoundContainer flexc flex-col">
                <div className="notfoundImg flex justify-center">
                    <img src="/images/nothingfound.png" alt="" />
                </div>
                <div className="notfoundTitle text-center text-[#fff]">
                    <h1 className="text-3xl">Its look like you are lost. <br /> Click <Link to={"/"} className="underline animated-gradient">Home</Link></h1>
                </div>

            </div>
        </div>
    )
}
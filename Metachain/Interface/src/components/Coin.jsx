export default ({ coin }) => {

    return (
        <div className="coin">
            <div className="coinContainer text-[#fff] flex justify-between items-center gap-3 p-4 rounded-lg mb-4">
                <div className="coinImg">
                    <img src={coin.image} className="w-[80px]" alt="" />
                </div>
                <div className="flex flex-col gap-2 justify-between text-xl">
                    <div className="coinInfo flex gap-1 font-medium">
                        <h1 className="coinName">{coin.name}</h1>
                        <h2 className="coinSymbol">{` (${coin.symbol.toUpperCase()})`}</h2>
                    </div>
                    <div className="coinPrice flex gap-2">
                        <h1>${coin.current_price}</h1>
                        <h2 className={coin.price_change_percentage_24h > 0 ? "coinPriceChange green" : "coinPriceChange red"}>{coin.price_change_percentage_24h.toFixed(2)}%</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
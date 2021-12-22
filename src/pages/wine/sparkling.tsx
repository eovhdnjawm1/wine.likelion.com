import type { NextPage } from "next"; 
import { useWindeData } from "../../hooks/useWineData";
import { Wine} from "../../types/Wine"


const sparkling: NextPage = () => {
    const name = 'sparkling';
    const { data, error } = useWindeData(name)

// swr 이 알아서 뱉어준다. data면 data error 면 에러
if(error) return <div>Failed to Loading...</div>
if(!data) return <div>...Loading</div>

    return (
        <div>
            <h1>sparkling</h1>
            <main>
                {/* 리엑트에서 map함수 쓸꺼면 언제나 key입력 */}
                { data.map((wineData: Wine) => {
                    const { id, wine, winery} = wineData;
                    return (
                        <div key={`sparkling-wine-list-${wineData.id}`}>
                            <h1>{wine}</h1>
                            <p>{winery}</p>
                        </div>
                    )
                })}
            </main>
        </div>
    )
}

export default sparkling;

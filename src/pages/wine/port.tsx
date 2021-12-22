import type { NextPage } from "next"; 
import useSWR from 'swr';
import { useWindeData } from "../../hooks/useWineData";
import { Wine} from "../../types/Wine"

// fetcher 여기뿐만아니라 다른데서도 쓰인다
// 모든 와인페이지에


const port: NextPage = () => {
    const name = 'port';
    const { data, error } = useWindeData(name)

// swr 이 알아서 뱉어준다. data면 data error 면 에러
if(error) return <div>Failed to Loading...</div>
if(!data) return <div>...Loading</div>

    return (
        <div>
            <h1>port</h1>
            <main>
                {/* 리엑트에서 map함수 쓸꺼면 언제나 key입력 */}
                { data.map((wineData: Wine) => {
                    const { id, wine, winery} = wineData;
                    return (
                        <div key={`port-wine-list-${wineData.id}`}>
                            <h1>{wine}</h1>
                            <p>{winery}</p>
                        </div>
                    )
                })}
            </main>
        </div>
    )
}

// Next.js 에서 S S R을 위해서 데이터를 미리 불러오는 함수
// 
// export async function getServerSideProps(){
    
    
//     const { data, error } = useSWR('https://api.sampleapis.com/wines/port', fetcher);
//     return {props: {data, error}}
// }
export default port;

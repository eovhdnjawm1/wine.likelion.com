import axios from 'axios';

// export 빼내는 역할을 한다
export const fetcher = (url: string) => axios.get(url).then(res => res.data);
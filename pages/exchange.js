import { useRouter } from 'next/router';

export default function F(){
    const {query} = useRouter();

    return(
        <div>
            <p>{query.currency1}</p>
            <p>{query.currency2}</p>
        </div>
    )
}
import { useRouter } from 'next/router';

export default function F(){
    const {query} = useRouter();

    var c1 = query.currency1;
    var c2 = query.currency2;
    var amount = query.c1amount;

    

    return(
        <div>
            <p>{c1}</p>
            <p>{c2}</p>
            <p>{amount}</p>
        </div>
    )
}
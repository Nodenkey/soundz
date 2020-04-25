import React, {useEffect, useState} from "react";
import Rank from "./Rank.component";
import Img from "../../assets/images/musician3.jpg";


const AllRanks = () => {
    const [ranks, setState] = useState({
        ranks: [],
    })

    const url = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        fetch(url).then(response => response.json()).then(users =>  setState({...ranks, ranks: users}))
    },[ranks]);

    return ranks.ranks.length === 0 ? <div className="spinner"><i className="fas fa-circle-notch fa-spin"/></div> :
        ranks.ranks.map((users, i) => {
            if (i < 5){
                return <Rank key={ranks.ranks[i].id} id={ranks.ranks[i].id} artiste={ranks.ranks[i].name} song={ranks.ranks[i].username}
                             release_date={"13-12-20"} image={Img}/>
            }
        })

}

export default AllRanks;
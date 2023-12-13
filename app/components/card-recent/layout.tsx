"use client";
import { CardContainer, ContainerText } from "./style";
import { Avatar } from "./style";
import { FaLocationPin } from "react-icons/fa6";
interface CardRecentProps{
    user: {
        avatar_url: string;
        login: string;
        location: string;
    }
}

export default function CardRecent({user}: CardRecentProps){
    return(
        <CardContainer>
           <Avatar src={user.avatar_url} alt={"Imagem de "+user.login}/>
           <ContainerText>
                <p>{user.login}</p>
                <div>
                    <FaLocationPin/>
                    <p>{user.location}</p>
                </div>
           </ContainerText>
        </CardContainer>
    );
}
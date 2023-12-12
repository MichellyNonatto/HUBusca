import React from 'react';
import { Avatar, Card, TextHeader, Locale, Name, Username, Description } from './style';
import { FaLocationPin } from "react-icons/fa6";

interface CardProfileProps {
    avatar: string;
    username: string;
    name: string;
    bio: string;
    location: string;
}

const CardProfile: React.FC<CardProfileProps> = ({ avatar, username, name, bio, location }) => {
    return (
        <Card>
            <Avatar image={avatar} />
            <div>
                <TextHeader>
                    <div style={{ textAlign: 'start' }}>
                        <Name>{name}</Name>
                        <Username>{username}</Username>
                    </div>
                    <Locale>
                        <FaLocationPin />
                        {location}
                    </Locale>
                </TextHeader>
                <Description>{bio}</Description>
            </div>
        </Card>
    );
};

export default CardProfile;

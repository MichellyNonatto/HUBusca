import { Container, ProfileContainer, RepoContainer, Avatar, Name, ContainerSubtitle, Description, InfoContainer } from "./style";
import { FaLocationPin, FaUserGroup  } from "react-icons/fa6";
import { RiGitRepositoryFill } from "react-icons/ri";
import { FaKey } from "react-icons/fa";

interface CardRepositorieProps {
  repositories: any[];
  user: {
    avatar_url: string;
    login: string;
    name: string;
    bio: string;
    location: string;
    followers: number;
    public_repos: number;
    id: number;
  }
}
export default function CardRepositorie({ user, repositories }: CardRepositorieProps) {
  return (
    <Container>
      <ProfileContainer>
        <Avatar src={user.avatar_url} alt={"Imagem de " + user.name} />
        <Name>{user.name}</Name>
        <ContainerSubtitle>
          <h5>{user.login}</h5>
          <ContainerSubtitle>
            <FaLocationPin />
            <p>{user.location}</p>
          </ContainerSubtitle>
        </ContainerSubtitle>
        <Description>
          {user.bio}
        </Description>
        <div>
          <InfoContainer values={{icon: <FaKey/>, number: user.id, text: 'id'}}/>
          <InfoContainer values={{icon: <FaUserGroup/>, number: user.followers, text: 'seguidores'}}/>
          <InfoContainer values={{icon: <RiGitRepositoryFill/>, number: user.public_repos, text: 'repositórios públicos'}}/>
        </div>
      </ProfileContainer>
      <RepoContainer>
        <ul>
          {repositories.map((repo: any) => (
            <li key={repo.name}>
              dasdas
            </li>
          ))}
        </ul>
      </RepoContainer>
    </Container>
  );
}
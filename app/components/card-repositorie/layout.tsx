import { Container, ProfileContainer, RepoContainer, Avatar, Name, ContainerSubtitle, Description, InfoContainer, NameRepo, DataContainer, CardLeague } from "./style";
import { FaLocationPin, FaUserGroup } from "react-icons/fa6";
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
        <ContainerSubtitle colorPrimary={false}>
          <h5>{user.login}</h5>
          <ContainerSubtitle colorPrimary={false}>
            <FaLocationPin />
            <p>{user.location}</p>
          </ContainerSubtitle>
        </ContainerSubtitle>
        <Description>
          {user.bio}
        </Description>
        <div>
          <InfoContainer values={{ icon: <FaKey />, number: user.id, text: 'id' }} />
          <InfoContainer values={{ icon: <FaUserGroup />, number: user.followers, text: 'seguidores' }} />
          <InfoContainer values={{ icon: <RiGitRepositoryFill />, number: user.public_repos, text: 'repositórios públicos' }} />
        </div>
      </ProfileContainer>
      <RepoContainer>
        <ul>
          {repositories.map((repo: any) => (
            <a href={repo.html_url}>
              <li key={repo.name}>
                <ContainerSubtitle colorPrimary={true}>
                  <NameRepo>{repo.name}</NameRepo>
                  <DataContainer>
                    <p>Criado em: {repo.created_at}</p>
                    <p>Último commit: {repo.pushed_at}</p>
                  </DataContainer>
                </ContainerSubtitle>
                <p>{repo.description}</p>
                <CardLeague>
                {repo.languages.map((language: string, index: number) => (
                    <p>{language}</p>
                ))}
                </CardLeague>
              </li>
            </a>
          ))}
        </ul>
      </RepoContainer>
    </Container>
  );
}
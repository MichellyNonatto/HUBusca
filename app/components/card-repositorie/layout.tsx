interface CardRepositorieProps {
    repositories: any[];
    user:{
        avatar: string;
        username: string;
        name: string;
        bio: string;
        location: string;
        followers: string;
        repositories: string;
        id: number;
    }
  }
  export default function CardRepositorie({ user, repositories }: CardRepositorieProps) {
    return (
      <>
        <ul>
            {user.id}
          {repositories.map((repo: any) => (
              <li key={repo.name}>
            </li>
          ))}
        </ul>
      </>
    );
  }
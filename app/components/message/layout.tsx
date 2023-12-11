import { Text } from "./style";

export default function Message(){
    const textValues = {
        'title': 'Perfis do GitHub',
        'subtitle': 'Obtenha as informações que você prescisa',
        'description': 'Para começar sua pesquisa, utilize a barra de “Pesquisar” acima e insira o nome de um perfil registrado no GitHub. '
    }
    return(
        <Text values={textValues}/>
    );
}
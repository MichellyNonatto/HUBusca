import { Text } from "./style";

export default function Message(){
    const textValues = {
        'title': 'Explorador de Perfis GitHub',
        'subtitle': 'Encontre rapidamente as informações que você precisa',
        'description': 'Inicie sua pesquisa inserindo o nome de usuário do GitHub na barra de pesquisa acima. Explore perfis, repositórios e contribuições de forma eficiente para obter insights valiosos sobre os desenvolvedores da comunidade.'        
    }
    return(
        <Text values={textValues}/>
    );
}